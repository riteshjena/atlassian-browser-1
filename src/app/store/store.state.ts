import { SampleState } from "./sample";

/* This would be used for defining types wherever required,
instead of using individaul interfaces for each state, a combined
interface is being exported */
export interface StoreState {
  sample: SampleState.SampleState;
}
