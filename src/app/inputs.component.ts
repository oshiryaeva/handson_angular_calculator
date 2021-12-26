import {Component, EventEmitter, Output} from '@angular/core';
import {CalcData} from "./app.component";

@Component({
  selector: 'inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./app.component.css']
})

export class InputsComponent {
  @Output() calcDataEvent = new EventEmitter<CalcData>();

  inputNum1: number = 40;
  inputNum2: number = 2;

  operations = [
    "+",
    "-",
    "/",
    "*"
  ];
  inputSelectedValue = (this.operations)[0];

  emitCalcData() {
    this.inputNum2 = Number(this.inputNum2);
    const calcData: CalcData = {
      num1: this.inputNum1,
      num2: this.inputNum2,
      selectedValue: this.inputSelectedValue
    };

    this.calcDataEvent.emit(calcData);
  }
}
