import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
// import { User } from './service-component/user.model';

import { LogicService } from './logic.service';
import { MatSidenav, MatDrawer } from '@angular/material/sidenav';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'Service Project';

    @ViewChild('drawer', {static: false}) 
    public drawer: MatDrawer;

    showService = true;

    constructor() {

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
