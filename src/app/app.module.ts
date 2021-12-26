import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {routing} from './app.route';
import {FormsModule} from "@angular/forms";
import {InputsComponent} from "./inputs.component";
import {ColorresultDirective} from './colorresult.directive';
import {RoundingPipe} from "./rounding.pipe";

@NgModule({
  declarations: [
    AppComponent, InputsComponent, ColorresultDirective, RoundingPipe
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
