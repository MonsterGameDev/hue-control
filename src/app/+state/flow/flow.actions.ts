import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Flow, Step } from './flow.interfaces';

export const loadFlowAction = createAction('[FLOW] - Load');
export const loadFlowSuccessAction = createAction(
  '[FLOW] - Load Success',
  props<{ payload: Flow }>()
);
export const loadFlowErrorAction = createAction(
  '[FLOW] - Load Fail',
  props<{ error: HttpErrorResponse }>()
);

export const createNewFlowAction = createAction(
  '[FLOW] - Create Flow',
  props<{ payload: Flow }>()
);

export const addStepAction = createAction(
  '[FLOW] - Add Step',
  props<{ payload: Step }>()
);
export const deleteStepAction = createAction(
  'FLOW - Delete Step',
  props<{ payload: string }>()
);
