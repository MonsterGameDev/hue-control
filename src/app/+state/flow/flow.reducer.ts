import { createReducer } from '@ngrx/store';
import { Flow } from './flow.interfaces';

const initialState: Flow = {
  projectName: '',
  steps: [],
  activeStep: '',
};

export const flowReducer = createReducer(initialState);
