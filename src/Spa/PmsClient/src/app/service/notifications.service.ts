import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Notification} from '../models/Notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private httpsvc:HttpClient) { }

  public GetNotificationsByID(UserID: number):Observable<any>
  {
      return this.httpsvc.get<Notification>("http://localhost:3000/Notifications?isSeen=false&userId="+UserID);
  }

  public SetIsSeenNotification(p:any):Observable<any>
  {
    console.log("service.SetIsSeenNotification() hits");
    console.log(JSON.stringify(p));
    const headers = { 'content-type': 'application/json'}  
      return this.httpsvc.patch<any>("http://localhost:3000/Notifications/"+p.id, JSON.stringify(p),{'headers':headers});      
  }
}
