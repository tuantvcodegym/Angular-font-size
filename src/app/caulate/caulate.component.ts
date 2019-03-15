import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caulate',
  templateUrl: './caulate.component.html',
  styleUrls: ['./caulate.component.scss']
})
export class CaulateComponent implements OnInit {
  constructor() { }
  output: number;
  first: number;
  second: number;
  operator = '+';

  onFirstChange(value) {
    this.first = value;
  }

  onSecondChange(value) {
    this.second = value;
  }

  onSelectChange(value) {
    this.operator = value;
  }

  calculate() {
    switch (this.operator) {
      case '+':
        this.output = parseInt(this.first) + parseInt(this.second);
        break;
      case '-':
        this.output = parseInt(this.first - this.second);
        break;
      case '*':
        this.output = parseInt(this.first * this.second);
        break;
      case '/':
        this.output = parseInt(this.first / this.second);
        break;
    }
  }
  ngOnInit() {
  }

}
