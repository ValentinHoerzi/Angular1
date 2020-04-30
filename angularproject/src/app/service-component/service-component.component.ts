import { Component, OnInit, Input } from '@angular/core';
import { LogicService } from '../logic.service';
import { ServiceRes } from './serviceRes.model';
import { MatDialog } from '@angular/material/dialog';
import { AddServiceDialogComponent } from '../add-service-dialog/add-service-dialog.component';
import { ServiceDto } from './serviceDto.model';
import {MatSnackBar} from '@angular/material/snack-bar'; 

@Component({
    selector: 'app-service-component',
    templateUrl: './service-component.component.html',
    styleUrls: ['./service-component.component.css'],
})
export class ServiceComponentComponent implements OnInit {

    public services: ServiceRes[] = [];

    public constructor(private _service: LogicService, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

    public ngOnInit(): void {
        this._service.getServices().subscribe(services => {
            this.services = services;
        });
    }

    public deleteService(service: ServiceRes) {
        let index = this.services.findIndex(s => s === service);
        this.services.splice(index, 1);        
        this._snackBar.open("Dienst wurde gelöscht!","", {
            duration: 3000
        });
    }

    public editService(service: ServiceRes) {
        let replaceId = this.services.findIndex(s => s.id == service.id);
        this.services[replaceId] = service;
        this._snackBar.open("Dienst wurde bearbeitet!","", {
            duration: 3000
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
            this._snackBar.open("Dienst wurde angelegt!","", {
                duration: 3000
            });
        });
    }
}
