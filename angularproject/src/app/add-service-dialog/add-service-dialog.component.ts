import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceDto } from '../service-component/serviceDto.model';
import { LogicService } from '../logic.service';
import { EmployeeRes } from '../service-component/employeeRes.model';
import { DatePipe } from '@angular/common';

import * as moment from 'moment';

@Component({
    selector: 'app-add-service-dialog',
    templateUrl: './add-service-dialog.component.html',
    styleUrls: ['./add-service-dialog.component.css'],
    providers: [DatePipe]
})
export class AddServiceDialogComponent implements OnInit {

    public customDate: Date;
    public customTime: string = '12:00';
    public employees: EmployeeRes[] = [];
    public title = 'Dienst anlegen';
    public actionString = 'Anlegen';

    constructor(
        public dialogRef: MatDialogRef<AddServiceDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public service: ServiceDto,
        private logicService: LogicService,
        public datepipe: DatePipe) { }

    public ngOnInit(): void {
        this.logicService.getEmployees().subscribe(employees => this.employees = employees);

        if (this.service) {
            if (this.service.employeeId != -1) {
                this.title = "Dienst bearbeiten";
                this.actionString = "Aktualisieren";
            }
            this.fillDateAndTime();
        }
        this.customDate = new Date();
    }

    private fillDateAndTime() {
        let dateTimeSplit = this.service.date.split(' ');
        this.customDate = moment(dateTimeSplit[0], 'DD.MM.YYYY').toDate();
        this.customTime = dateTimeSplit[1];
    }

    public closeDialogAndSave(): void {
        let dateString = this.extractDateString();
        this.service.date = dateString;
        if (this.service.employeeId == -1) {
            this.service.employeeId = this.employees[0].id;
        }
        this.dialogRef.close(this.service);
    }

    public onNoClick(): void {
        this.dialogRef.close();
    }

    private extractDateString(): string {
        if (! this.customTime) {
            this.customTime = "12:34";
        }
        let times = this.customTime.split(':'); // todo error handling
        let date1 = this.dateAdd(this.customDate, 'hour', Number(times[0]));
        let date2 = this.dateAdd(date1, 'minute', Number(times[1]));
        return this.datepipe.transform(date2, 'dd.MM.yyyy hh:mm')
    }

    /**
     * Adds time to a date. Modelled after MySQL DATE_ADD function.
     * Example: dateAdd(new Date(), 'minute', 30)  //returns 30 minutes from now.
     * https://stackoverflow.com/a/1214753/18511
     * 
     * @param date  Date to start with
     * @param interval  One of: year, quarter, month, week, day, hour, minute, second
     * @param units  Number of units of the given interval to add.
     */
    private dateAdd(date: Date, interval: string, units: number) {
        if (!(date instanceof Date))
            return undefined;
        var ret = new Date(date); //don't change original date
        var checkRollover = function () { if (ret.getDate() != date.getDate()) ret.setDate(0); };
        switch (String(interval).toLowerCase()) {
            case 'year': ret.setFullYear(ret.getFullYear() + units); checkRollover(); break;
            case 'quarter': ret.setMonth(ret.getMonth() + 3 * units); checkRollover(); break;
            case 'month': ret.setMonth(ret.getMonth() + units); checkRollover(); break;
            case 'week': ret.setDate(ret.getDate() + 7 * units); break;
            case 'day': ret.setDate(ret.getDate() + units); break;
            case 'hour': ret.setTime(ret.getTime() + units * 3600000); break;
            case 'minute': ret.setTime(ret.getTime() + units * 60000); break;
            case 'second': ret.setTime(ret.getTime() + units * 1000); break;
            default: ret = undefined; break;
        }
        return ret;
    }
}
