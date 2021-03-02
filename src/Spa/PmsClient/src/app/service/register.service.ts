import { Injectable } from '@angular/core';
import { Register } from '../models/registerModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { Nurse } from '../models/nurseModel';
import { Doctor } from '../models/doctorModel';
//import { Patient } from '../models/patientModel';
import { Patients} from '../models/Patient';
import { Url } from 'url';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/operators';
import { ConfigService } from '../core/config.service';
import { Appointment } from '../models/Appointment';
import { BaseService } from '../core/base.service';
import { finalize } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends BaseService {
  headers: any;
  genders:any;
  titles:any;
  // constructor()  { }
  constructor(private httpSVC:HttpClient,private config: ConfigService)  { 
    super();
  }
  public SaveUserRegiterDatas(reg:Register,operation:string):Observable<any>
  {
    console.log("service.SavePractitionerData() hits");
      const headers = { 'content-type': 'application/json'}
      if(operation==="POST")
      {
        //if(reg.role=='Doctor')  
        //return this.httpSVC.post<Register>( this.config.tempResourseAPI+ "/Doctors", JSON.stringify(reg),{'headers':headers});
        return this.httpSVC.post<Register>( this.config.authApiURI+ "/doctor",reg).pipe(catchError(this.handleError));
        //else if(reg.role=='Nurse')
        //  return this.httpSVC.post<Register>(this.config.tempResourseAPI+"/Nurses", JSON.stringify(reg),{'headers':headers});
      }
      else
      {
        if(reg.role=='Doctor')  
          return this.httpSVC.patch<Register>( this.config.tempResourseAPI+ "/Doctors/"+reg.id, JSON.stringify(reg),{'headers':headers});
        else if(reg.role=='Nurse')
          return this.httpSVC.patch<Register>(this.config.tempResourseAPI+"/Nurses/"+reg.id, JSON.stringify(reg),{'headers':headers});        
      }
      
    
  }
  //http://localhost:3000/Doctor?DrID=102
  public GetDoctorJsonDatas():Observable<any>
  {
      return this.httpSVC.get<Doctor>(this.config.tempResourseAPI+ "/Doctors");
  }
  public GetNurseJsonDatas():Observable<any>
  {   
      return this.httpSVC.get<Nurse>(this.config.tempResourseAPI + "/Nurses");
  }
  public GetPatientJsonDatas():Observable<any>
  {
      return this.httpSVC.get<Patients>(this.config.tempResourseAPI+ "/Patient");
  }

  // Get data by Id
  public GetDoctorJsonDatasByID(DrID: number):Observable<any>
  {   
      // return this.httpSVC.get<Doctor>("http://localhost:3000/Doctors?id="+DrID);
      return this.httpSVC.get<Doctor>(this.config.tempResourseAPI+ "/Doctors?id="+DrID);
  }
  public GetNurseJsonDatasByID(NurseID: number):Observable<any>
  {   
      // return this.httpSVC.get<Nurse>("http://localhost:3000/Nurses?id="+NurseID);
      return this.httpSVC.get<Nurse>(this.config.tempResourseAPI+ "/Nurses?id="+NurseID);
  }
  public GetPatientJsonDatasByID(PatientID: number):Observable<any>
  {
      // return this.httpSVC.get<Patient>("http://localhost:3000/Patients?id="+PatientID);
      return this.httpSVC.get<Patients>(this.config.tempResourseAPI+ "/Patient?id="+PatientID);
  }
  // private handleError(error: any)
  // {
  //   console.error(error);                                       //Created a function to handle and log errors, in case
  //   return throwError(error);
  // }

// Delete data by Id
  public DeleteDoctorJsonDatasByID(DrID: number):Observable<any>
  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
    const httpOptions = {
      headers: this.headers
    };
    return this.httpSVC.delete<Doctor>(this.config.tempResourseAPI+ "/Doctors/"+DrID, this.headers).pipe(catchError(this.handleError));
  }
  public DeleteNurseJsonDatasByID(NurseID: number):Observable<any>
  {
    return this.httpSVC.delete<Nurse>(this.config.tempResourseAPI+ "/Nurses/"+NurseID);
  }
  public DeletePatientJsonDatasByID(PatientID: number):Observable<any>
  {
    return this.httpSVC.delete<Patients>(this.config.tempResourseAPI+ "/Patient/"+PatientID);
  }

  // Get Appointment JsonData
  public GetAppointmentJsonData():Observable<any>
  {
      return this.httpSVC.get<Appointment>(this.config.tempResourseAPI+ "/Appointment");
  }
  public SoftDeleteNurseData(p:any):Observable<any>
  {
    console.log("service.SoftDeleteNurseData() hits");
    console.log(JSON.stringify(p));
    const headers = { 'content-type': 'application/json'}  
      return this.httpSVC.patch<any>("http://localhost:3000/Nurses/"+p.id, JSON.stringify(p),{'headers':headers});      
  }
  public SoftDeleteDoctorData(p:any):Observable<any>
  {
    console.log("service.SoftDeleteNurseData() hits");
    console.log(JSON.stringify(p));
    const headers = { 'content-type': 'application/json'}  
      return this.httpSVC.patch<any>("http://localhost:3000/Doctors/"+p.id, JSON.stringify(p),{'headers':headers});      
  }
    //Update IsActive in PatientJson for Delete opertion
    public SoftDeletePatienData(p:any):Observable<any>
    {
      console.log("service.SoftDeletePatienData() hits");
      console.log(JSON.stringify(p));
      const headers = { 'content-type': 'application/json'}  
        return this.httpSVC.patch<any>("http://localhost:3000/Patient/"+p.id, JSON.stringify(p),{'headers':headers});      
    }
}


