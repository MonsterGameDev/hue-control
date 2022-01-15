import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

import { Observable } from 'rxjs';
import { TimeUpdateObject } from 'src/app/+state/app.interfaces';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit, AfterViewInit, OnChanges {
  @Output() progressEmitter = new EventEmitter<TimeUpdateObject>();
  @Input() play: boolean = false;
  @Input() pause: boolean = false;

  @ViewChild('audio', { static: true }) playerRef?: ElementRef;
  timeUpdate$?: Observable<TimeUpdateObject>;
  audio: any;

  constructor(private utilityService: UtilityService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.audio = document.querySelector('audio');

    this.timeUpdate$ = new Observable((subscriber) => {
      this.audio.ontimeupdate = (event: any) => {
        subscriber.next(
          this.utilityService.createFullTimeStamp(this.audio.currentTime)
        );
      };
    });

    this.initObservables();

    // this.timeUpdate$.subscribe((time) => console.log(time));
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'play': {
            if (changes.play.currentValue) this.audio.play();
            break;
          }
          case 'pause': {
            if (changes.pause.currentValue) this.audio.pause();
            break;
          }
        }
      }
    }
  }

  initObservables() {
    this.timeUpdate$?.subscribe((data: TimeUpdateObject) => {
      this.progressEmitter.emit(data);
    });
  }
}
