import { RouterModule } from '@angular/router';
import { SharedWrapperComponent } from './shared-wrapper/shared-wrapper.component';
import { ChangePasswordComponent } from '../admin/change-password/change-password.component'
import { DoctorSectionComponent } from '../admin/doctor-section/doctor-section.component'
import {NurseSectionComponent} from '../admin/nurse-section/nurse-section.component';
import {PatientSectionComponent} from '../admin/patient-section/patient-section.component';
import { RegisterComponent } from '../admin/register/register.component';

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
            }
        ]
    },
];

export default RouterModule.forChild(routes);

