import { stringify } from '@angular/compiler/src/util';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  TimeStampObject,
  TimeUpdateObject,
} from 'src/app/+state/app.interfaces';

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

  timeStampForm: any;

  constructor(private fb: FormBuilder) {}

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
      title: ['', []],
      timeStamp: [{}, []],
      scene: [{}, []],
      transitionTime: [200, []],
    });
  }

  startCreateTimeStamp() {
    this.showCreateForm = !this.showCreateForm;
    if (this.showCreateForm) {
    } else {
    }
    this.showCreateForm
      ? this.pauseAudio.emit(true)
      : this.playAudio.emit(true);
  }
}
