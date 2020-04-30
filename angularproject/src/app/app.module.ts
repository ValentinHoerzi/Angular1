import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ServiceComponentComponent } from './service-component/service-component.component';
import { LogicService } from './logic.service';
import { LocationMapComponent } from './location-map/location-map.component';

import { MatDialogModule } from '@angular/material/dialog';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddServiceDialogComponent } from './add-service-dialog/add-service-dialog.component';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {MatSelectModule} from '@angular/material/select'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DisplayServiceComponent } from './display-service/display-service.component'; 
import {MatBadgeModule} from '@angular/material/badge';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DisplayEmployeeComponent } from './display-employee/display-employee.component';
import { SimpleServiceComponent } from './simple-service/simple-service.component'; 

@NgModule({
    declarations: [
        AppComponent,
        ServiceComponentComponent,
        LocationMapComponent,
        AddServiceDialogComponent,
        DisplayServiceComponent,
        DisplayEmployeeComponent,
        SimpleServiceComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        MatDialogModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule, MatInputModule,
        MatIconModule, ReactiveFormsModule, BrowserAnimationsModule,
        MatDatepickerModule, MatNativeDateModule,
        NgxMaterialTimepickerModule, MatSelectModule,
        MatMenuModule,
        MatSnackBarModule,
        MatBadgeModule,
        MatSidenavModule,
    ],
    providers: [
        LogicService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
