import { Injectable } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class RouterService {
  constructor(private router: Router) {}

  goToHomePage(extras: NavigationExtras = {}) {
    this.router.navigate(["home"], extras);
  }
}
