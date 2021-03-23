import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/auth.service'; 
 
@Component({
  selector: 'app-headers',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
 
  name: string;
  isAuthenticated: boolean;
  subscription:Subscription;
  
  constructor(private authService:AuthService) { }
  
  async signout() {
    await this.authService.signout();     
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.authService.authNavStatus$.subscribe(status => this.isAuthenticated = status);
    this.name = this.authService.name;
  }

}
