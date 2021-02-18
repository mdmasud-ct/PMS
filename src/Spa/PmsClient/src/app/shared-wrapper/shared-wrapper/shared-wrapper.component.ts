import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../core/auth.service';

import { finalize } from 'rxjs/operators'
import { UserModel }    from '../../models/user.model';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { ToasterService } from './../../core/ToasterService';
import { ToasterPosition } from './../../core/ToasterPosition';
import { NgxSpinnerService } from 'ngx-spinner'; 
import { analyzeAndValidateNgModules } from '@angular/compiler';
const SMALL_SCREEN_SIZE = 720;

@Component({
  selector: 'app-shared-wrapper',
  templateUrl: './shared-wrapper.component.html',
  styleUrls: ['./shared-wrapper.component.css']
})
export class SharedWrapperComponent implements OnInit {

  public isScreenSmall: boolean;
  public selectedoption: string = "";
  name: string;
  role:string;
  @ViewChild('x')
  public matselection: any;
  constructor(private breakpointobserver: BreakpointObserver, private router: Router, private route: ActivatedRoute,private authService: AuthService) { }
  res:any;
  ngOnInit(): void 
  {
    this.breakpointobserver.observe(
      [`(max-width: ${SMALL_SCREEN_SIZE}px)`]
    )
    .subscribe((state: BreakpointState) => {
      this.isScreenSmall = state.matches;
    });
    this.name = this.authService.name;

    this.initRole();
  }
  initRole(){
    this.authService.getUserRole(this.authService.email)
      .pipe(finalize(() => {
      }))  
      .subscribe(
      result => {         
         if(result) {
            this.res = result;
            //alert(this.res.role);
            this.authService.userrole = this.res.role;
            this.role = this.res.role;
         }
      },
      error => {
      });
  }
  DoSomething(eventsource: any): void
  {    
    console.log(this.matselection.selectedOptions.selected[0]?.value);
    if(this.matselection.selectedOptions.selected[0]?.value == "doctorsection")
    {
       this.router.navigate(['doctorsection'],{ relativeTo: this.route });
    }
    else if(this.matselection.selectedOptions.selected[0]?.value == "nursesection")
    {
      this.router.navigate(['nursesection'],{ relativeTo: this.route });
    }
    else if(this.matselection.selectedOptions.selected[0]?.value == "patientsection")
    {
      this.router.navigate(['patientsection'],{ relativeTo: this.route });
    }
    else if(this.matselection.selectedOptions.selected[0]?.value == "registration")
    {
      this.router.navigate(['registration'],{ relativeTo: this.route });
    }
    else if(this.matselection.selectedOptions.selected[0]?.value == "changepassword")
    {
      this.router.navigate(['changepassword'],{ relativeTo: this.route });
    }
    else if(this.matselection.selectedOptions.selected[0]?.value == "inbox")
    {
      this.router.navigate(['inbox'],{ relativeTo: this.route });
    }
    else{
      this.router.navigate(['doctorsection'],{ relativeTo: this.route });
    }
  }

}
