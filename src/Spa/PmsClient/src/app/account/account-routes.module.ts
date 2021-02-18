import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';

const routes : Routes = [
    { path:'register',component:RegisterComponent },
    { path: 'patientregister', component: PatientRegisterComponent },
    //{ path: 'userlogin',loadChildren:()=> import('../login/login.module').then(m=>m.LoginModule)  }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers:[]
})

export class AccountRoutingModule{}