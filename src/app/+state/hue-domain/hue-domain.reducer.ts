import { createReducer, on } from '@ngrx/store';
import { Domain } from './hue-domain.interfaces';
import * as domainActions from './hue-domain.actions';

const initialState: Domain = {
  response: {},
  behaviors: {
    loading: false,
    error: null,
  },
};

export const domainReducer = createReducer(
  initialState,
  on(domainActions.loadFullHueConfigAction, (state: Domain) => {
    return {
      ...state,
      behaviors: {
        loading: true,
        error: null,
      },
    };
  }),
  on(domainActions.loadFullHueConfigSuccessAction, (state, action) => {
    return {
      ...state,
      response: action.payload,
      behaviors: {
        loading: false,
        error: null,
      },
    };
  }),
  on(domainActions.loadFullHueConfigErrorAction, (state, action) => {
    return {
      ...state,
      behaviors: {
        loading: false,
        error: action.error,
      },
    };
  })
);
