import { Component, OnInit, Input } from '@angular/core';
import {Qoute} from '../qoute';
@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css']
})
export class CounterInputComponent implements OnInit {
  @Input()
  counterValue = 0;

  increment() {
    this.counterValue++;
  }

  decrement() {
    this.counterValue--;
  }


  constructor() { }

  ngOnInit() {
  }

}
