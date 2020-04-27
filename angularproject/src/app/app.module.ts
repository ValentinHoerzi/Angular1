import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { ServiceComponentComponent } from './service-component/service-component.component';
import { LogicService } from './logic.service';

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LogicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
