import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import {
  Group,
  GroupActionUpdate,
  GroupActionUpdateResponse,
} from './groups.interfaces';

export const loadGroups = createAction('[GROUPS] - Load');
export const loadGroupsSuccess = createAction(
  '[GROUPS] - Load Success',
  props<{ payload: Group[] }>()
);
export const loadGroupsError = createAction(
  '[GROUPS] - Load Fail',
  props<{ error: HttpErrorResponse }>()
);

export const updateGroupAction = createAction(
  '[GROUPS] - Update GroupAction',
  props<{ payload: GroupActionUpdate }>()
);
export const updateGroupActionSuccess = createAction(
  '[GROUPS] - Update GroupAction Success',
  props<{ payload: GroupActionUpdateResponse }>()
);
export const updateGroupActionFail = createAction(
  '[GROUPS] - Update GroupAction Fail',
  props<{ error: HttpErrorResponse }>()
);
