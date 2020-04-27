import { Component,AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { User } from './service-component/user.model';

import { LogicService } from './logic.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Service Project';


  constructor() {

  }

  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  lat = 48.231511;
  lng = 13.824556;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
   center: this.coordinates,
   zoom: 15
  };

  marker = new google.maps.Marker({
    // position: this.coordinates,
    // map: this.map,
  });
   markers = [
    {
      position: new google.maps.LatLng(48.231511, 13.824556),
      map: this.map,
      title: "Putzen",
      label: "Putzen",
      // marker	:	"../images/map-marker-icon.png"
    },
    {
      position: new google.maps.LatLng(48.241511, 13.834556),
      map: this.map,
      title: "Heckenschneiden",
      label: "Heckenschneiden"
    }
  ];

  

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, 
    this.mapOptions);

    this.marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: this.marker.getTitle()
      });
      infoWindow.open(this.marker.getMap(), this.marker);
    });

    //Adding default marker to map
    this.marker.setMap(this.map);

    this.loadAllMarkers();
  
  }



  loadAllMarkers(): void {
    this.markers.forEach(markerInfo => {
      //Creating a new marker object
      const marker = new google.maps.Marker({
        ...markerInfo
      });

      //creating a new info window with markers info
      const infoWindow = new google.maps.InfoWindow({
        content: marker.getTitle()
      });

      //Add click event to open info window on marker
      marker.addListener("click", () => {
        infoWindow.open(marker.getMap(), marker);
      });

      //Adding marker to google map
      marker.setMap(this.map);

      
    });
  }

  



  
}
