import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Observable } from 'rxjs';
import { NotificationsService } from 'app/services/notifications.service';
import { DatePipe } from '@angular/common';
import {Notification} from '../models/Notification';


declare var $: any;
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],  
  providers:[DatePipe]
})
export class NotificationsComponent implements OnInit {
//#region Notification
public ob :Observable<Notification[]>;
public notificationData:Notification[]=[];
//#endregion

    constructor(private auth:AuthService,private notificationsvc:NotificationsService
      ,private datepipe:DatePipe) { }


  showNotification(from, align){
      const type = ['','info','success','warning','danger'];

      const color = Math.floor((Math.random() * 4) + 1);

      $.notify({
          icon: "notifications",
          message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."

      },{
          type: type[color],
          timer: 4000,
          placement: {
              from: from,
              align: align
          },
          template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
            '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
            '<i class="material-icons" data-notify="icon">notifications</i> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
              '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
      });
  }
 

  //#region Notification
  loadNotifications()
  {
    debugger;
    this.ob = this.notificationsvc.GetNotificationsByID(this.auth.email);
    this.ob.subscribe(
      data => { 
        console.log("Output");
        console.log(data);
        this.notificationData = data;
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

  ngOnInit() {    
    debugger;
    this.loadNotifications();
  }
}
