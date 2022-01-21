import { Component, OnInit, Input } from '@angular/core';
import { Step } from 'src/app/+state/flow/flow.interfaces';

@Component({
  selector: 'app-step-item',
  templateUrl: './step-item.component.html',
  styleUrls: ['./step-item.component.scss']
})
export class StepItemComponent implements OnInit {
  @Input() step?: Step;

  constructor() { }

  ngOnInit(): void {
  }

}
