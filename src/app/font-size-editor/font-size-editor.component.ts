import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-size-editor',
  templateUrl: './font-size-editor.component.html',
  styleUrls: ['./font-size-editor.component.scss']
})
export class FontSizeEditorComponent implements OnInit {
  constructor() { }
  fontSize = 14;
  onChange(value) {
    this.fontSize = value;
  }
  ngOnInit() {
  }

}
