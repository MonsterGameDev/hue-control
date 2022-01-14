import {
  Component,
  Input,
  OnChanges,
  OnInit,
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
  formattedTimeStamp?: string;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.timeStamp) {
      const ts: TimeStampObject = changes.timeStamp.currentValue;
      if (ts) this.formattedTimeStamp = ts.hh + ':' + ts.mm + ':' + ts.ss;
    }
  }

  ngOnInit(): void {}
}
