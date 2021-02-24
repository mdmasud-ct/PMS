import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Appointment} from '../Models/Appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpsvc:HttpClient) { }

  public SaveAppointment(a:Appointment):Observable<any>
  {
    console.log("service.SaveAppointment() hits");
    const headers={'content-type':'application/json'};
    if(a.drid !="")
    {
      return this.httpsvc.post<Appointment>("http://localhost:3000/Appointment",JSON.stringify(a),{'headers':headers});
    }
  }
  
}
