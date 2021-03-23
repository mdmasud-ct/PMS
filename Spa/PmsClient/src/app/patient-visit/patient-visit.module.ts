import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientVisitNurseComponent } from './patient-visit-nurse/patient-visit-nurse.component';
import { PatientVisitDoctorComponent } from './patient-visit-doctor/patient-visit-doctor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [PatientVisitNurseComponent, PatientVisitDoctorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  exports:[PatientVisitNurseComponent,PatientVisitDoctorComponent]
})
export class PatientVisitModule { }
