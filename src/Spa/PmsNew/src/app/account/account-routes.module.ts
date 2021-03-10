import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { LoginComponent } from './login/login.component';

const routes : Routes = [
    { path:'register',          component:RegisterComponent },
    { path: 'patientregister',  component: PatientRegisterComponent },
    { path: 'login',            component:LoginComponent }
    //{ path: 'login',loadChildren:()=> import('./account.module').then(m=>m.AccountModule)  }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers:[]
})

export class AccountRoutingModule{}