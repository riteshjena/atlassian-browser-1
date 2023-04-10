import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { sampleReducer } from "./sample.reducer";
import { SampleStoreEffects } from "./sample.effects";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature("sample", sampleReducer),
    EffectsModule.forFeature([SampleStoreEffects]),
  ],
  providers: [],
})
export class SampleStoreModule {}
