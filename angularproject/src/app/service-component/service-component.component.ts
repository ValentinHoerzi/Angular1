import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';
import { LogicService } from '../logic.service';

@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.component.html',
  styleUrls: ['./service-component.component.css'],
})
export class ServiceComponentComponent implements OnInit {
  @Input('user') user: User;
  isCollapsed: boolean = true;

  constructor(private _service: LogicService) {}

  ngOnInit(): void {
    this.user = {
      name: this.user.name,
      designation: this.user.designation,
      address: this.user.address,
      phone: this.user.phone,
    };

    this._service.printToConsole('Service is ready')
    this._service.getsth();
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
