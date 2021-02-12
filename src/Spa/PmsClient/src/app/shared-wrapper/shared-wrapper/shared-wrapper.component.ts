import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../core/auth.service';
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
  @ViewChild('x')
  public matselection: any;
  constructor(private breakpointobserver: BreakpointObserver, private router: Router, private route: ActivatedRoute,private authService: AuthService ) { }

  ngOnInit(): void 
  {
    this.breakpointobserver.observe(
      [`(max-width: ${SMALL_SCREEN_SIZE}px)`]
    )
    .subscribe((state: BreakpointState) => {
      this.isScreenSmall = state.matches;
    });
    this.name = this.authService.name;
  }

  DoSomething(eventsource: any): void
  {    
    console.log(this.matselection.selectedOptions.selected[0]?.value);
    if(this.matselection.selectedOptions.selected[0]?.value == "doctorsection")
    {
       this.router.navigate(['doctorsection'],{ relativeTo: this.route });
    }
    if(this.matselection.selectedOptions.selected[0]?.value == "nursesection")
    {
      this.router.navigate(['nursesection'],{ relativeTo: this.route });
    }
    if(this.matselection.selectedOptions.selected[0]?.value == "patientsection")
    {
      this.router.navigate(['patientsection'],{ relativeTo: this.route });
    }
    if(this.matselection.selectedOptions.selected[0]?.value == "registration")
    {
      this.router.navigate(['registration'],{ relativeTo: this.route });
    }
  }

}
