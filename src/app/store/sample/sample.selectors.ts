import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SampleState } from "./sample.state";

export const selectFeature = createFeatureSelector<SampleState>("sample");

export const selectCounter = createSelector(
  selectFeature,
  (state: SampleState) => state.counter
);

export const selectSelectedId = createSelector(
  selectFeature,
  (state: SampleState) => state.selectedId
);

export const selectSelectedPath = createSelector(
  selectFeature,
  (state: SampleState) => state.selectedPath
);
