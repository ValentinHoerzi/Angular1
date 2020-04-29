import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { ServiceComponentComponent } from './service-component/service-component.component';
import { LogicService } from './logic.service';
import { LocationMapComponent } from './location-map/location-map.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddServiceDialogComponent } from './add-service-dialog/add-service-dialog.component'; 

import {MatIconModule} from '@angular/material/icon'; 
import {MatInputModule} from '@angular/material/input'; 
@NgModule({
  declarations: [
    AppComponent,
    ServiceComponentComponent,
    LocationMapComponent,
    AddServiceDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatDialogModule, 
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule, MatInputModule,
    MatIconModule, ReactiveFormsModule,

  ],
  providers: [
    LogicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
