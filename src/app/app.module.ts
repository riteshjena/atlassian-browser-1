import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { reducers } from "./store";
import { RootStoreModule } from "./store/store.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    /* allows access to all store modules from the app level;
    no need to inject stores at feature modules. Do this only if
    your features require access to multiple stores */
    RootStoreModule,
    AppRoutingModule,
    /* injects all reducers at the app level */
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
