import { Component, OnInit } from '@angular/core';
import {Qoute} from '../qoute';
@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})
export class QouteComponent implements OnInit {

  qoutes = [
    new Qoute(1, 'You cannot follow somebody you know you should lead'),
    new Qoute(2, 'but who fights for you'),
    new Qoute(3, 'Love is never wasted for its value does not rest in its reprocity'),
    new Qoute(4, ' Art is to console those who are broken by life'),
   ];

  constructor() { }

  ngOnInit() {
  }

}
