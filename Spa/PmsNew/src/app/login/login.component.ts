import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { NgxSpinnerModule,NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class loginComponent implements OnInit {

  constructor(private authService: AuthService,private spinner:NgxSpinnerService) { }    
  
    title = "Login";
    
    public Login():void {     
      this.spinner.show();
      this.authService.login();
    }   

    ngOnInit() {
      this.spinner.show();
      this.Login();
    }
  

}
