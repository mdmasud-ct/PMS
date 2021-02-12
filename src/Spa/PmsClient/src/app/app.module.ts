import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMaterialModule } from './shared-material/shared-material.module';
import { LoginModule } from './login/login.module';
import appRoutes from './app.routes';
import { SharedWrapperModule } from './shared-wrapper/shared-wrapper.module';
import { AdminModule } from './admin/admin.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
// Import library module
//import {  } from "ngx-spinner";
@NgModule({
  declarations: [
    AppComponent,
    AuthCallbackComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    LoginModule,
    appRoutes,
    SharedWrapperModule,
    AdminModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HomeModule,
    CoreModule,
    FormsModule
    //AuthConfigModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
