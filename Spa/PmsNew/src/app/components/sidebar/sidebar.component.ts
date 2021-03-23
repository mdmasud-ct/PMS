import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import {AuthService} from '../../core/auth.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export var ROUTES: RouteInfo[] = [
    // { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    // { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    // { path: '/calendar', title: 'Calendar',  icon:'calendar_view_month', class: 'calendar' },
    // { path: '/doctor', title: 'Doctors',  icon:'medical_services', class: 'doctor' },
    // { path: '/nurse', title: 'Nurses',  icon:'medical_services', class: 'nurse' },
    // { path: '/patient', title: 'Patients',  icon:'medical_services', class: 'patient' },
    // //{ path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    // //{ path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    // //{ path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    // //{ path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' }
    // //{ path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
    
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  res:any;
  role:string;

  constructor(private authService:AuthService) { }

  ngOnInit() {    
    //debugger;
    if(this.authService.isAuthenticated)
    {
    this.initRole();
    }
    // this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

  initRole(){
    this.authService.getUserRole(this.authService.email)
      .pipe(finalize(() => {
      }))  
      .subscribe(
      result => {         
         if(result) {
           //debugger;
            this.res = result;
            this.authService.userrole = this.res.role;
            this.role=this.res.role;
            this.setMenu();
         }
      },
      error => {
      });
  }

 public setMenu(){
    switch(this.role)
    {
      case "admin":
        ROUTES=[
          { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
          { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
          { path: '/doctor', title: 'Doctors',  icon:'medical_services', class: 'doctor' },
          { path: '/nurse', title: 'Nurses',  icon:'medical_services', class: 'nurse' },
          { path: '/patient', title: 'Patients',  icon:'medical_services', class: 'patient' }
        ];
          break;
      case "patient":
       ROUTES=[
          { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
          { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
          { path: '/calendar', title: 'Calendar',  icon:'calendar_view_month', class: 'calendar' },,
          { path: '/viewdata', title: 'My Details',  icon:'person', class: '' },
          { path: '/schedule', title: 'Book Appointment',  icon:'note_alt', class: '' },  
          { path: '/visithistorydata', title: 'Visit History',  icon: 'history', class: '' }, 
          { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' }
      ];
      break;
      case "doctor":
        ROUTES=[ 
          { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
          { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
          { path: '/calendar', title: 'Calendar',  icon:'calendar_view_month', class: 'calendar' },,
          { path: '/viewappointment', title: 'View Appointments',  icon:'medical_services', class: '' },           
          { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' }
       ];
       break;
       case "nurse":
        ROUTES=[   
          { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
          { path: '/viewappointment', title: 'View Appointments',  icon:'medical_services', class: '' },           
          { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' }
       ];
       break;
      default:
        ROUTES=[
          { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' }
      ];
        break;
    }
    this.menuItems = ROUTES.filter(menuItem => menuItem);  
  }
}
