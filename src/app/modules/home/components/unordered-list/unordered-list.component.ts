import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";

@Component({
  selector: "unordered-list",
  templateUrl: "./unordered-list.component.html",
  styleUrls: ["./unordered-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnorderedListComponent {
  @Input() items!: Array<{
    id: string;
    name: string;
  }>;
  @Input() selectedId!: string | null;
  @Output() updateSelectedId: EventEmitter<string> = new EventEmitter();
  @Output() updateSelectedPath: EventEmitter<string[]> = new EventEmitter();

  constructor() {}

  handleClick(itemId: string) {
    this.updateSelectedId.emit(itemId);
    this.updateSelectedPath.emit([itemId]);
  }
}
