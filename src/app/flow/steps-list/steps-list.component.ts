import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Step } from 'src/app/+state/flow/flow.interfaces';
import { selectAllSteps } from 'src/app/+state/flow/flow.selectors';

@Component({
  selector: 'app-steps-list',
  templateUrl: './steps-list.component.html',
  styleUrls: ['./steps-list.component.scss'],
})
export class StepsListComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];

  steps!: Step[];
  steps$: Observable<Step[]> = this.store.pipe(select(selectAllSteps));

  constructor(private store: Store) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subs.forEach((sub: Subscription) => sub.unsubscribe());
  }

  saveblob() {
    
  }
}
