import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Flow, FlowState, Step } from '../+state/flow/flow.interfaces';
import { selectFlow } from '../+state/flow/flow.selectors';

import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-save-and-load-flow',
  templateUrl: './save-and-load-flow.component.html',
  styleUrls: ['./save-and-load-flow.component.scss'],
})
export class SaveAndLoadFlowComponent implements OnInit {
  subs: Subscription[] = [];
  faBars = faBars;
  faTimes = faTimes;

  flow$: Observable<Flow> = this.store.pipe(
    select(selectFlow),
    map((data: FlowState) => data.flow)
  );
  loading: boolean = false;
  flow?: Flow;
  hasSteps?: boolean;
  flowTitle?: string;

  steps?: Step[];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.subs.push(
      this.flow$.subscribe((flow: Flow) => {
        this.flow = flow;
        this.steps = flow.steps;
        this.hasSteps = flow.steps.length > 0;
        this.flowTitle = flow.projectName;
      })
    );
  }

  saveToFile() {}

  saveToLocalStorage() {}

  copyToClipBoard() {}
}
