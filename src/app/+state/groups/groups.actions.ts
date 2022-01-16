import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";
import { Group } from "./groups.interfaces";

export const loadGroups = createAction('[GROUPS] - Load');
export const loadGroupsSuccess = createAction('[GROUPS] - Load Success', props<{payload: Group[]}>());
export const loadGroupsError = createAction('[GROUPS] - Load Fail', props<{error: HttpErrorResponse}>());
