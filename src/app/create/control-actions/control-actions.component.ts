import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { distinctUntilChanged } from 'rxjs/operators';
import {
  TimeStampObject,
  TimeUpdateObject,
} from 'src/app/+state/app.interfaces';
import { addStepAction } from 'src/app/+state/flow/flow.actions';
import { Step } from 'src/app/+state/flow/flow.interfaces';
import {
  clearSelectedScene,
  loadScenes,
} from 'src/app/+state/scenes/scenes.actions';
import { Scene } from 'src/app/+state/scenes/scenes.interfaces';
import { selectSelectedScene } from 'src/app/+state/scenes/scenes.selectors';

@Component({
  selector: 'app-control-actions',
  templateUrl: './control-actions.component.html',
  styleUrls: ['./control-actions.component.scss'],
})
export class ControlActionsComponent implements OnInit, OnChanges {
  @Input() timeUpdateObject?: TimeUpdateObject;
  @Output() pauseAudio = new EventEmitter<boolean>();
  @Output() playAudio = new EventEmitter<boolean>();

  formattedTimeStamp?: string = '00.00:00';
  showCreateForm = false;
  selectedScene?: Scene;
  initialFormValues?: any;

  timeStampForm: any;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.timeUpdateObject) {
      const ts: TimeStampObject =
        changes.timeUpdateObject?.currentValue?.formatted;
      if (ts) this.formattedTimeStamp = ts.hh + ':' + ts.mm + ':' + ts.ss;
    }
  }

  ngOnInit(): void {
    this.timeStampForm = this.fb.group({
      id: [0],
      title: ['', [Validators.required]],
      timeStamp: ['', [Validators.required]],
      scene: [null, []],
      transitionTime: [
        200,
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.min(0),
        ],
      ],
    });

    this.initialFormValues = this.timeStampForm.value;

    this.store
      .pipe(select(selectSelectedScene))
      .pipe(distinctUntilChanged())
      .subscribe((selectedScene: Scene | undefined) => {
        console.log('selectedScene: ', selectedScene);

        this.selectedScene = selectedScene;
        this.timeStampForm.get('scene').value = selectedScene;

        console.log('timestampForm: ', this.timeStampForm);
      });
  }

  startCreateTimeStamp() {
    this.showCreateForm = !this.showCreateForm;

    if (this.showCreateForm) {
      this.pauseAudio.emit(true);
    } else {
      this.playAudio.emit(true);
    }

    this.timeStampForm.get('timeStamp').value =
      this.timeStampForm.formattedTimeStamp || '00:00:00';
  }

  resetForm() {
    this.store.dispatch(clearSelectedScene());
  }

  submit() {
    console.log('form: ', this.timeStampForm);

    if (this.timeStampForm.valid) {
      const title = this.timeStampForm.get('title').value;
      const scene: Scene = this.timeStampForm.get('scene').value;
      const timeStamp = this.timeStampForm.get('timeStamp').value;
      const transitionTime = this.timeStampForm.get('transitionTime').value;

      const payload: Step = {
        title,
        sceneId: scene.id,
        timeStamp,
        transitionTime: isNaN(transitionTime) ? transitionTime * 0.01 : 0,
        groupId: scene.group,
      };
      this.store.dispatch(addStepAction({ payload }));
      this.timeStampForm.reset(this.initialFormValues);
      this.store.dispatch(clearSelectedScene());
    }
  }

  selectScene() {
    this.store.dispatch(loadScenes());
  }
}
