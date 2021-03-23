import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Appointment} from '../Models/Appointment';
import { ConfigService } from '../core/config.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpsvc:HttpClient,private config:ConfigService) { }

  public SaveAppointment(a:Appointment):Observable<any>
  {
    console.log("service.SaveAppointment() hits");
    const headers={'content-type':'application/json'};
    if(a.drid !="")
    {
      return this.httpsvc.post<Appointment>(this.config.scheduleManagementAPI+ "/Schedule/bookappoinment",JSON.stringify(a),{'headers':headers});
    }
  }
  public SaveAppointmentActionData(p:Appointment):Observable<any>
    {
      console.log("service.SavePatientVisitNurseData() hits");
      console.log(JSON.stringify(p));
      const headers = { 'content-type': 'application/json'}  
        return this.httpsvc.post<Appointment>(this.config.scheduleManagementAPI+"/Schedule/updateappointmentaction", JSON.stringify(p),{'headers':headers});      
    }
    public GetAppointmentActionDataByAppointmentID(aID: number):Observable<any>
    { 
        debugger;          
        return this.httpsvc.get<any>(this.config.scheduleManagementAPI+"/Schedule/getappointmentaction?id="+aID);
    
    }
    public GetAppointmentsHistoryForPatient(userName: string):Observable<any>
    { 
        debugger;          
        return this.httpsvc.get<any>(this.config.scheduleManagementAPI+"/Schedule/getappointmentshistoryforpatient?userName="+userName);
    }
  
}
