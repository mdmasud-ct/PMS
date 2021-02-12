import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(private authService: AuthService) { }    
  
    title = "Login";
    
    public Login():void {     
      //this.spinner.show();
      this.authService.login();
    }   

    ngOnInit() {
      //this.spinner.show();
      this.Login();
    }
  // public Login(): void
  // {      
          //this.router.navigate(['/sharedwrapperhome']);        
  // }

}
