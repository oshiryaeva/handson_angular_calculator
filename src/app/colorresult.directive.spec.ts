import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ColorresultDirective} from "./colorresult.directive";
import {By} from "@angular/platform-browser";
import {Component} from "@angular/core";

@Component({
  template: `
    <input [input]="-1" [colorresult] id="input3" type="number"/>`
})
class DirectiveTestComponentRed {
}

describe('ColorresultDirective', () => {

  let fixt: ComponentFixture<DirectiveTestComponentRed>;

  beforeEach(() => {
    fixt = TestBed.configureTestingModule({
      declarations: [ColorresultDirective, DirectiveTestComponentRed]
    })
      .createComponent(DirectiveTestComponentRed);

    fixt.detectChanges();
  });

  it('Red background when result is -1', () => {
    let des = fixt.debugElement.queryAll(By.directive(ColorresultDirective));
    const input = des[0].nativeElement as HTMLInputElement;
    expect(input.style.backgroundColor).toBe('red');
  });
});

@Component({
  template: `
    <input [input]="0" [colorresult] id="input3" type="number"/>`
})
class DirectiveTestComponentBlack {
}

describe('ColorresultDirective', () => {

  let fixt: ComponentFixture<DirectiveTestComponentBlack>;

  beforeEach(() => {
    fixt = TestBed.configureTestingModule({
      declarations: [ColorresultDirective, DirectiveTestComponentBlack]
    })
      .createComponent(DirectiveTestComponentBlack);

    fixt.detectChanges();
  });

  it('Black background when result is 0', () => {
    let des = fixt.debugElement.queryAll(By.directive(ColorresultDirective));
    const input = des[0].nativeElement as HTMLInputElement;
    expect(input.style.backgroundColor).toBe('black');
  });
});

@Component({
  template: `
    <input [input]="1" [colorresult] id="input3" type="number"/>`
})
class DirectiveTestComponentGreen {
}

describe('ColorresultDirective', () => {

  let fixt: ComponentFixture<DirectiveTestComponentGreen>;

  beforeEach(() => {
    fixt = TestBed.configureTestingModule({
      declarations: [ColorresultDirective, DirectiveTestComponentGreen]
    })
      .createComponent(DirectiveTestComponentGreen);

    fixt.detectChanges();
  });

  it('Green background when result is 1', () => {
    let des = fixt.debugElement.queryAll(By.directive(ColorresultDirective));
    const input = des[0].nativeElement as HTMLInputElement;
    expect(input.style.backgroundColor).toBe('green');
  });
});
