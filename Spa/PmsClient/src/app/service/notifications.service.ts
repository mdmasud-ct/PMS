import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Notification} from '../models/Notification';
import { ConfigService } from '../core/config.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private httpsvc:HttpClient,private config:ConfigService) { }

  public GetNotificationsByID(userName: string):Observable<any>
  {    
      return this.httpsvc.get<Notification>(this.config.patientManagementAPI+"/Patient/getnotifications?userName="+userName);
  }

  public SetIsSeenNotification(id:number):Observable<any>
  {
    console.log("service.SetIsSeenNotification() hits");
    // console.log(JSON.stringify(p));
    let header = new HttpHeaders({
      'Content-Type': 'application/json'
     });
      return this.httpsvc.patch<any>(this.config.patientManagementAPI+"/Patient/updatenotification?id="+id,{'headers':header});      
  }
}
