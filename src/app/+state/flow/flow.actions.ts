import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Flow, Step } from './flow.interfaces';

export const loadFlowAction = createAction('[FLOW] - Load');
export const loadFlowSuccessAction = createAction(
  '[FLOW] - Load Success',
  props<{ payload: Flow }>()
);
export const loadFlowError = createAction(
  '[FLOW] - Load Fail',
  props<{ error: HttpErrorResponse }>()
);

export const createNewFlowAction = createAction(
  '[FLOW] - Create Flow',
  props<{ payload: Flow }>()
);

export const addStep = createAction(
  '[FLOW] - Add Step',
  props<{ payload: Step }>()
);
export const deleteStep = createAction(
  'FLOW - Delete Step',
  props<{ payload: string }>()
);
