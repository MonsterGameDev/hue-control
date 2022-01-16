import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";
import { Scenes } from "./scenes.interfaces";

export const loadScenes = createAction('[SCENES] - Load');
export const loadScenesSuccess = createAction('[SCENES] - Load Success', props<{payload: Scenes}>());
export const loadScenesError = createAction('[SCENES] - Load Fail', props<{error: HttpErrorResponse}>());
