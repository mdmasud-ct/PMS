import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorSectionComponent } from './doctor-section/doctor-section.component';
import {SharedMaterialModule} from '../shared-material/shared-material.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PatientSectionComponent } from './patient-section/patient-section.component';
import { NurseSectionComponent } from './nurse-section/nurse-section.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule}from '@angular/common/http';
import {  ReactiveFormsModule,FormsModule} from '@angular/forms';
import { InboxComponent } from './inbox/inbox.component';
import {NgxSpinnerModule,NgxSpinnerService } from 'ngx-spinner';
@NgModule({
  declarations: [DoctorSectionComponent, ChangePasswordComponent, PatientSectionComponent, NurseSectionComponent, RegisterComponent, InboxComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    //NgxSpinnerService
  ]
})
export class AdminModule { }
