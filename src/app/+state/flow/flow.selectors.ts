import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { FlowState, Step } from './flow.interfaces';

export const selectFlowSlice = (state: AppState) => state.flowslice!;


export const selectFlow = createSelector(
  selectFlowSlice,
  (state: FlowState): FlowState => state
);

export const selectAllSteps = createSelector(
  selectFlowSlice,
  (state: FlowState): Step[] => state.flow?.steps
);

export const selectSelectedFlow = createSelector(
  selectFlowSlice,
  (state: FlowState) => state.flow.activeStep
);
