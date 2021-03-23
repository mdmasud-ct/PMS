import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import {  finalize } from 'rxjs/operators'; 


@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  constructor(private authService:AuthService) { }
  res:any;
  todaydate:any;
  day2:Date;
  day3:any;
  day4:any;
  day5:any;
  day6:any;
  day7:any;
  role: string;
  ngOnInit(): void {
    //this.role = this.authService.role;
    //let dateFormat = require('dateformat');
    var dt = new Date();
    this.todaydate = new Date();
    this.day2 = new Date(dt);
    this.day2.setDate(this.day2.getDate()+1)
    
    this.day3 = new Date(this.addDate(dt,2));
    this.day4 = new Date(this.addDate(dt,3));
    this.day5 = new Date(this.addDate(dt,4));

    this.day6 = new Date(this.addDate(dt,5));
    this.day7 = new Date(this.addDate(dt,6));
    //var res =dateFormat(now, "dddd, mmmm dS, yyyy");
    
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
            console.log("Role: "+this.role);
         }
      },
      error => {
      });
    

  }
  addDate(dt:Date,days:number):Date{
    var dn = new Date(dt);
    dn.setDate(dn.getDate()+days);
    return dn;
  }

}
