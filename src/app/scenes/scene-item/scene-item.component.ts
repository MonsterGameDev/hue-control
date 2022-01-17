import { Component, Input, OnInit } from '@angular/core';
import { Scene } from 'src/app/+state/scenes/scenes.interfaces';

@Component({
  selector: 'app-scene-item',
  templateUrl: './scene-item.component.html',
  styleUrls: ['./scene-item.component.scss'],
})
export class SceneItemComponent implements OnInit {
  @Input() scene?: Scene;

  constructor() {}

  ngOnInit(): void {}
}
