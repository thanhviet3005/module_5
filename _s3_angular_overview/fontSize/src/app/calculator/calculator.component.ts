import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  numberOne: number;
  numberTwo: number;
  operator = '+'
  numberAns: number;
  onFirstChange(value){
    this.numberOne = Number(value);
  }
  onSecondChange(value){
    this.numberTwo = Number(value);
  }
  onOperatorChoose(value){
    this.operator = value;
  }
  calculate(){
    switch (this.operator) {
      case '+':
        this.numberAns = this.numberOne + this.numberTwo;
        break;
      case '-':
        this.numberAns = this.numberOne - this.numberTwo;
        break;
      case '*':
        this.numberAns = this.numberOne * this.numberTwo;
        break;
      case '/':
        if (this.numberTwo === 0){
          this.numberAns.toFixed(1);
        }else {
          this.numberAns = this.numberOne / this.numberTwo;
        }
        break;
    }
  }


}
