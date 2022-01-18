import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  clearSelectedScene,
  setSelectedScene,
} from 'src/app/+state/scenes/scenes.actions';
import { Scene } from 'src/app/+state/scenes/scenes.interfaces';

@Component({
  selector: 'app-scenes-list',
  templateUrl: './scenes-list.component.html',
  styleUrls: ['./scenes-list.component.scss'],
})
export class ScenesListComponent implements OnInit {
  @Input() scenes: Scene[] = [];

  constructor(private store: Store) {}

  ngOnInit(): void {}

  setSelectedScene(scene: Scene) {
    const payload: Scene = scene;
    this.store.dispatch(setSelectedScene({ payload }));
  }

  resetForm() {
    this.store.dispatch(clearSelectedScene());
  }
}
