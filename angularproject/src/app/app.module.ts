import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { ServiceComponentComponent } from './service-component/service-component.component';
import { LogicService } from './logic.service';
import { LocationMapComponent } from './location-map/location-map.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { AddServiceDialogComponent } from './add-service-dialog/add-service-dialog.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponentComponent,
    LocationMapComponent,
    AddServiceDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatDialogModule, 
    MatCardModule,
  ],
  providers: [
    LogicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
