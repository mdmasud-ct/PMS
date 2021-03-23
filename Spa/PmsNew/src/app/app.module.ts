import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { SharedMaterialModule } from './shared-modules/shared-material.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { AgmCoreModule } from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DoctorComponent } from './admin/doctor/doctor.component';
import { RegisterComponent } from './admin/register/register.component';
import { NgxSpinnerModule,NgxSpinnerService  } from 'ngx-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AccountModule } from './account/account.module';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ViewDataComponent } from './patient/view-data/view-data.component';
import { BookAppointmentComponent } from './scheduling/book-appointment/book-appointment.component';
import { ScheduleComponent } from './scheduling/schedule/schedule.component'; 
import {SelectAutocompleteModule} from 'mat-select-autocomplete';
import { PatientVisitDoctorComponent } from './patient-visit/patient-visit-doctor/patient-visit-doctor.component';
import { PatientVisitNurseComponent } from './patient-visit/patient-visit-nurse/patient-visit-nurse.component';
import { AppointmentActionComponent } from './scheduling/appointment-action/appointment-action.component';
import { ViewAppointmentsComponent } from './scheduling/view-appointments/view-appointments.component';
import { VisithistorydataComponent } from './patient/visithistorydata/visithistorydata.component';
import { ShowVisitHistoryComponent } from './patient/show-visit-history/show-visit-history.component';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    FullCalendarModule,
    NgxSpinnerModule,
    SharedMaterialModule,
    BrowserModule,
    CommonModule,
    AccountModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    NgbModule,
    ToastrModule.forRoot({
      positionClass :'toast-bottom-right'
    }),
    SelectAutocompleteModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthCallbackComponent,
    ChangepasswordComponent,
    ViewDataComponent,
    BookAppointmentComponent,
    ScheduleComponent,
    PatientVisitDoctorComponent,
    PatientVisitNurseComponent,
    AppointmentActionComponent,
    ViewAppointmentsComponent,
    VisithistorydataComponent,
    ShowVisitHistoryComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
