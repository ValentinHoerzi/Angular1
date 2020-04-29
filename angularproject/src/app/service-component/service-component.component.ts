import { Component, OnInit, Input } from '@angular/core';
import { LogicService } from '../logic.service';
import { ServiceRes } from './serviceRes.model';
import { MatDialog } from '@angular/material/dialog';
import { AddServiceDialogComponent } from '../add-service-dialog/add-service-dialog.component';
import { ServiceDto } from './serviceDto.model';

@Component({
    selector: 'app-service-component',
    templateUrl: './service-component.component.html',
    styleUrls: ['./service-component.component.css'],
})
export class ServiceComponentComponent implements OnInit {

    public services: ServiceRes[] = [];

    public constructor(private _service: LogicService, public dialog: MatDialog) { }

    public ngOnInit(): void {
        this._service.getServices().subscribe(services => {
            this.services = services;
        });
    }

    public editService(clickedService: ServiceRes) {
        const dialogRef = this.dialog.open(AddServiceDialogComponent, {
            width: '500px', 
                       data: { ...clickedService }
        });

        dialogRef.afterClosed().subscribe((service: ServiceDto) => {
            if (!service) return;

            console.log('editedService', service);
            this._service.updateService(clickedService.id.toString(), service).subscribe(serviceResult => {
                console.log('gotten into it');
                let replaceId = this.services.findIndex(s => s.id == serviceResult.id);
                this.services[replaceId] = serviceResult;
            });
            // this._service.addService(service).subscribe(serviceRes => this.services.push(serviceRes));
        });
    }

    public deleteService(service: ServiceRes) {
        console.log('method', service);
        this._service.deleteService(service.id.toString()).subscribe(deletedServiceName => {
            // dunnot why this is only a name
            console.log('deletedName', deletedServiceName);
            let index = this.services.findIndex(s => s === service);
            this.services.splice(index, 1);
            console.log('index', index);
        });
    }

    public createNewService() {
        let newService = new ServiceDto('', '', '', '', -1);

        const dialogRef = this.dialog.open(AddServiceDialogComponent, {
            width: '500px',
            data: newService
        });

        dialogRef.afterClosed().subscribe((service: ServiceDto) => {
            if (!service) return;

            this._service.addService(service).subscribe(serviceRes => this.services.push(serviceRes));
        });
    }

}
