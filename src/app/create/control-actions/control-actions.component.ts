import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TimeStampObject } from 'src/app/+state/app.interfaces';

@Component({
  selector: 'app-control-actions',
  templateUrl: './control-actions.component.html',
  styleUrls: ['./control-actions.component.scss'],
})
export class ControlActionsComponent implements OnInit, OnChanges {
  @Input() timeStamp?: TimeStampObject;
  @Output() pauseAudio = new EventEmitter<boolean>();
  @Output() playAudio = new EventEmitter<boolean>();

  formattedTimeStamp?: string = '00.00:00';
  showCreateForm = false;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.timeStamp) {
      const ts: TimeStampObject = changes.timeStamp.currentValue;
      if (ts) this.formattedTimeStamp = ts.hh + ':' + ts.mm + ':' + ts.ss;
    }
  }

  ngOnInit(): void {}

  startCreateTimeStamp() {
    this.showCreateForm = !this.showCreateForm;
    this.showCreateForm
      ? this.pauseAudio.emit(true)
      : this.playAudio.emit(true);
  }
}
