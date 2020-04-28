import { Component, OnInit } from '@angular/core';
import { LogicService } from '../logic.service';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { EmployeeRes } from '../service-component/employeeRes.model';
import { ServiceRes } from '../service-component/serviceRes.model';

@Component({
    selector: 'app-location-map',
    templateUrl: './location-map.component.html',
    styleUrls: ['./location-map.component.css']
})
export class LocationMapComponent implements OnInit {

    constructor(private logicService: LogicService) { }

    map: mapboxgl.Map;

    public employees: EmployeeRes[] = [];
    public services: ServiceRes[] = [];

    public ngOnInit(): void {
        this.logicService.getEmployees().subscribe(employees => {
            this.employees = employees;
            this.addEmployeesToMap(this.employees);
        });

        this.logicService.getServices().subscribe(services => {
            this.services = services;
        });

        this.map = new mapboxgl.Map({
            accessToken: environment.mapbox.accessToken,
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v10',
            zoom: 13,
        });    // Add map controls
        this.map.addControl(new mapboxgl.NavigationControl());
    }


    private addEmployeesToMap(employees: EmployeeRes[]) {
        let bounds = new mapboxgl.LngLatBounds();
        let markers = employees.map(x => new mapboxgl.Marker()
            .setLngLat([Number(x.longitude), Number(x.latitude)]));
        markers.forEach(m => {
            m.addTo(this.map);
            bounds.extend(m.getLngLat());
        });
        this.map.fitBounds(bounds, { padding: 100 });
    }
}
