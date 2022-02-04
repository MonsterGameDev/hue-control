import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Flow, FlowState, Step } from '../+state/flow/flow.interfaces';
import { selectFlow } from '../+state/flow/flow.selectors';

import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { loadFlowSuccessAction } from '../+state/flow/flow.actions';
import { loadFullHueConfigAction } from '../+state/hue-domain/hue-domain.actions';

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
  showSaveSection = true;
  flow?: Flow;
  hasSteps?: boolean;
  flowTitle?: string;
  flowsInLocalStorage: any[] = [];
  flowJSON?: string;

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
    this.store.dispatch(loadFullHueConfigAction());
  }

  saveToFile() {
    const blob = new Blob([JSON.stringify(this.flow, null, 2)], {
      type: 'application/json',
    });

    const anchor = document.createElement('a');

    anchor.download = `hue-flow-${this.flowTitle}.txt`;
    anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
    anchor.dataset.downloadurl = [
      'text/plain',
      anchor.download,
      anchor.href,
    ].join(':');
    anchor.click();
  }

  saveToLocalStorage() {
    if (!this.flowTitle || !this.flow) return;
    localStorage.setItem(`flow_${this.flowTitle}`, JSON.stringify(this.flow));
  }

  copyToClipBoard() {
    navigator.clipboard.writeText(JSON.stringify(this.flow));
  }

  showSave() {
    this.showSaveSection = true;
  }

  showLoad() {
    this.showSaveSection = false;
    this.createLocalStorageKeysArray();
  }

  // LOAD

  createLocalStorageKeysArray() {
    for (let key in localStorage) {
      //  const value = localStorage.getItem(key)
      if (key.startsWith('flow_')) {
        key = key.replace('flow_', '');
        this.flowsInLocalStorage.push(key);
      }
    }
  }

  getItem(key: string) {
    const lsKey = 'flow_' + key;
    const json = localStorage.getItem(lsKey);

    if (json) this.flowJSON = JSON.stringify(JSON.parse(json), undefined, 4);
  }

  loadFlow() {
    if (this.flowJSON)
      this.store.dispatch(
        loadFlowSuccessAction({ payload: JSON.parse(this.flowJSON) })
      );
  }
}
