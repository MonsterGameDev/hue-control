import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { TimeUpdateObject } from '../+state/app.interfaces';
import { FlowState, Step } from '../+state/flow/flow.interfaces';
import { selectFlow } from '../+state/flow/flow.selectors';
import { updateGroupAction } from '../+state/groups/groups.actions';
import { GroupActionUpdate } from '../+state/groups/groups.interfaces';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit, OnDestroy {
  flow$ = this.store.pipe(select(selectFlow));

  timeUpdateObject?: TimeUpdateObject;
  subs: Subscription[] = [];
  play: boolean = false;
  pause: boolean = false;

  formattedTimeStamp?: string = '00:00:00';
  flow?: FlowState;
  steps?: Step[];

  constructor(private store: Store) {}

  ngOnInit() {
    this.flow$.subscribe((data: FlowState): void => {
      this.flow = data;
      this.steps = data.flow.steps;
      console.log(this.steps);
    });
  }

  ngOnDestroy() {}

  timeUpdateEvent(e: TimeUpdateObject) {
    const currentFormattedtime =
      e.formatted.hh + ':' + e.formatted.mm + ':' + e.formatted.ss;

    if (currentFormattedtime === this.formattedTimeStamp) return;
    this.formattedTimeStamp = currentFormattedtime;

    this.searchStepsForTimeStampAndDispatch();
  }

  pauseAudio(e: any) {
    this.play = false;
    this.pause = true;
  }

  playAudio(e: any) {
    this.play = true;
    this.pause = false;
  }

  searchStepsForTimeStampAndDispatch() {
    const activeStep: Step | undefined = this.steps?.find(
      (step: Step) => step.timeStamp === this.formattedTimeStamp
    );

    if (activeStep) {
      console.log('I found one', activeStep);
      const payload: GroupActionUpdate = {
                  id: activeStep.groupId,
                  body: {
                    scene: activeStep.sceneId,
                    transitiontime: activeStep.transitionTime,
                  },
                };
                console.log('send at ' + this.formattedTimeStamp + ': ', payload);

                this.store.dispatch(updateGroupAction({ payload }));



    }
  }
}

// import { AfterViewInit, Component, OnInit } from '@angular/core';
// import { select, Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import { distinctUntilChanged, filter, map } from 'rxjs/operators';
// import { TimeUpdateObject } from '../+state/app.interfaces';
// import { Flow, FlowState, Step } from '../+state/flow/flow.interfaces';
// import { selectFlow } from '../+state/flow/flow.selectors';
// import { GroupActionUpdate } from '../+state/groups/groups.interfaces';
// import { UtilityService } from '../services/utility.service';
// import * as groupActions from './../+state/groups/groups.actions';

// const FLOW_MOCK: Flow = {
//   projectName: 'My Project',
//   activeStep: '1',
//   steps: [
//     {
//       title: 'Step 1',
//       sceneId: 'imXaCPTumHuU4po',
//       timeStamp: '00:00:00',
//       transitionTime: 2,
//       groupId: '7',
//     },
//     {
//       title: 'Step 2',
//       sceneId: 'UIM9-EmigSgJhW2',
//       timeStamp: '00:00:10',
//       transitionTime: 2,
//       groupId: '7',
//     },
//     {
//       title: 'Step 3',
//       sceneId: '7dTQBKpKnjY7ihm',
//       timeStamp: '00:00:20',
//       transitionTime: 2,
//       groupId: '7',
//     },
//     {
//       title: 'Step 4',
//       sceneId: 'EJvwD2nhlLtYFfc',
//       timeStamp: '00:00:30',
//       transitionTime: 100,
//       groupId: '7',
//     },
//   ],
// };

// @Component({
//   selector: 'app-player',
//   templateUrl: './player.component.html',
//   styleUrls: ['./player.component.scss'],
// })
// export class PlayerComponent implements OnInit, AfterViewInit {
//   constructor(private store: Store, private utilityService: UtilityService) {}
//   steps?: Step[];
//   audio: any;
//   timeUpdate$?: Observable<any>;
//   flow$ = this.store.pipe(select(selectFlow));
//   flow?: FlowState;

//   ngOnInit(): void {
//     const myFlow: Flow = FLOW_MOCK;
//     this.steps = myFlow.steps;

//     this.flow$.subscribe((data: FlowState): void => {
//       this.flow = data;
//       this.steps = myFlow.steps;
//       this.steps = data.flow.steps;
//       console.log(this.steps);
//     });
//   }

//   ngAfterViewInit() {
//     this.audio = document.querySelector('audio');

//     this.timeUpdate$ = new Observable((subscriber) => {
//       this.audio.ontimeupdate = (event: any) => {
//         subscriber.next(
//           this.utilityService.createFullTimeStamp(this.audio.currentTime)
//         );
//       };
//     });

//     this.initObservables();
//   }

//   initObservables() {
//     this.timeUpdate$
//       ?.pipe(
//         map((timeObj: TimeUpdateObject) => {
//           return (
//             timeObj.formatted.hh +
//             ':' +
//             timeObj.formatted.mm +
//             ':' +
//             timeObj.formatted.ss
//           );
//         }),
//         distinctUntilChanged(),
//         map((formattedObj: string): void | any => {
//           const stepToActivate: Step | undefined = this.steps?.find(
//             (step: Step) => step.timeStamp == formattedObj
//           );
//           return stepToActivate;
//         }),
//         filter((data) => data !== undefined)
//       )
//       .subscribe((data: Step) => {
//         const payload: GroupActionUpdate = {
//           id: data.groupId,
//           body: {
//             scene: data.sceneId,
//             transitiontime: data.transitionTime,
//           },
//         };
//         console.log('payload: ', payload);

//         this.store.dispatch(groupActions.updateGroupAction({ payload }));
//       });
//   }
// }
