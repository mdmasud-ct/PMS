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
import { doctorGrid } from 'app/models/doctorGrid';

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends BaseService {
  headers: any;
  genders:any;
  titles:any;
  constructor(private httpSVC:HttpClient,private config: ConfigService)  { 
    super();
  }
  public SaveUserRegiterDatas(reg:Register,operation:string):Observable<any>
  {
    console.log("service.SavePractitionerData() hits");
      const headers = { 'content-type': 'application/json'}
      if(operation==="POST")
      {
        return this.httpSVC.post<Register>( this.config.authApiURI+ "/doctor",reg,{headers:headers}).pipe(catchError(this.handleError));
      }
      else
      {
          return this.httpSVC.post<Register>( this.config.authApiURI+ "/doctorupdate",reg).pipe(catchError(this.handleError));
      }
  }
  public GetDoctorJsonDatas(token:string):Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
    };
    console.log(httpOptions);
    return this.httpSVC.get<doctorGrid>(this.config.adminApiUri + "/Doctors",httpOptions).pipe(catchError(this.handleError));
  }
  public GetNurseJsonDatas(token:string):Observable<any>
  {   
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
    };
      return this.httpSVC.get<Nurse>(this.config.adminApiUri + "/Nurses",httpOptions).pipe(catchError(this.handleError));
  }
  public GetPatientJsonDatas(token:string):Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
    };
      return this.httpSVC.get<Patients>(this.config.adminApiUri+ "/Patients",httpOptions).pipe(catchError(this.handleError));
  }

  public GetDoctorJsonDatasByID(DrID: number,token:string):Observable<any>
  {   
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
    };
      return this.httpSVC.get<doctorGrid>(this.config.adminApiUri+ "/Doctor/"+DrID,httpOptions).pipe(catchError(this.handleError));
  }
  public GetNurseJsonDatasByID(NurseID: number,token:string):Observable<any>
  {   
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
    };
      return this.httpSVC.get<Nurse>(this.config.adminApiUri+ "/Nurse/"+NurseID,httpOptions).pipe(catchError(this.handleError));
  }
  public GetPatientJsonDatasByID(PatientID: number,token:string):Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
    };
    return this.httpSVC.get<Patients>(this.config.adminApiUri+ "/Patient/"+PatientID,httpOptions).pipe(catchError(this.handleError));
  }
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

  public GetAppointmentJsonData():Observable<any>
  {
      return this.httpSVC.get<Appointment>(this.config.scheduleManagementAPI+ "/Schedule/getallappointments");
  }
  public SoftDeleteNurseData(p:any):Observable<any>
  {
    return this.httpSVC.post<any>(this.config.authApiURI + "/updatenursestatus?Id="+p.Id+"&IsActive="+p.IsActive,p ).pipe(catchError(this.handleError));      
  }
  public SoftDeleteDoctorData(p:any):Observable<any>
  {
      return this.httpSVC.post<any>(this.config.authApiURI + "/updatedocstatus?Id="+p.Id+"&IsActive="+p.IsActive,p ).pipe(catchError(this.handleError));      
  }
  public SoftDeletePatienData(p:any):Observable<any>
  {
      return this.httpSVC.post<any>(this.config.authApiURI + "/updatepatientstatus?Id="+p.Id+"&IsActive="+p.IsActive,p ).pipe(catchError(this.handleError));      
  }
  public GetUserProfile(token:string):Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
    };
    return this.httpSVC.get<any>(this.config.adminApiUri + "/userInfo",httpOptions).pipe(catchError(this.handleError));      
  }

  public DownloadGridData(entityName:string):Observable<any>
  {
   let header = new HttpHeaders({
     'Content-Type': 'text/csv'
    });
      return this.httpSVC.get(this.config.adminApiUri+"/getexcelreport?entityName="+entityName,{responseType:'blob',headers:header});      
  }
}


 