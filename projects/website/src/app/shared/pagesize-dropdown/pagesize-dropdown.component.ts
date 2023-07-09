import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: ".app-pagesize-dropdown",
  templateUrl: "./pagesize-dropdown.component.html",
  styleUrls: ["./pagesize-dropdown.component.css"],
})
export class PagesizeDropdownComponent implements OnInit {
  @Output() selectedPageSize = new EventEmitter();
  @Input() pageSize!: number;
  constructor() {}

  ngOnInit(): void {}

  onChangePageSize(event: Event) {
    this.selectedPageSize.emit(event);
  }
}
