import { Component, OnInit } from '@angular/core';
import {Qoute} from '../qoute';
@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})
export class QouteComponent implements OnInit {

  qoutes = [
    new Qoute(1, 'You cannot follow somebody you know you should lead', 'by Chico'),
    new Qoute(2, 'but who fights for you', 'r.h.Sin') ,
    new Qoute(3, 'Love is never wasted for its value does not rest in its reprocity', 'C.S.Lewis'),
    new Qoute(4, ' Art is to console those who are broken by life', 'Van Gogh'),
   ];
   toogleDetails(index) {
   this.qoutes[index].showDescription = !this.qoutes[index].showDescription;
   }
   completeQoute(isComplete, index) {
     if (isComplete) {
       this.qoutes.splice(index, 1);
     }
   }
   /*
  qouteComplete(complete: boolean) {
    this.isComplete.emit(complete);
    }
  deleteQoute(isComplete, index) {
    if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete ${this.qoutes[index].name}`);
        if (toDelete) {
            this.qoutes.splice(index, 1);
          }
        }
      }
      */

  constructor() { }

  ngOnInit() {}

}
