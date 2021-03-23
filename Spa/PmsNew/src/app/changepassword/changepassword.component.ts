import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators'
import { AuthService } from '../core/auth.service';
import { UserModel }    from '../models/user.model';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { ToasterService } from './../core/ToasterService';
import { ToasterPosition } from './../core/ToasterPosition';
import { MatchPasswd } from '../CustomValidator/PasswdMatch.validator'
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from 'oidc-client';
import { Router } from '@angular/router';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private authService: AuthService,private toastr: ToasterService,private spinner: NgxSpinnerService,private router :Router) { }

  success: boolean;
  error: string;
  userId: string= this.authService.email; 
  usermodel: UserModel = { oldPassword: '', email: this.authService.email , newPassword: '', confirmPassword:''};
  submitted: boolean = false;
  busy:boolean;
  result: any;
  formdata:any;
  ngOnInit(): void {
    this.userId = this.authService.email;
    this.usermodel =new UserModel('',this.userId,'','');
    console.log(this.userId);
  }
  onSubmit(token:string){
    this.busy = true;
    this.spinner.show();
    //this.usermodel.email = this.authService.email;
    this.formdata = this.usermodel;
    this.usermodel.email=this.userId;

    console.log(this.usermodel);
    this.authService.changePassword(this.usermodel,this.authService.authorizationHeaderValue)
      .pipe(finalize(() => {
        this.spinner.hide();
      }))  
      .subscribe(
      result => {         
         if(result) {
          this.busy = false;
          this.spinner.hide();
            console.log("success");
            this.success = true;
            this.toastr.success('Success', 'Password Reset Successfully',ToasterPosition.topFull);
            this.authService.signoutSilent();
            //this.router.navigate(['relogin/Password reset successfully']);
         }
      },
      error => {
        this.spinner.hide();
        this.result = error;
        console.log(this.result);
        this.toastr.error('Error',this.result,ToasterPosition.topFull);
        this.error = error;       
      });
  }
  relogin(){
    this.authService.signout();
  }

}
