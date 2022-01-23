import { Component, Input, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { Store } from '@ngrx/store';
import { setFlowTitleAction } from 'src/app/+state/flow/flow.actions';

@Component({
  selector: 'app-title-field',
  templateUrl: './title-field.component.html',
  styleUrls: ['./title-field.component.scss'],
})
export class TitleFieldComponent implements OnInit {
  @Input() flowTitle?: string;
  faEdit = faEdit;

  isEdit = false;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  edit() {
    this.isEdit = true;
  }

  saveTitle() {
    this.isEdit = false;
    if (this.flowTitle)
      this.store.dispatch(setFlowTitleAction({ payload: this.flowTitle }));
  }

  cancel() {
    this.isEdit = false;
  }
}
