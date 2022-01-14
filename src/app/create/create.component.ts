import { Component, OnInit } from '@angular/core';
import { TimeStampObject, TimeUpdateObject } from '../+state/app.interfaces';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  timeStamp?: TimeStampObject;
  constructor() {}

  ngOnInit(): void {}

  timeUpdateEvent(timeUpdateObject: TimeUpdateObject) {
    this.timeStamp = timeUpdateObject.formatted;
    // console.log(this.timeStamp);
  }
}
