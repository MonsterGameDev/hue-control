import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { TimeStampObject } from 'src/app/+state/app.interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnChanges {
  @Input() timeStamp?: TimeStampObject;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {}
}
