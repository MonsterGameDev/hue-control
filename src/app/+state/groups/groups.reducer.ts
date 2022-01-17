import { createReducer, on } from '@ngrx/store';
import { GroupsState } from './groups.interfaces';
import * as groupsActions from './groups.actions';

export const initialState: GroupsState = {
  groups: [],
  behaviors: {
    loading: false,
    error: null,
  },
};

export const groupsReducer = createReducer(
  initialState,
  on(groupsActions.loadGroups, (state) => {
    return {
      ...state,
      behaviors: {
        loading: true,
        error: null,
      },
    };
  }),
  on(groupsActions.loadGroupsSuccess, (state, action) => {
    return {
      ...state,
      groups: action.payload,
      behaviors: {
        loading: false,
        error: null,
      },
    };
  }),
  on(groupsActions.loadGroupsError, (state, action) => {
    return {
      ...state,
      behaviors: {
        loading: false,
        error: action.error,
      },
    };
  }),
  on(groupsActions.updateGroupAction, (state) => {
    return {
      ...state,
      behaviors: {
        loading: true,
        error: null,
      }
    }
  }),
  on(groupsActions.updateGroupActionSuccess, (state, action) => {
    // TODO - what should be written to state when group is updated
    return {
        ...state
    }
  }),
  on(groupsActions.updateGroupActionFail, (state, action) => {
    return {
      ...state,
      behaviors: {
        loading: false,
        error: action.error

      }
    }
  }),
);
