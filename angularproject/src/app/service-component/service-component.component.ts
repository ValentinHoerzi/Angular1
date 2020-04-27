import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.component.html',
  styleUrls: ['./service-component.component.css'],
})
export class ServiceComponentComponent implements OnInit {
  @Input('user') user: User;
  isCollapsed: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.user = {
      name: this.user.name,
      designation: this.user.designation,
      address: this.user.address,
      phone: this.user.phone,
    };
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
