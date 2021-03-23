import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule/schedule.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import {SharedMaterialModule} from '../shared-material/shared-material.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ViewAppointmentsComponent } from './view-appointments/view-appointments.component'
import { PatientVisitModule } from '../../app/patient-visit/patient-visit.module';
import { AppointmentActionComponent } from './appointment-action/appointment-action.component';


@NgModule({
  declarations: [ScheduleComponent, BookAppointmentComponent, ViewAppointmentsComponent, AppointmentActionComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PatientVisitModule    
  ]
})
export class SchedulingModule { }
