import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Doctors} from '../Models/Doctor';
import { ConfigService } from '../core/config.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {

  constructor(private httpsvc:HttpClient,private config:ConfigService) { }

  public GetAllDoctors():Observable<any>
  {
    console.log('service.GetAllDoctors called');
    return this.httpsvc.get<any>(this.config.scheduleManagementAPI+"/Schedule/getalldoctors");
  }

  public GetFilteredDoctors(filterStr:string):Observable<any>
  {
    console.log('service.GetAllDoctors called');
    return this.httpsvc.get<any>(this.config.scheduleManagementAPI+"/Schedule/getfiltereddoctors?"+filterStr);
  }

  public GetDoctorDataById(id:number,userName:string):Observable<any>
  {
    debugger;
    console.log('service.GetAllDoctors called');
    return this.httpsvc.get<any>(this.config.scheduleManagementAPI+"/Schedule/getappointment?doctorId="+id+"&patientUserName="+userName);    
  }
}
