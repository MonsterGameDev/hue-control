import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Step } from '../flow/flow.interfaces';
import { Scene } from './scenes.interfaces';

export const loadScenes = createAction('[SCENES] - Load');
export const loadScenesSuccess = createAction(
  '[SCENES] - Load Success',
  props<{ payload: Scene[] }>()
);
export const loadScenesError = createAction(
  '[SCENES] - Load Fail',
  props<{ error: HttpErrorResponse }>()
);

export const setSelectedScene = createAction('[SCENE] - Set Selected Scene', props<{payload: Scene}>())
export const clearSelectedScene = createAction('[SCENE] - Clear Selected Scene')
