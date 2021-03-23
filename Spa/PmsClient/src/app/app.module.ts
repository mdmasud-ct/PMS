import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,ActivatedRoute } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import appRoutes from './app.routes';

/* Modules */
import { SharedMaterialModule } from './shared-material/shared-material.module';
import { LoginModule } from './login/login.module';
import { SharedWrapperModule } from './shared-wrapper/shared-wrapper.module';
import { AdminModule } from './admin/admin.module';
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { AccountModule } from './account/account.module';
/* Modules ends*/ 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { SchedulingModule } from './scheduling/scheduling.module';
import { PatientModule } from './patient/patient.module';
import { HeaderComponent } from './header/header.component';
import { ReloginComponent } from './relogin/relogin.component';
import { PatientVisitModule } from './patient-visit/patient-visit.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxSpinnerModule } from 'ngx-spinner';

// Import library module
//import {  } from "ngx-spinner";
@NgModule({
  declarations: [
    AppComponent,
    AuthCallbackComponent,
    HeaderComponent,
    ReloginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    appRoutes,
    LoginModule,
    SharedWrapperModule,
    HomeModule,
    CoreModule,
    AdminModule,
    AccountModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    SchedulingModule,
    PatientModule,
    PatientVisitModule,
    MatPaginatorModule,
    NgxSpinnerModule
    //AuthConfigModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
