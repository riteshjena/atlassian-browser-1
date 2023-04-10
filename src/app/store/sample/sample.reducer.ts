import { createReducer, on } from "@ngrx/store";

import { SampleState, initialState } from "./sample.state";

import * as SampleActions from "./sample.actions";

export const sampleReducer = createReducer(
  initialState,
  on(
    SampleActions.incrementCounterByN,
    (state, { increment }): SampleState => ({
      ...state,
      counter: state.counter + increment,
    })
  ),
  on(SampleActions.updateSelectedId, (state, { id }) => ({
    ...state,
    selectedId: id,
  })),
  on(SampleActions.updateSelectedPath, (state, { path }) => ({
    ...state,
    selectedPath: path,
  }))
);
