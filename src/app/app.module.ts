import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './home/home.page';
import { PatientPage } from './patient/patient.page';
import { PatientPageModule } from './patient/patient.module'
import {PatientService } from './patient/service/patient.service'

import { HttpClientModule } from '@angular/common/http'
import { patientFilterPipe } from './patient/service/filter.pipe';
import { FormsModule } from '@angular/forms';
import { SignUpPage } from './sign-up/sign-up.page';
@NgModule({
  declarations: [
    AppComponent,
    // PatientPage,
    // HomePage
    // patientFilterPipe
  ],
  entryComponents: [
    // HomePage,
    // PatientPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,FormsModule],
  providers: [
    patientFilterPipe,
    StatusBar,
    SplashScreen,
    PatientService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
