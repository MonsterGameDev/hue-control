import { createReducer } from '@ngrx/store';
import { Lights } from './lights.interfaces';

export const initialState: Lights = {
  lights: [],
  behaviors: {
    loading: false,
    error: null,
  },
};

export const lightsReducer = createReducer(initialState);
