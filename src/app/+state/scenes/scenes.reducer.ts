import { createReducer } from "@ngrx/store";
import { Scenes } from "./scenes.interfaces";

const initialState: Scenes = {
  selectedSceneId: '',
  scenes: [],
  behaviors: {
    loading: false,
    error: null,
  }
};

export const scenesReducer = createReducer(initialState);
