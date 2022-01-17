import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

import { Scene, ScenesState } from './scenes.interfaces';

export const selectSceneSlice = (state: any) => state.scenesslice;

export const selectAllScenes = createSelector(
  selectSceneSlice,
  (state: ScenesState): Scene[] => state.scenes
);
