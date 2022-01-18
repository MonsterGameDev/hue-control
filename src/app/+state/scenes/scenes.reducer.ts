import { createReducer, on } from '@ngrx/store';
import { ScenesState } from './scenes.interfaces';
import * as sceneActions from './scenes.actions';

const initialState: ScenesState = {
  scenes: [],
  behaviors: {
    loading: false,
    error: null,
  },
  selectedSceneId: undefined,
};

export const scenesReducer = createReducer(
  initialState,
  on(sceneActions.loadScenes, (state) => {
    return {
      ...state,
      behaviors: {
        loading: true,
        error: null,
      },
    };
  }),
  on(sceneActions.loadScenesSuccess, (state, action) => {
    return {
      ...state,
      scenes: action.payload,
      behaviors: {
        loading: false,
        error: null,
      },
    };
  }),
  on(sceneActions.loadScenesError, (state, action) => {
    return {
      ...state,
      behaviors: {
        loading: false,
        error: action.error,
      },
    };
  }),
  on(sceneActions.setSelectedScene, (state, action) => {
    return {
      ...state,
      selectedSceneId: action.payload.id,
    };
  }),
  on(sceneActions.clearSelectedScene, (state) => {
    return {
      ...state,
      selectedSceneId: undefined,
    };
  })
);
