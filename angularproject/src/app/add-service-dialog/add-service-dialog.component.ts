import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceDto } from '../service-component/serviceDto.model';

@Component({
    selector: 'app-add-service-dialog',
    templateUrl: './add-service-dialog.component.html',
    styleUrls: ['./add-service-dialog.component.css']
})
export class AddServiceDialogComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<AddServiceDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: ServiceDto) { }

    public ngOnInit(): void {
        console.log('gotten', this.data);
    }

    public onNoClick(): void {
        this.dialogRef.close(this.data);
    }

}
