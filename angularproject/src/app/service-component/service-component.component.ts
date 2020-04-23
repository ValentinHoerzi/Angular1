import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.component.html',
  styleUrls: ['./service-component.component.css']
})
export class ServiceComponentComponent implements OnInit {

  dateMessage : string;

  constructor() {
    setInterval(() => {
      let currentDate = new Date();
      this.dateMessage = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
    }, 1000);}

  ngOnInit(): void {
  }

  addTwoNumbers(a : number,b : number){
    return a+b;
  }

}
