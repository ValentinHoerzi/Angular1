import { Component, OnInit } from '@angular/core';
import { LogicService } from '../logic.service';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { EmployeeRes } from '../service-component/employeeRes.model';

@Component({
    selector: 'app-location-map',
    templateUrl: './location-map.component.html',
    styleUrls: ['./location-map.component.css']
})
export class LocationMapComponent implements OnInit {

    constructor(private logicService: LogicService) { }

    map: mapboxgl.Map;
    style = 'mapbox://styles/mapbox/streets-v11';
    lat = 37.75;
    lng = -122.41;


    public ngOnInit(): void {
        this.logicService.getEmployees().subscribe(employees => {
            employees.forEach(e => this.addEmployeeToMap(e))
        });

        this.map = new mapboxgl.Map({
            accessToken: environment.mapbox.accessToken,
            container: 'map',
            style: this.style,
            zoom: 13,
            center: [this.lng, this.lat]
        });    // Add map controls
        this.map.addControl(new mapboxgl.NavigationControl());
    }

    private addEmployeeToMap(x: EmployeeRes): void {
        let marker = new mapboxgl.Marker()
            .setLngLat([Number(x.longitude), Number(x.latitude)])
            .addTo(this.map);
    }

}
