import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";

import { HomeAdapter } from "../../adapters/home.adapter";
import { Observable } from "rxjs";

@Component({
  selector: "list-wrapper",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  @Input() data!: any;
  @Input() selectedId$!: Observable<string>;
  @Input() selectedPath$!: Observable<string[]>;

  constructor(private homeAdapter: HomeAdapter) {}

  ngOnInit(): void {
    this.selectedId$ = this.homeAdapter.selectedId$;
    this.selectedPath$ = this.homeAdapter.selectedPath$;
  }

  updateSelectedId(id: string) {
    this.homeAdapter.updateSelectedId(id);
  }

  updateSelectedPath(path: string[]) {
    this.homeAdapter.updateSelectedPath(path);
  }
}
