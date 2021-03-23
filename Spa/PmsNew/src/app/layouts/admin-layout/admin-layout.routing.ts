import { Routes,CanActivate } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { CalendarComponent } from '../../calendar/calendar.component';
import { DoctorComponent } from '../../admin/doctor/doctor.component';
import { NurseComponent } from '../../admin/nurse/nurse.component';
import { PatientComponent } from '../../admin/patient/patient.component';
import { LoginComponent } from '../../account/login/login.component';
import { PatientRegisterComponent } from '../../account/patient-register/patient-register.component';
import { ChangepasswordComponent } from 'app/changepassword/changepassword.component';
import { AuthGuard } from 'app/core/auth.guard';
import {ViewDataComponent} from '../../patient/view-data/view-data.component';
import { BookAppointmentComponent } from '../../scheduling/book-appointment/book-appointment.component';
import { ScheduleComponent } from '../../scheduling/schedule/schedule.component';
import { ViewAppointmentsComponent } from '../../scheduling/view-appointments/view-appointments.component';
import { VisithistorydataComponent } from '../../patient/visithistorydata/visithistorydata.component';
import { ShowVisitHistoryComponent } from '../../patient/show-visit-history/show-visit-history.component';
export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]},
    {
    path: '',
    children: [ {
      path: 'user-profile',
      component: UserProfileComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'doctor',
      component: DoctorComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'calendar',
      component: CalendarComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'patient',
      component: PatientComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'changepassword',
      component: ChangepasswordComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'nurse',
      component: NurseComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'viewdata',
      component: ViewDataComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'schedule',
      component: ScheduleComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'bookappointment',
      component: BookAppointmentComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'bookappointment',
      component: BookAppointmentComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'notifications',
      component: NotificationsComponent,
      canActivate:[AuthGuard]
    }
  ]
    },
     //{
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComnpm install --save jwt-decodeponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',        component: DashboardComponent },
    //{ path: 'user-profile',   component: UserProfileComponent },
    //{ path: 'table-list',     component: TableListComponent },
    { path: 'typography',       component: TypographyComponent },
    { path: 'icons',            component: IconsComponent },
    { path: 'maps',             component: MapsComponent },
    { path: 'viewdata',         component: ViewDataComponent },
    { path: 'schedule',         component: ScheduleComponent },
    { path: 'bookappointment',  component: BookAppointmentComponent },
    { path: 'viewappointment',  component: ViewAppointmentsComponent },
    { path: 'visithistorydata', component: VisithistorydataComponent },
    { path: 'showvisithistory', component: ShowVisitHistoryComponent },
    //{ path: 'notifications',  component: NotificationsComponent },
    //{ path: 'calendar',       component: CalendarComponent },
    //{ path: 'doctor',         component: DoctorComponent },
    //{ path: 'nurse',          component: NurseComponent },
    //{ path: 'patient',        component: PatientComponent },
    //{ path: 'changepassword', component: ChangepasswordComponent },
    //{ path: 'viewdata', component: ViewDataComponent },
    //{ path: 'schedule', component: ScheduleComponent },
    //{ path: 'bookappointment', component: BookAppointmentComponent }
    { path: 'patientregister',  component: PatientRegisterComponent }
];
