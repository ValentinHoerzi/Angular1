import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
// import { User } from './service-component/user.model';

import { LogicService } from './logic.service';
import { MatSidenav, MatDrawer } from '@angular/material/sidenav';
import { EmployeeRes } from './service-component/employeeRes.model';
import { ServiceRes } from './service-component/serviceRes.model';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'Service Project';

    @ViewChild('drawer', {static: false}) 
    public drawer: MatDrawer;

    public showService = true;
    public employees: EmployeeRes[] = [];
    public services: ServiceRes[] = [];


    constructor(private logicService: LogicService) {
        this.logicService.getServices().subscribe(services => {
            this.services = services;
        });
        this.logicService.getEmployees().subscribe(employees => {
            this.employees = employees;
        });
    }

    public minimizeDrawer() {
        this.drawer.close();
    }

    public showServices() {
        this.showService = true;
        this.drawer.toggle();
    }

    public showEmployees() {
        this.showService = false;
        this.drawer.toggle();
    }



}
