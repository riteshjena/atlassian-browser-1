import { Component, OnInit } from "@angular/core";

import { Observable, from } from "rxjs";

import { fetchData } from "src/app/services/api.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  data$!: Observable<any>;

  constructor() {}

  ngOnInit(): void {
    this.data$ = from(fetchData());
  }
}
