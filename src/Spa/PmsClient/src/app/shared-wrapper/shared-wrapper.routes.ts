import { RouterModule } from '@angular/router';
import { SharedWrapperComponent } from './shared-wrapper/shared-wrapper.component';
import { ChangePasswordComponent } from '../admin/change-password/change-password.component'
import { DoctorSectionComponent } from '../admin/doctor-section/doctor-section.component'
import { NurseSectionComponent} from '../admin/nurse-section/nurse-section.component';
import { PatientSectionComponent} from '../admin/patient-section/patient-section.component';
import { RegisterComponent } from '../admin/register/register.component';
import { ScheduleComponent } from '../scheduling/schedule/schedule.component';
import { BookAppointmentComponent } from '../scheduling/book-appointment/book-appointment.component';
import { ViewDataComponent} from '../patient/view-data/view-data.component';

import { UserloginComponent } from '../login/userlogin/userlogin.component';
import { InboxComponent } from '../admin/inbox/inbox.component';
import { PatientVisitDoctorComponent } from '../patient-visit/patient-visit-doctor/patient-visit-doctor.component';
import { PatientVisitNurseComponent } from '../patient-visit/patient-visit-nurse/patient-visit-nurse.component';
import{ViewAppointmentsComponent} from '../scheduling/view-appointments/view-appointments.component'
const routes = [
    { 
        path: 'sharedwrapperhome', 
        component: SharedWrapperComponent,
        children: [
            { 
                path: 'doctorsection', component: DoctorSectionComponent
            },
            { 
                path: 'changepassword', component: ChangePasswordComponent
            },
            { 
                path: 'nursesection', component: NurseSectionComponent
            },
            { 
                path: 'patientsection', component: PatientSectionComponent
            },
            { 
                path: 'registration', component: RegisterComponent
            },
            {
                path:'inbox',component:InboxComponent
            },
            {
                path:'schedule', component:ScheduleComponent
            },
            {
                path:'bookappointment', component:BookAppointmentComponent
            },
            {
                path:'viewpatientdata', component:ViewDataComponent
            },
            {
                path:'patientvisitnurse', component:PatientVisitNurseComponent
            },
            {
                path:'patientvisitdoctor', component:PatientVisitDoctorComponent
            },
            {
                path:'viewappointments', component:ViewAppointmentsComponent
            }

            
        ]
    },
    {
        path:'userlogin', component:UserloginComponent 
    }
];

export default RouterModule.forChild(routes);

