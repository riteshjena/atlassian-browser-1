import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";

import { HomeComponent } from "./home.component";
import { ListComponent } from "./components/list/list.component";
import { ToggleListComponent } from "./components/toggle-list/toggle-list.component";
import { UnorderedListComponent } from "./components/unordered-list/unordered-list.component";

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [
    HomeComponent,
    ListComponent,
    ToggleListComponent,
    UnorderedListComponent,
  ],
})
export class HomeModule {}
