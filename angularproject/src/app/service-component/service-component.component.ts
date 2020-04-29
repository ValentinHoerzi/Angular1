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

    public openDialog(): void {
        let newService = new ServiceDto('', '', '', '', -1);

        const dialogRef = this.dialog.open(AddServiceDialogComponent, {
            width: '250px',
            data: newService
        });

        dialogRef.afterClosed().subscribe(result => {
            if (!result) return;

            console.log('results', result)
        });
    }


}
