import { Component, OnInit, Output, EventEmitter,OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/auth.service';
import { Observable } from 'rxjs';
import {Notification} from '../../models/Notification';
import {NotificationsService} from '../../service/notifications.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  providers:[DatePipe]
})
export class ToolbarComponent implements OnInit,OnDestroy {

  @Output()
  public toggle:EventEmitter<void> = new EventEmitter<void>();

  //#region Notification
  public badgeValue:string="0";
  public ob :Observable<Notification[]>;
  public notificationData:Notification[]=[];
  //#endregion

  constructor(private router: Router,private route: ActivatedRoute,private authService:AuthService
    ,private notificationsvc:NotificationsService,private datepipe: DatePipe) { }

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
    this.loadNotifications();
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

    //#region Notification
  loadNotifications()
  {
    this.ob = this.notificationsvc.GetNotificationsByID(1);
    this.ob.subscribe(
      data => { 
        console.log("Output");
        console.log(data);
        this.notificationData = data;
        this.badgeValue=data.length.toString();
      },
      (error: any) => console.log("Error in fetching notification data")
      );
  }

  setIsSeenNotification(notificationId:number)
  {
    console.log(notificationId);
   console.log("ts.setIsSeenNotification() hits"); 
  let obj:any={};
  obj.id=notificationId,
  obj.isSeen=true;
  
   this.ob =this.notificationsvc.SetIsSeenNotification(obj);
 
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
