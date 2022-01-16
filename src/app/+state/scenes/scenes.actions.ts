import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
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
