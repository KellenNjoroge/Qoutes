import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { QouteComponent } from './qoute/qoute.component';
import { QouteDetailsComponent } from './qoute-details/qoute-details.component';
import { QouteFormComponent } from './qoute-form/qoute-form.component';
import { QouteCounterComponent } from './qoute-counter/qoute-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    QouteComponent,
    QouteDetailsComponent,
    QouteFormComponent,
    QouteCounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
