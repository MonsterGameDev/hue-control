import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadFullHueConfigAction } from '../+state/hue-domain/hue-domain.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    // TODO: Check if all nessesary data is available
    this.store.dispatch(loadFullHueConfigAction());
  }

}
