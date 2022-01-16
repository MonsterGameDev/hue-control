import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";
import { Lights } from "./lights.interfaces";

export const loadLights = createAction('[LIGHTS] - Load');
export const loadLightsSuccess = createAction('[LIGHTS] - Load Success', props<{payload: Lights}>());
export const loadLightsError = createAction('[LIGHTS] - Load Fail', props<{error: HttpErrorResponse}>());
