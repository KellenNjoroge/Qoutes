import { Component } from '@angular/core';
import {Qoute} from './qoute';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Qoutes';
  qoutes = [
    new Qoute(1, 'You cannot follow somebody you know you should lead'),
    new Qoute(2, 'but who fights for you'),
    new Qoute(3, 'Love is never wasted for its value does not rest in its reprocity'),
    new Qoute(4, ' Art is to console those who are broken by life'),
   ];
}
