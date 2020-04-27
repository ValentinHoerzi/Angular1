import { Component, OnInit, Input } from '@angular/core';
import { LogicService } from '../logic.service';

@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.component.html',
  styleUrls: ['./service-component.component.css'],
})
export class ServiceComponentComponent implements OnInit {

  constructor(private _service: LogicService) {}

  ngOnInit(): void {

  }
}
