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
    lat = 37.75;
    lng = -122.41;


    public ngOnInit(): void {
        this.logicService.getEmployees().subscribe(employees => {
            this.addEmployeesToMap(employees);
        });

        this.map = new mapboxgl.Map({
            accessToken: environment.mapbox.accessToken,
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            zoom: 13,
            center: [this.lng, this.lat]
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
