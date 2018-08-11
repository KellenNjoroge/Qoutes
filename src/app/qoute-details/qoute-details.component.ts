import { Component, OnInit, Input } from '@angular/core';
import {Qoute} from '../qoute';
@Component({
  selector: 'app-qoute-details',
  templateUrl: './qoute-details.component.html',
  styleUrls: ['./qoute-details.component.css']
})
export class QouteDetailsComponent implements OnInit {
  @Input() qoute: Qoute;
  constructor() { }

  ngOnInit() {
  }

}
