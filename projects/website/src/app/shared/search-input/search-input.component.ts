import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-search-input",
  templateUrl: "./search-input.component.html",
  styleUrls: ["./search-input.component.css"],
})
export class SearchInputComponent implements OnInit {
  @Output() inputText = new EventEmitter<string>();
  @Input() placeholder?: string;
  text?: string;

  constructor() {}

  ngOnInit(): void {}

  onChangeInput(event: Event) {
    let text: string = (event.target as HTMLInputElement)?.value?.trim();
    this.text = text;
    this.inputText.emit(text);
  }

  onSubmit() {
    this.inputText.emit(this.text);
  }
}
