import { createAction, props } from "@ngrx/store";

export const ACTION_TYPES = {
  UPDATE_SELECTED_ID: "[UPDATE SELECTED ID] Update the selected id",
  UPDATE_SELECTED_PATH: "[UPDATE SELECTED PATH] Update the selected path",
  INCREMENT_COUNTER: "[INCREMENT COUNTER] Increment counter by a value of n",
};

export const incrementCounterByN = createAction(
  ACTION_TYPES.INCREMENT_COUNTER,
  props<{ increment: number }>()
);

export const updateSelectedId = createAction(
  ACTION_TYPES.UPDATE_SELECTED_ID,
  props<{ id: string }>()
);

export const updateSelectedPath = createAction(
  ACTION_TYPES.UPDATE_SELECTED_PATH,
  props<{ path: string[] }>()
);
