import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Flow, FlowState, Step } from 'src/app/+state/flow/flow.interfaces';
import { selectAllSteps, selectFlow } from 'src/app/+state/flow/flow.selectors';

@Component({
  selector: 'app-steps-list',
  templateUrl: './steps-list.component.html',
  styleUrls: ['./steps-list.component.scss'],
})
export class StepsListComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];

  steps!: Step[];
  steps$: Observable<Step[]> = this.store.pipe(select(selectAllSteps));
  flow$: Observable<FlowState> = this.store.pipe(select(selectFlow));
  flow?: Flow;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.subs.push(this.flow$.subscribe((data) => (this.flow = data.flow)));
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub: Subscription) => sub.unsubscribe());
  }

  saveblob() {
    window.open(
      URL.createObjectURL(
        new Blob([JSON.stringify(this.flow)], {
          type: 'application/binary',
        })
      )
    );
  }
}
