import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { TimeUpdateObject } from '../+state/app.interfaces';
import { Group } from '../+state/groups/groups.interfaces';
import { Scene } from '../+state/scenes/scenes.interfaces';
import { selectAllScenes } from '../+state/scenes/scenes.selectors';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  timeUpdateObject?: TimeUpdateObject;
  subs: Subscription[] = [];
  play: boolean = false;
  pause: boolean = false;
  scenes: Scene[] = [];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store
      .select(selectAllScenes)
      .subscribe((data: Scene[]) => (this.scenes = data));
  }

  timeUpdateEvent(timeUpdateObject: TimeUpdateObject) {
    this.timeUpdateObject = timeUpdateObject;
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
