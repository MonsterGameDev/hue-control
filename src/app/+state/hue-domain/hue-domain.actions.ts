import { createAction, props } from "@ngrx/store";
import { HttpErrorResponse } from '@angular/common/http';

export const loadFullHueConfigAction = createAction('[HUE] Load All');

export const loadFullHueConfigSuccessAction = createAction('[HUE] Load All Success', props<{payload: any}>());

export const loadFullHueConfigErrorAction = createAction('[HUE] Load All Fail', props<{error: HttpErrorResponse}>());


{}
