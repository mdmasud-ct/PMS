import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/auth.service'; 
import { Router,RouterModule,Navigation } from '@angular/router'
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  isAuthenticated: boolean;
  subscription: Subscription;
  constructor(private authService : AuthService,private route: Router) { }

  ngOnInit(): void {
    this.subscription = this.authService.authNavStatus$.subscribe(status => this.isAuthenticated = status);
    if(this.isAuthenticated){
      //this.route.navigate["/sharedwrapper"];
      this.route.navigate(['/sharedwrapperhome']);    
      console.log("logged in");
    }else{
      console.log("logged out");
    }
  }

}
