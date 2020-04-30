import { Component, OnInit, Input } from '@angular/core';
import { ServiceRes } from '../service-component/serviceRes.model';

@Component({
    selector: 'app-simple-service',
    templateUrl: './simple-service.component.html',
    styleUrls: ['./simple-service.component.css']
})
export class SimpleServiceComponent implements OnInit {

    public markerIconColor: string = '#E74C3C'; // #0000FF services

    @Input()
    public service: ServiceRes;

    public constructor() { }

    public ngOnInit(): void {
    }

}
