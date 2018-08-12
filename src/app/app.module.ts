import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { QouteComponent } from './qoute/qoute.component';
import { QouteDetailsComponent } from './qoute-details/qoute-details.component';
import { QouteFormComponent } from './qoute-form/qoute-form.component';
import { CounterInputComponent } from './counter-input/counter-input.component';
import { BackgroundImageDirective } from './background-image.directive';

@NgModule({
  declarations: [
    AppComponent,
    QouteComponent,
    QouteDetailsComponent,
    QouteFormComponent,
    CounterInputComponent,
    BackgroundImageDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
