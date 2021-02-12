import { Injectable } from '@angular/core';
import { Register } from '../models/registerModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { Nurse } from '../models/nurseModel';
import { Doctor } from '../models/doctorModel';
import { Patient } from '../models/patientModel';
import { Url } from 'url';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/operators';
import { ConfigService } from '../core/config.service';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  headers: any;

  // constructor()  { }
  constructor(private httpSVC:HttpClient,private config: ConfigService)  { }
  public SaveUserRegiterDatas(reg:Register):Observable<any>
  {
    console.log("service.SavePractitionerData() hits");
      console.log(JSON.stringify(reg));
      const headers = { 'content-type': 'application/json'}
      if(reg.role=='Doctor')  
        return this.httpSVC.post<Register>( this.config.tempResourseAPI+ "/Doctors", JSON.stringify(reg),{'headers':headers});
      else if(reg.role=='Nurse')
        return this.httpSVC.post<Register>(this.config.tempResourseAPI+"/Nurses", JSON.stringify(reg),{'headers':headers});
    
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
      return this.httpSVC.get<Patient>(this.config.tempResourseAPI+ "/Patients");
  }

  // Get data by Id
  public GetDoctorJsonDatasByID(DrID: number):Observable<any>
  {
      return this.httpSVC.get<Doctor>("http://localhost:3000/doctor?DrID="+DrID);
  }
  public GetNurseJsonDatasByID(NurseID: number):Observable<any>
  {   
      return this.httpSVC.get<Nurse>("http://localhost:3000/Nurse?NurseID="+NurseID);
  }
  public GetPatientJsonDatasByID(PatientID: number):Observable<any>
  {
      return this.httpSVC.get<Patient>("http://localhost:3000/Patient?PatientID="+PatientID);
  }
    private handleError(error: any) {
    console.error(error);                                       //Created a function to handle and log errors, in case
    return throwError(error);
  }
      
  public DeleteDoctorJsonDatasByID(DrID: number):Observable<any>
  {
    // return this.httpSVC.delete<Doctor>("http://localhost:3000/doctor?DrID="+DrID);
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');        
    const httpOptions = {
      headers: this.headers
    };
    const _url = "http://localhost:3000/doctor?DrID="+DrID;          
      return this.httpSVC.delete<Doctor>(_url, this.headers).pipe(catchError(this.handleError));          
  }
  public DeleteNurseJsonDatasByID(NurseID: number):Observable<any>
  {   
      // return this.httpSVC.get<Nurse>("http://localhost:3000/Nurse?NurseID="+NurseID);
      const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');        
      const httpOptions = {
        headers: this.headers
      };
      const _url = "http://localhost:3000/Nurse?NurseID="+NurseID;          
        return this.httpSVC.delete<Doctor>(_url, this.headers).pipe(catchError(this.handleError));    
  }
  public DeletePatientJsonDatasByID(PatientID: number):Observable<any>
  {
      // return this.httpSVC.get<Patient>("http://localhost:3000/Patient?PatientID="+PatientID);
      const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');        
      const httpOptions = {
        headers: this.headers
      };
      const _url = "http://localhost:3000/Patient?PatientID="+PatientID
        return this.httpSVC.delete<Doctor>(_url, this.headers).pipe(catchError(this.handleError));    
  }

  // Update 
  // public UpdateDoctorJsonDatasByID(DrID: number):Observable<any>
  // {
  //   // return this.httpSVC.delete<Doctor>("http://localhost:3000/doctor?DrID="+DrID);
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');        
  //   const httpOptions = {
  //     headers: this.headers
  //   };
  //   const _url = "http://localhost:3000/doctor?DrID="+DrID;          
  //     return this.httpSVC.delete<Doctor>(_url, this.headers).pipe(catchError(this.handleError));          
  // }
  // public UpdateNurseJsonDatasByID(NurseID: number):Observable<any>
  // {   
  //     // return this.httpSVC.get<Nurse>("http://localhost:3000/Nurse?NurseID="+NurseID);
  //     const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');        
  //     const httpOptions = {
  //       headers: this.headers
  //     };
  //     const _url = "http://localhost:3000/Nurse?NurseID="+NurseID;          
  //       return this.httpSVC.delete<Doctor>(_url, this.headers).pipe(catchError(this.handleError));    
  // }
  // public UpdatePatientJsonDatasByID(PatientID: number):Observable<any>
  // {
  //     // return this.httpSVC.get<Patient>("http://localhost:3000/Patient?PatientID="+PatientID);
  //     const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');        
  //     const httpOptions = {
  //       headers: this.headers
  //     };
  //     const _url = "http://localhost:3000/Patient?PatientID="+PatientID
  //       return this.httpSVC.delete<Doctor>(_url, this.headers).pipe(catchError(this.handleError));    
  // }
}
