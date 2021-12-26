import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {AppComponent, CalcData} from './app.component';
import {InputsComponent} from "./inputs.component";
import {ColorresultDirective} from "./colorresult.directive";
import {RoundingPipe} from "./rounding.pipe";

describe('AppComponent', () => {

  let appFixt: ComponentFixture<AppComponent>;
  let appComp: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent, InputsComponent, ColorresultDirective, RoundingPipe
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    appFixt = TestBed.createComponent(AppComponent);
    appComp = appFixt.componentInstance;
    appFixt.detectChanges();
  });

  it('Test 2 + 3 = 5', () => {
    const calcData: CalcData = {
      num1: 2,
      num2: 3,
      selectedValue: "+"
    };

    appComp.calc(calcData)

    expect(appComp.num3).toBe(5);
  });

  it('Test 5 - 3 = 2', () => {
    const calcData: CalcData = {
      num1: 5,
      num2: 3,
      selectedValue: "-"
    };

    appComp.calc(calcData)

    expect(appComp.num3).toBe(2);
  });

  it('Test 5 * 5 = 25', () => {
    const calcData: CalcData = {
      num1: 5,
      num2: 5,
      selectedValue: "*"
    };

    appComp.calc(calcData)

    expect(appComp.num3).toBe(25);
  });

  it('Test 12 / 6 = 2', () => {
    const calcData: CalcData = {
      num1: 12,
      num2: 6,
      selectedValue: "/"
    };

    appComp.calc(calcData)

    expect(appComp.num3).toBe(2);
  });

  it('Test result exists', () => {
    const input3 = appFixt.debugElement.query(By.css('#input3'));
    expect(input3).toBeTruthy();
  });
});
