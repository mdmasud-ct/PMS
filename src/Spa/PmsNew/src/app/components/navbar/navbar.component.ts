import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { Observable } from 'rxjs';
import { title } from 'process';
import {Notification} from '../../models/Notification';
import {NotificationsService} from '../../services/notifications.service';
import {DatePipe} from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[DatePipe]
})
export class NavbarComponent implements OnInit {
    private listTitles: any[];
    location: Location;
      mobile_menu_visible: any = 0;
    private toggleButton: any;
    private sidebarVisible: boolean;


      //#region Notification
      public badgeValue:string="0";
      public ob :Observable<Notification[]>;
      public notificationData:Notification[]=[];
      //#endregion

    name:string;
    constructor(location: Location,  private element: ElementRef, private router: Router, private auth:AuthService
        ,private notificationsvc:NotificationsService,private datepipe: DatePipe) {
      this.location = location;
          this.sidebarVisible = false;
    }

    ngOnInit(){
        this.name = this.auth.name;
      //this.listTitles = ROUTES.filter(listTitle => listTitle);
      const navbar: HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
      this.router.events.subscribe((event) => {
        this.sidebarClose();
         var $layer: any = document.getElementsByClassName('close-layer')[0];
         if ($layer) {
           $layer.remove();
           this.mobile_menu_visible = 0;
         }
     });
     this.loadNotifications();
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);

        body.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];

        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
        const body = document.getElementsByTagName('body')[0];

        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function() {
                $toggle.classList.remove('toggled');
            }, 400);

            this.mobile_menu_visible = 0;
        } else {
            setTimeout(function() {
                $toggle.classList.add('toggled');
            }, 430);

            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');


            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }

            setTimeout(function() {
                $layer.classList.add('visible');
            }, 100);

            $layer.onclick = function() { //asign a function
              body.classList.remove('nav-open');
              this.mobile_menu_visible = 0;
              $layer.classList.remove('visible');
              setTimeout(function() {
                  $layer.remove();
                  $toggle.classList.remove('toggled');
              }, 400);
            }.bind(this);

            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;

        }
    };

    getTitle(){
        this.listTitles = ROUTES.filter(listTitle => listTitle);
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }
        //console.log(titlee);
      for(var item = 0; item < this.listTitles.length; item++){
          if(this.listTitles[item].path === titlee){
              return this.listTitles[item].title;
          }
      }
      if(titlee=='/changepassword'){
          return 'Change Password';
      }
      return 'Dashboard';
    }
    logout(){
        this.auth.signout();
    }
    isAuth():boolean{
        if(this.auth.isAuthenticated){
            return true;
        }
        return false;
    }

    //#region Notification
  loadNotifications()
  {
    //debugger;
    this.ob = this.notificationsvc.GetNotificationsByID(this.auth.email);
    this.ob.subscribe(
      data => { 
        console.log("Output");
        console.log(data);
        this.notificationData = data.slice(0,2);
        this.badgeValue=this.notificationData.length.toString();
      },
      (error: any) => console.log("Error in fetching notification data")
      );
  }

  setIsSeenNotification(notificationId:number)
  {
    console.log(notificationId);
   console.log("ts.setIsSeenNotification() hits"); 
  // let obj:any={};
  // obj.id=notificationId,
  // obj.isSeen=true;
  
   this.ob =this.notificationsvc.SetIsSeenNotification(notificationId);
 
   this.ob.subscribe(
     dataa => { 
       console.log(dataa); 
       this.loadNotifications();
      },
     (error: any) => console.log("Error Occured")
   );
  }

  getNotificationTimeDiff(createdTime:string):string
  {
    console.log(createdTime);
    var dateOneObj = new Date(createdTime).getTime();
    var dateTwoObj = new Date().getTime();
    // var milliseconds = Math.abs(dateOneObj-dateTwoObj)
    // var hours = milliseconds / 36e5;
    // return hours.toString()+" Hours ago";

    var diff =(dateOneObj-dateTwoObj) / 1000;
    var minutes=Math. abs(Math. round(diff/60)).toString();
    console.log(minutes);
    var hours=Math. abs(Math. round(diff/3600)).toString();
    console.log(hours);
    if(parseInt(minutes) < 60)
    {
      return minutes.toString()+" Minutes ago"
    }
    else if(parseInt(hours)<24)
    {
      return hours.toString()+" Hours ago"
    }
    else
    {
    return this.datepipe.transform(createdTime,"MMMM d, y");
    }
  }
  //#endregion
}
