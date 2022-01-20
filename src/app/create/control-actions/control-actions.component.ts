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

  showCreateForm = false;
  showSuccessMessage = false;
  showForm = false;

  formattedTimeStamp?: string = '00:00:00';
  selectedScene?: Scene;
  timestampTitle?: string;
  transitionTime: string = '0.2';

  constructor(private store: Store) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.timeUpdateObject) {
      const ts: TimeStampObject =
        changes.timeUpdateObject?.currentValue?.formatted;
      if (ts) this.formattedTimeStamp = ts.hh + ':' + ts.mm + ':' + ts.ss;
    }
  }

  ngOnInit(): void {
    this.store
      .pipe(select(selectSelectedScene))
      .pipe(distinctUntilChanged())
      .subscribe((selectedScene: Scene | undefined) => {
        this.selectedScene = selectedScene;
      });
  }

  startCreateTimeStampClick() {
    this.showCreateForm = !this.showCreateForm;

    if (this.showCreateForm) {
      this.pauseAudio.emit(true);
      this.showSuccessMessage = false;
      this.showForm = true;
    } else {
      this.playAudio.emit(true);
    }
  }

  resetForm() {
    this.store.dispatch(clearSelectedScene());
    this.timestampTitle = '';
    this.transitionTime = '0.2';
  }

  submit() {
    if(!this.isValid()) return;
    this.showSuccessMessage = true;
    this.showForm = false;

    this.resetForm();

    const payload: Step = {
      title: this.timestampTitle!,
      sceneId: this.selectedScene!.id,
      timeStamp: this.formattedTimeStamp!,
      transitionTime: Number(this.transitionTime!) * 10,
      groupId: this.selectedScene!.group,
    };

    if (!this.isValid()) return;

    this.store.dispatch(addStepAction({ payload }));
    this.store.dispatch(clearSelectedScene());
  }


  selectScene() {
    this.store.dispatch(loadScenes());
  }

  isValid(): boolean {
    if (this.transitionTime === '') this.transitionTime = '0.2';

    return (
      !!this.formattedTimeStamp &&
      this.formattedTimeStamp !== '' &&
      !!this.timestampTitle &&
      this.timestampTitle !== '' &&
      !!this.selectScene &&
      !!this.transitionTime &&
      parseInt(this.transitionTime!) >= 0
    );
  }
}
