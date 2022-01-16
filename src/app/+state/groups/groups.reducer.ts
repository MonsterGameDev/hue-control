import { createReducer } from '@ngrx/store';
import { Groups } from './groups.interfaces';

export const initialState: Groups = {
  groups: [],
  behaviors: {
    loading: false,
    error: null,
  },
};

export const groupsReducer = createReducer(initialState);
