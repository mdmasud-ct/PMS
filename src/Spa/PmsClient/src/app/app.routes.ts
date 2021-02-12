import {RouterModule} from '@angular/router'
import { UserloginComponent } from './login/userlogin/userlogin.component';
import {SharedWrapperComponent} from './shared-wrapper/shared-wrapper/shared-wrapper.component'
import { IndexComponent } from './home/index/index.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
const appRoutes=[
{ path: '', redirectTo: '/home', pathMatch: 'full'},
{ path:'userlogin', component:UserloginComponent },
{ path:'home', component:IndexComponent },
{ path: 'auth-callback', component: AuthCallbackComponent},
{ path:'sharedwrapperhome', component:SharedWrapperComponent },

//shared-wrapper module
{path:'sharedwrapper', loadChildren:()=> import('./shared-wrapper/shared-wrapper.module').then(m=>m.SharedWrapperModule)}
//shared-wrapper module
];

export default RouterModule.forRoot(appRoutes);