import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.component.html',
  styleUrls: ['./service-component.component.css']
})
export class ServiceComponentComponent implements OnInit {

  user: any;

  constructor() {
    this.user = {
      name : 'Foo Bar',
      title : 'Software Developer',
      address : '1234 Main St. City, State, 100010',
      phone: [

      ]
    };
  }

  ngOnInit(): void {

  }
}
