import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-save-and-load-flow',
  templateUrl: './save-and-load-flow.component.html',
  styleUrls: ['./save-and-load-flow.component.scss'],
})
export class SaveAndLoadFlowComponent implements OnInit {
  loading: boolean = false;
  constructor(private store: Store) {}

  ngOnInit(): void {}
}
