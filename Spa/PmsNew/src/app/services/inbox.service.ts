import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, observable, pipe} from 'rxjs';
import { ConfigService } from '../core/config.service';

@Injectable({
  providedIn: 'root'
})
export class InboxService {

  constructor(private httpsvc:HttpClient, private config:ConfigService) { }

  public GetAllCalendarNotification(role: string,userName: string):Observable<any>
  {
    debugger;
      return this.httpsvc.get<any>(this.config.inboxManagementAPI+"/Inbox/getcalendarappointment?role="+role+"&userName="+userName);
  }

  public GetNotificationDetails(appointmentId: number):Observable<any>
  {
    debugger;
      return this.httpsvc.get<any>(this.config.inboxManagementAPI+"/Inbox/getappointmentdetails?appointmentId="+appointmentId);
  }

  public SaveAppointmentActionData(appointmentId:number,isApproved:string,reason:string):Observable<any>
  {
    const headers = { 'content-type': 'application/json'}  
      return this.httpsvc.post<any>(this.config.inboxManagementAPI+"/Inbox/updateappointmentaction?appointmentId="+appointmentId+"&isApproved="+isApproved+"&reason="+reason,{'headers':headers});      
  }
}
