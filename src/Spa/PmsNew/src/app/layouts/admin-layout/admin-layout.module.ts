import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { CalendarComponent } from '../../calendar/calendar.component';
import { calendar } from 'googleapis/build/src/apis/calendar';
import { FullCalendarModule  } from '@fullcalendar/angular';
import { ToasterService } from '../../core/ToasterService';
import { SharedMaterialModule } from '../../shared-modules/shared-material.module';
import { MatTableModule } from '@angular/material/table';
import { DataTablesModule } from 'angular-datatables';
import { MatIcon} from '@angular/material/icon';
import { DoctorComponent } from '../../admin/doctor/doctor.component';
import { RegisterComponent } from '../../admin/register/register.component';
import { PatientComponent } from '../../admin/patient/patient.component';
import { NurseComponent } from  '../../admin/nurse/nurse.component';
import { fromPromise } from 'rxjs/internal-compatibility';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    FullCalendarModule,
    DataTablesModule,
    MatTableModule,
    SharedMaterialModule,
    //MatIcon
    //DataTablesModule
    //SharedMaterialModule,
    //ToasterService,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    CalendarComponent,
    DoctorComponent,
    RegisterComponent,
    PatientComponent,
    NurseComponent

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class AdminLayoutModule extends SharedMaterialModule{}
