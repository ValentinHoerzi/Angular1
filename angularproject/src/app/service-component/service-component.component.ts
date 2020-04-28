import { Component, OnInit, Input } from '@angular/core';
import { LogicService } from '../logic.service';
import { ServiceRes } from './serviceRes.model';

@Component({
    selector: 'app-service-component',
    templateUrl: './service-component.component.html',
    styleUrls: ['./service-component.component.css'],
})
export class ServiceComponentComponent implements OnInit {

    public services: ServiceRes[] = [];

    public constructor(private _service: LogicService) { }

    public ngOnInit(): void {
        this._service.getServices().subscribe(services => {
            this.services = services;
        });
    }
}
