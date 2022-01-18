import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { TimeUpdateObject } from '../+state/app.interfaces';
import { Flow, Step } from '../+state/flow/flow.interfaces';
import { GroupActionUpdate } from '../+state/groups/groups.interfaces';
import { UtilityService } from '../services/utility.service';
import * as groupActions from './../+state/groups/groups.actions';

const FLOW_MOCK: Flow = {
  projectName: 'My Project',
  activeStep: '1',
  steps: [
    {
      title: 'Step 1',
      sceneId: 'imXaCPTumHuU4po',
      timeStamp: '00:00:00',
      transitionTime: 2,
      groupId: '7',
    },
    {
      title: 'Step 2',
      sceneId: 'UIM9-EmigSgJhW2',
      timeStamp: '00:00:10',
      transitionTime: 2,
      groupId: '7',
    },
    {
      title: 'Step 3',
      sceneId: '7dTQBKpKnjY7ihm',
      timeStamp: '00:00:20',
      transitionTime: 2,
      groupId: '7',
    },
    {
      title: 'Step 4',
      sceneId: 'EJvwD2nhlLtYFfc',
      timeStamp: '00:00:30',
      transitionTime: 100,
      groupId: '7',
    },
  ],
};

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit, AfterViewInit {
  constructor(private store: Store, private utilityService: UtilityService) {}
  steps?: Step[];
  audio: any;
  timeUpdate$?: Observable<any>;

  ngOnInit(): void {
    const myFlow: Flow = FLOW_MOCK;
    this.steps = myFlow.steps;
  }

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

  startFlow() {
    const updateObject: GroupActionUpdate = {
      id: '7',
      body: {
        scene: 'UIM9-EmigSgJhW2',
      },
    };

    this.store.dispatch(
      groupActions.updateGroupAction({ payload: updateObject })
    );
  }

  initObservables() {
    this.timeUpdate$
      ?.pipe(
        map((timeObj: TimeUpdateObject) => {
          return (
            timeObj.formatted.hh +
            ':' +
            timeObj.formatted.mm +
            ':' +
            timeObj.formatted.ss
          );
        }),
        distinctUntilChanged(),
        map((formattedObj: string): void | any => {
          const stepToActivate: Step | undefined = this.steps?.find(
            (step: Step) => step.timeStamp == formattedObj
          );
          return stepToActivate;
        }),
        filter((data) => data !== undefined)
      )
      .subscribe((data: Step) => {
        const payload: GroupActionUpdate = {
          id: data.groupId,
          body: {
            scene: data.sceneId,
            transitiontime: data.transitionTime,
          },
        };
        console.log('payload: ', payload);

        this.store.dispatch(groupActions.updateGroupAction({ payload }));
      });
  }
}
