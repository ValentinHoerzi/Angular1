import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class GeolocationService {

    private readonly latLngUrl = 'https://geocoder.ls.hereapi.com/search/6.2/geocode.json';
    private readonly addressUrl = 'https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json';
    private readonly apiKey = '7In0EgoVpI0XYKY_AxyBeSQK0it20Mrica6zmJGTWfA';

    public constructor(private http: HttpClient) { 
    }

    public getLatLng(searchtext: string): Observable<any> {
        let params = new HttpParams().set('apiKey', this.apiKey).set('searchtext', searchtext);
        return this.http.get(this.latLngUrl, { params: params});
    }

    public getAddress(lat: string, long: string) {
        let params = new HttpParams().set('apiKey', this.apiKey).set('mode', 'retrieveAddresses').set('prox', `${lat},${long}`);
        return this.http.get(this.addressUrl, { params: params});
    }

    public convertToAddress(geoData): string {
        if (!geoData) return;
        return geoData.Response.View[0].Result[0].Location.Address.Label;
    }

    public convertToLatLng(geoData) {
        if (!geoData) return;
        return geoData.Response.View[0].Result[0].Location.DisplayPosition;
    }
}
