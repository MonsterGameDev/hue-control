import { Component, OnInit, Input } from '@angular/core';
import { Step } from 'src/app/+state/flow/flow.interfaces';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { deleteStepAction } from 'src/app/+state/flow/flow.actions';
@Component({
  selector: 'app-step-item',
  templateUrl: './step-item.component.html',
  styleUrls: ['./step-item.component.scss'],
})
export class StepItemComponent implements OnInit {
  @Input() step?: Step;
  faMinusCircle = faMinusCircle;
  constructor(private store: Store) {}

  ngOnInit(): void {}

  deleteStep() {
    if (!this.step) return;
    this.store.dispatch(deleteStepAction({ payload: this.step }));
  }
}
