import { Component, OnInit, Input } from '@angular/core';
import { LogicService } from '../logic.service';
import { ServiceRes } from './serviceRes.model';
import { MatDialog } from '@angular/material/dialog';
import { AddServiceDialogComponent } from '../add-service-dialog/add-service-dialog.component';
import { ServiceDto } from './serviceDto.model';
import { GeolocationService } from '../geolocation.service';

@Component({
    selector: 'app-service-component',
    templateUrl: './service-component.component.html',
    styleUrls: ['./service-component.component.css'],
})
export class ServiceComponentComponent implements OnInit {

    public services: ServiceRes[] = [];

    public query: string;
    public position: string;
    public locations: Array<any>;

    public constructor(private _service: LogicService, public dialog: MatDialog,
        private geolocationService: GeolocationService) {
        this.query = "Tracy, CA";
        this.position = "37.7397,-121.4252";
    }

    public ngOnInit(): void {
        this._service.getServices().subscribe(services => {
            this.services = services;
        });
    }

    public deleteService(service: ServiceRes) {
        let index = this.services.findIndex(s => s === service);
        this.services.splice(index, 1);
    }

    public editService(service: ServiceRes) {
        let replaceId = this.services.findIndex(s => s.id == service.id);
        this.services[replaceId] = service;
    }

    public createNewService() {
        let newService = new ServiceDto('', '', '', '', -1);

        const dialogRef = this.dialog.open(AddServiceDialogComponent, {
            width: '250px',
            data: newService
        });

        dialogRef.afterClosed().subscribe((service: ServiceDto) => {
            if (!service) return;

            this._service.addService(service).subscribe(serviceRes => this.services.push(serviceRes));
        });
    }

}
