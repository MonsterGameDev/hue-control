import { createReducer, on } from '@ngrx/store';
import { LightsState } from './lights.interfaces';
import * as lightActions from './lights.actions';

export const initialState: LightsState = {
  lights: [],
  behaviors: {
    loading: false,
    error: null,
  },
};

export const lightsReducer = createReducer(
  initialState,
  on(lightActions.loadLights, (state) => {
    return {
      ...state,
    };
  }),
  on(lightActions.loadLightsSuccess, (state, action) => {
    return {
      ...state,
      lights: action.payload,
    };
  }),
  on(lightActions.loadLightsError, (state, action) => {
    return {
      ...state,
    };
  })
);
