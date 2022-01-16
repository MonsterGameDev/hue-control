import { createReducer, on } from '@ngrx/store';
import { Groups } from './groups.interfaces';
import * as groupsActions from './groups.actions';

export const initialState: Groups = {
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
        error: null
      }
    }
  }),
  on(groupsActions.loadGroupsSuccess, (state, action) => {
    return {
      ...state,
      groups: action.payload,
      behaviors: {
        loading: false,
        error: null
      }
    }
  }),
  on(groupsActions.loadGroupsError, (state, action) => {
    return {
      ...state,
      behaviors: {
        loading: false,
        error: action.error
      }
    }
  }),
  );
