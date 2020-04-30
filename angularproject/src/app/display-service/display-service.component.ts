import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServiceRes } from '../service-component/serviceRes.model';
import { LogicService } from '../logic.service';
import { MatDialog } from '@angular/material/dialog';
import { AddServiceDialogComponent } from '../add-service-dialog/add-service-dialog.component';
import { ServiceDto } from '../service-component/serviceDto.model';
import { GeolocationService } from '../geolocation.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
    selector: 'app-display-service',
    templateUrl: './display-service.component.html',
    styleUrls: ['./display-service.component.css']
})
export class DisplayServiceComponent implements OnInit {

    @Input() service: ServiceRes;
    @Output() onDeleted = new EventEmitter<ServiceRes>();
    @Output() onEdited = new EventEmitter<ServiceRes>();

    public address: string;
    public employeeName: string;
    public markerIconColor: string = '#E74C3C'; // #0000FF services

    constructor(private _service: LogicService, public dialog: MatDialog,
        private geolocationService: GeolocationService) { }

    public ngOnInit(): void {
        this.geolocationService.getAddress(this.service.latitude, this.service.longitude).subscribe(geoData =>
            this.address = this.geolocationService.convertToAddress(geoData)
        );
        this._service.getEmployeeById(this.service.employeeId.toString()).subscribe(employee =>
            this.employeeName = employee.name
        );
    }

    public editService(clickedService: ServiceRes) {
        const dialogRef = this.dialog.open(AddServiceDialogComponent, {
            width: '350px',

            data: { ...clickedService },
            backdropClass: 'backdropBackground'

        });

        dialogRef.afterClosed().subscribe((service: ServiceDto) => {
            if (!service) return;

            this._service.updateService(clickedService.id.toString(), service).subscribe(serviceResult => {
                this.onEdited.emit(serviceResult);
            });
        });
    }

    public deleteService(service: ServiceRes) {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            width: '350px',
        });
        dialogRef.afterClosed().subscribe((deleted: string) => {
            if (deleted=='true') { 
                this._service.deleteService(service.id.toString()).subscribe(deletedServiceName => {
                this.onDeleted.emit(service);
            });}
        });
       
    }

}
