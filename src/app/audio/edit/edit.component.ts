import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
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
export class EditComponent implements OnInit, AfterViewInit {
  @Output() progressEmitter = new EventEmitter<TimeUpdateObject>();

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
  initObservables() {
    this.timeUpdate$?.subscribe((data: TimeUpdateObject) => {
      this.progressEmitter.emit(data);
    });
  }
}
