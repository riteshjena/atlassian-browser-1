import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";

@Component({
  selector: "toggle-list",
  templateUrl: "./toggle-list.component.html",
  styleUrls: ["./toggle-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleListComponent {
  @Input() selectedId!: string | null;
  @Input() set selectedPath(path: Array<string> | null) {
    this._selectedPath = path || [];
    this.setToggleState();
  }
  get selectedPath(): string[] {
    return this._selectedPath;
  }

  @Input() data!: {
    id: string;
    name: string;
    children: Array<any>;
  };

  isOpen = false;

  private _selectedPath: string[] = [];

  @Output() updateSelectedId: EventEmitter<string> = new EventEmitter();
  @Output() updateSelectedPath: EventEmitter<string[]> = new EventEmitter();

  setToggleState() {
    if (this._selectedPath && this.data && this.data.hasOwnProperty("id")) {
      this.isOpen = this._selectedPath.includes(this.data.id);
    }
  }

  toggleState() {
    this.isOpen = !this.isOpen;
  }

  _updateSelectedId(id: string) {
    this.updateSelectedId.emit(id);
  }

  _updateSelectedPath(path: string[]) {
    let updatedPath = path;

    if (path && path[path.length - 1] !== this.data.id) {
      updatedPath = [this.data.id, ...path];
    }

    this.updateSelectedPath.emit(updatedPath);
  }

  constructor() {}
}
