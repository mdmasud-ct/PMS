import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { AccountRoutingModule } from './account-routes.module';
import { ToasterService } from '../core/ToasterService';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { HomeModule } from '../home/home.module';
import { HeaderComponent } from '../home/header/header.component'; 
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import { SharedWrapperModule } from '../shared-wrapper/shared-wrapper.module';
import { ToasterPosition } from '../core/ToasterPosition';
import { FormGroup,ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  declarations: [RegisterComponent, PatientRegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added  
    HomeModule,
    SharedMaterialModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  //exports:[HomeModule ],
  providers:[ ToasterService ]
})
export class AccountModule { }
