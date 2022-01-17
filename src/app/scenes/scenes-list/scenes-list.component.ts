import { Component, Input, OnInit } from '@angular/core';
import { Scene } from 'src/app/+state/scenes/scenes.interfaces';

@Component({
  selector: 'app-scenes-list',
  templateUrl: './scenes-list.component.html',
  styleUrls: ['./scenes-list.component.scss']
})
export class ScenesListComponent implements OnInit {
  @Input() scenes: Scene[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  

}
