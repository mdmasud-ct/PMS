import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
//import { AccountRoutingModule } from './account/account-routes.module'
import { LoginComponent } from './account/login/login.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  },
  {
    path: "auth-callback",
    component: AuthCallbackComponent,
  },
  // {
  //   path: "changepassword",
  //   component: ChangepasswordComponent,
  // }
  //{ path:'sharedwrapper', loadChildren:()=> import('./layout/AdminLayoutModule').then(m=>m.AdminLayoutModule)}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
    //useHash: true, 
    relativeLinkResolution: 'legacy'
})
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
