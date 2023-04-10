import { Injectable } from "@angular/core";

import { Actions } from "@ngrx/effects";

// import * as SampleActions from "./sample.actions";

@Injectable()
export class SampleStoreEffects {
  constructor(private actions$: Actions) {}
}
