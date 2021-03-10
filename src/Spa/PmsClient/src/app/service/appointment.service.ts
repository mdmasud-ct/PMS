import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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
    let header = new HttpHeaders({
      'Content-Type': 'application/json'
     });
    if(a.drid !="")
    {
      return this.httpsvc.post<Appointment>(this.config.scheduleManagementAPI+"/Schedule/bookappoinment",JSON.stringify(a),{'headers':header});
    }
  }
  public SaveAppointmentActionData(p:Appointment):Observable<any>
    {
      console.log("service.SavePatientVisitNurseData() hits");
      console.log(JSON.stringify(p));
      const headers = { 'content-type': 'application/json'}  
        return this.httpsvc.patch<Appointment>("http://localhost:3000/Appointment/"+p.id, JSON.stringify(p),{'headers':headers});      
    }
    public GetAppointmentActionDataByAppointmentID(aID: number):Observable<any>
    { 
        debugger;          
        return this.httpsvc.get<any>("http://localhost:3000/Appointment?id="+aID);
    }
  
}
