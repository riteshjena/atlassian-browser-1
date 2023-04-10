import { ActionReducerMap } from "@ngrx/store";

import { StoreState } from "./store.state";

import { sampleReducer } from "./sample/sample.reducer";

export const reducers: ActionReducerMap<StoreState> = {
  sample: sampleReducer,
};
