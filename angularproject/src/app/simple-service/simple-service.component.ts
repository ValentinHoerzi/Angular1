import { Component, OnInit, Input } from '@angular/core';
import { ServiceRes } from '../service-component/serviceRes.model';
import { GeolocationService } from '../geolocation.service';

@Component({
    selector: 'app-simple-service',
    templateUrl: './simple-service.component.html',
    styleUrls: ['./simple-service.component.css']
})
export class SimpleServiceComponent implements OnInit {

    public markerIconColor: string = '#E74C3C'; // #0000FF services
    public address = 'Keine Addresse gefunden';

    @Input()
    public service: ServiceRes;

    public constructor(private geolocationService: GeolocationService) { }

    public ngOnInit(): void {
        this.geolocationService.getAddress(this.service.latitude, this.service.longitude).subscribe(geoData =>
            this.address = this.geolocationService.convertToAddress(geoData)
        );
    }

}
