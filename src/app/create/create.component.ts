import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TimeStampObject, TimeUpdateObject } from '../+state/app.interfaces';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  timeStamp?: TimeStampObject;
  play: boolean = false;
  pause: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  timeUpdateEvent(timeUpdateObject: TimeUpdateObject) {
    this.timeStamp = timeUpdateObject.formatted;
    // console.log(this.timeStamp);
  }

  pauseAudio(e: any) {
    this.play = false;
    this.pause = true;
  }

  playAudio(e: any) {
    this.play = true;
    this.pause = false;
  }
}
