import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Light } from './lights.interfaces';

export const loadLights = createAction('[LIGHTS] - Load');
export const loadLightsSuccess = createAction(
  '[LIGHTS] - Load Success',
  props<{ payload: Light[] }>()
);
export const loadLightsError = createAction(
  '[LIGHTS] - Load Fail',
  props<{ error: HttpErrorResponse }>()
);
