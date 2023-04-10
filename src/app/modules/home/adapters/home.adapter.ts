import { forwardRef, Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { select, Store } from "@ngrx/store";

import {
  StoreState,
  SampleStoreActions,
  SampleStoreSelectors,
} from "src/app/store";

import { HomeModule } from "../home.module";

@Injectable({
  providedIn: "any",
})
export class HomeAdapter {
  constructor(private store: Store<StoreState>) {}

  incrementCounterByN(n: number) {
    this.store.dispatch(
      SampleStoreActions.incrementCounterByN({ increment: n })
    );
  }

  counter$: Observable<number> = this.store.pipe(
    select(SampleStoreSelectors.selectCounter)
  );

  selectedId$: Observable<string> = this.store.pipe(
    select(SampleStoreSelectors.selectSelectedId)
  );

  selectedPath$: Observable<string[]> = this.store.pipe(
    select(SampleStoreSelectors.selectSelectedPath)
  );

  updateSelectedId(id: string) {
    this.store.dispatch(SampleStoreActions.updateSelectedId({ id }));
  }

  updateSelectedPath(path: string[]) {
    this.store.dispatch(SampleStoreActions.updateSelectedPath({ path }));
  }
}

export class HomeAdapterMock {
  counter$!: Observable<number>;

  incrementCounterByN(_n: number) {}
}
