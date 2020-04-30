import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EmployeeRes } from '../service-component/employeeRes.model';
import { LogicService } from '../logic.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeDto } from '../service-component/employeeDto.model';

@Component({
    selector: 'app-employee-wrapper',
    templateUrl: './employee-wrapper.component.html',
    styleUrls: ['./employee-wrapper.component.css']
})
export class EmployeeWrapperComponent implements OnInit {

    @Input() employees: EmployeeRes[];
    @Output() employeeChanged = new EventEmitter<EmployeeRes[]>();

    public constructor(private _service: LogicService, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

    public ngOnInit(): void {

    }

    public deleteEmployee(employee: EmployeeRes) {
        let index = this.employees.findIndex(s => s === employee);
        this.employees.splice(index, 1);        
        this.employeeChanged.emit([].concat(this.employees));
        this._snackBar.open("Dienst wurde gelöscht!","", {
            duration: 3000
        });
    }

    public editEmployee(employee: EmployeeRes) {
        let replaceId = this.employees.findIndex(s => s.id == employee.id);
        this.employees[replaceId] = employee;
        this.employeeChanged.emit([].concat(this.employees));
        this._snackBar.open("Dienst wurde bearbeitet!","", {
            duration: 3000
        });
    }

    public createNewEmployee() {

    }

    // public createNewService() {
    //     let newEmployee = new EmployeeDto('', '', '', '', -1);

    //     const dialogRef = this.dialog.open(AddServiceDialogComponent, {
    //         width: '350px',
    //         data: newEmployee,
    //         backdropClass: 'backdropBackground'
    //     });

    //     dialogRef.afterClosed().subscribe((employee: ServiceDto) => {
    //         if (!employee) return;
    //         this._service.addService(employee).subscribe(serviceRes => {
    //             this.employees.push(serviceRes);
    //             this.employeeChanged.emit([].concat(this.employees));
    //             this._snackBar.open("Dienst wurde angelegt!","", {
    //                 duration: 3000
    //             });
    //         });
    //     });
    // }

}
