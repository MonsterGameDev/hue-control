import { createSelector } from '@ngrx/store';

import { Scene, ScenesState } from './scenes.interfaces';

export const selectScenesSlice = (state: any) => state.scenesslice;

export const selectAllScenes = createSelector(
  selectScenesSlice,
  (state: ScenesState): Scene[] => state.scenes
);

export const selectSelectedSceneId = createSelector(
  selectScenesSlice,
  (state: ScenesState): string | undefined => state.selectedSceneId
)

export const selectSelectedScene = createSelector(
  selectScenesSlice,
  (state: ScenesState): Scene | undefined =>
    state.scenes.find((scene) => scene.id === state.selectedSceneId)
);
