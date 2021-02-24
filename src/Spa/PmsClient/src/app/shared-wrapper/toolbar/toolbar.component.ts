import { Component, OnInit, Output, EventEmitter,OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit,OnDestroy {

  @Output()
  public toggle:EventEmitter<void> = new EventEmitter<void>();

  constructor(private router: Router,private route: ActivatedRoute,private authService:AuthService) { }

  name: string;
  isAuthenticated: boolean;
  subscription:Subscription;
  
  public Toggle(): void
  {
    this.toggle.emit();
  }

  ngOnInit(): void {
    this.subscription = this.authService.authNavStatus$.subscribe(status => this.isAuthenticated = status);
    this.name = this.authService.name;
  }
  async signout() {
    await this.authService.signout();     
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  ChangePasswdClick(eventsource: any): void
  {
    this.router.navigate(['changepassword'],{ relativeTo: this.route });
  }
  HomeClick(eventsource: any): void
  {
    // this.router.navigate([''],{ relativeTo: this.route });
    this.router.navigate(['/sharedwrapperhome']);   
  }

}
