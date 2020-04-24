import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.component.html',
  styleUrls: ['./service-component.component.css'],
})
export class ServiceComponentComponent implements OnInit {
  user: any;
  @Input('name') userName: string;

  constructor() {

  }

  ngOnInit(): void {
    this.user = {
      name: this.userName,
      title: 'Software Developer',
      address: '1234 Main St. City, State, 100010',
      phone: [],
    };
  }
}
