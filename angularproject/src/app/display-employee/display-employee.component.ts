import { Component, OnInit, Input } from '@angular/core';
import { EmployeeRes } from '../service-component/employeeRes.model';
import { LogicService } from '../logic.service';
import { ServiceRes } from '../service-component/serviceRes.model';

@Component({
    selector: 'app-display-employee',
    templateUrl: './display-employee.component.html',
    styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

    @Input() employee: EmployeeRes;
    public services: ServiceRes[] = [];

    public constructor(private logicService: LogicService) { }

    public ngOnInit(): void {
        this.logicService.getServices().subscribe(services => {
            this.services = services.filter(s => s.employeeId == this.employee.id);
        });
    }

}
