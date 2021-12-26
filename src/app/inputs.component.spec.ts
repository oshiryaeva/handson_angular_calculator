import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {InputsComponent} from "./inputs.component";
import {ColorresultDirective} from "./colorresult.directive";
import {RoundingPipe} from "./rounding.pipe";
import {By} from "@angular/platform-browser";

describe('InputsComponent', () => {

  let inpFixt: ComponentFixture<InputsComponent>;
  let inpComp: InputsComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent, InputsComponent, ColorresultDirective, RoundingPipe
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    inpFixt = TestBed.createComponent(InputsComponent);
    inpComp = inpFixt.componentInstance;
    inpFixt.detectChanges();
  });

  it('Test letters input in input 1', () => {
    const input1 = inpFixt.debugElement.query(By.css('#input1'));
    input1.nativeElement.value = 'test';

    input1.nativeElement.dispatchEvent(new Event('input'));
    inpFixt.detectChanges();

    expect(input1.nativeElement.value).toBe('');
  });

  it('Test 2 input in input 1', () => {
    const input1 = inpFixt.debugElement.query(By.css('#input1'));
    input1.nativeElement.value = '2';

    input1.nativeElement.dispatchEvent(new Event('input'));
    inpFixt.detectChanges();

    expect(input1.nativeElement.value).toBe('2');
  });

  it('Test letters input in input 2', () => {
    const input2 = inpFixt.debugElement.query(By.css('#input2'));
    input2.nativeElement.value = 'test';

    input2.nativeElement.dispatchEvent(new Event('input'));
    inpFixt.detectChanges();

    expect(input2.nativeElement.value).toBe('');
  });

  it('Test 2 input in input 2', () => {
    const input2 = inpFixt.debugElement.query(By.css('#input2'));
    input2.nativeElement.value = '2';

    input2.nativeElement.dispatchEvent(new Event('input'));
    inpFixt.detectChanges();

    expect(input2.nativeElement.value).toBe('2');
  });

  it('Test division by 0', () => {
    const input2 = inpFixt.debugElement.query(By.css('#input2'));
    input2.nativeElement.value = '0';
    const selector = inpFixt.debugElement.query(By.css('#operationSelector'));
    selector.nativeElement.value = "/";

    input2.nativeElement.dispatchEvent(new Event('input'));
    inpFixt.detectChanges();

    expect(input2.nativeElement.value).toBe('');
  });

  it('Test calcButton exists', () => {
    const calcButton = inpFixt.debugElement.query(By.css('#calcButton'));
    expect(calcButton).toBeTruthy();
  });

});
