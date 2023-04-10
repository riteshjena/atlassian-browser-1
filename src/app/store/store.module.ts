import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { SampleStoreModule } from "./sample";

@NgModule({
  imports: [
    CommonModule,
    SampleStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
})

/* This will be injected in the app module. That would allow us to access 
any store in any module without having the need to inject store modules into
individual feature modules */
export class RootStoreModule {}
