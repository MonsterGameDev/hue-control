import { createReducer, on } from '@ngrx/store';
import { FlowState } from './flow.interfaces';
import * as flowActions from './flow.actions';

const initialState: FlowState = {
  flow: {
    projectName: 'Not Set',
    steps: [],
    activeStep: undefined,
  },
  behaviors: {
    loading: false,
    error: null,
  },
};

export const flowReducer = createReducer(
  initialState,
  on(flowActions.loadFlowAction, (state) => {
    return {
      ...state,
      behaviors: {
        loading: true,
        error: null,
      },
    };
  }),
  on(flowActions.loadFlowSuccessAction, (state, action) => {
    return {
      ...state,
      flow: action.payload,
      behaviors: {
        ...state.behaviors,
        loading: false,
      },
    };
  }),
  on(flowActions.loadFlowErrorAction, (state, action) => {
    return {
      ...state,
      behaviors: {
        loading: false,
        error: action.error,
      },
    };
  }),
  on(flowActions.createNewFlowAction, (state, action) => {
    return {
      ...state,
      flow: action.payload,
    };
  }),
  on(flowActions.addStepAction, (state, action) => {
    return {
      ...state,
      flow: {
        ...state.flow,
        steps: [...state.flow.steps, action.payload],
      },
    };
  })
  // on(flowActions.deleteStepAction, (state, action) => {
  //   return {
  //     ...state,
  //     flow: {
  //       ...state.flow,
  //       steps: state.flow.steps.filter(
  //         (step) => step.scene.id !== action.payload
  //       ),
  //     },
  //   };
  // })
);
