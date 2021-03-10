import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, observable, pipe} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {PatientDemographicData} from '../Models/PatientDemographicData';
import {PatientAllergy} from '../Models/PatientAllergy';
import { PatientVisit } from '../Models/patientvisit';
import {PatientDiagnosis} from '../Models/patientdiagnosis';
import {PatientProcedure} from '../Models/patientprocedure';
import {PatientMedication} from '../Models/patientmedication';
import {Patients} from '../models/Patient';
import { ConfigService } from '../core/config.service';
import { BaseService } from '../core/base.service';
@Injectable({
  providedIn: 'root'
})
export class PatientService extends BaseService{

  constructor(private httpsvc:HttpClient, private config:ConfigService) {
    super();
   }

 
  public GetPatientAllergyDataByID(userName: string):Observable<any>
  {
      return this.httpsvc.get<PatientAllergy>(this.config.patientManagementAPI+"/Patient/getallergy?userName="+userName);
  }

  // public GetPatientDemographicDataByID(PatientID: number):Observable<any>
  // {
  //     return this.httpsvc.get<PatientDemographicData>("http://localhost:3000/DemographicData?patientid="+PatientID);
  // }
  public GetPatientDemographicDataByID(userName: string):Observable<any>
  {
    debugger;
    const headers={'Access-Control-Allow-Origin':'http://localhost:54877',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS'};
       return this.httpsvc.get<PatientDemographicData>(this.config.patientManagementAPI+"/Patient/getdemographic?userName="+userName);
      // return this.httpsvc.get<PatientDemographicData>("https://localhost:44326/api/department");
  }


  public GetPatientDataByID(userName: string):Observable<any>
  {
      return this.httpsvc.get<any>(this.config.patientManagementAPI+"/Patient/getpatient?userName="+userName);
  }

  public GetAllergyMaster():Observable<any>
  {
      return this.httpsvc.get<any>(this.config.patientManagementAPI+"/Patient/getallergydata");
  }

  public SaveAllergyData(userName:string,pal:PatientAllergy):Observable<any>
  {
    console.log("service.SaveAllergyData() hits");
    //  const headers={'content-type':'application/json'};
    let header = new HttpHeaders({
      'Content-Type': 'application/json'
     });
    if(userName != "")
    {
      return this.httpsvc.post<PatientAllergy>(this.config.patientManagementAPI+"/Patient/addallergy?userName="+userName,JSON.stringify(pal),{headers:header}).pipe(catchError(this.handleError));
    }
  }

  public SaveDemographicData(userName:string,pdgd:PatientDemographicData,operation:string):Observable<any>
  {
    debugger;
    console.log("service.SaveAllergyData() hits");
    let header = new HttpHeaders({
      'Content-Type': 'application/json'
     });
    if(pdgd.patientid >= 0)
    {      
      if(operation==="POST")
      return this.httpsvc.post<PatientDemographicData>(this.config.patientManagementAPI+"/Patient/adddemographic?userName="+userName,JSON.stringify(pdgd),{'headers':header});
      else
      return this.httpsvc.patch<PatientDemographicData>(this.config.patientManagementAPI+"/Patient/updatedemographic?userName="+userName,JSON.stringify(pdgd),{'headers':header});
    }
  }
  public SavePatientVisitData(p:PatientVisit,operation:string):Observable<any>
    {
      console.log("service.SavePatientVisitData() hits");
      console.log(JSON.stringify(p));
      const headers = { 'content-type': 'application/json'}  
      if(operation==="POST")
      {
        return this.httpsvc.post<PatientVisit>("http://localhost:3000/PatientVisit", JSON.stringify(p),{'headers':headers});      
      }
      else
      {
        debugger;
        return this.httpsvc.patch<PatientVisit>("http://localhost:3000/PatientVisit/"+p.id, JSON.stringify(p),{'headers':headers});      
      }        
    }
    public SavePatientVisitAllergyData(p:PatientAllergy):Observable<any>
    {
      console.log("service.SavePatientVisitNurseData() hits");
      console.log(JSON.stringify(p));
      const headers = { 'content-type': 'application/json'}  
        return this.httpsvc.post<PatientAllergy>("http://localhost:3000/Allergy", JSON.stringify(p),{'headers':headers});      
    }
    public SavePatientVisitDiagnosisData(p:PatientDiagnosis):Observable<any>
    {
      console.log("service.SavePatientVisitNurseData() hits");
      console.log(JSON.stringify(p));
      const headers = { 'content-type': 'application/json'}  
        return this.httpsvc.post<PatientDiagnosis>("http://localhost:3000/Diagnosis", JSON.stringify(p),{'headers':headers});      
    }
    public SavePatientVisitProcedureData(p:PatientProcedure):Observable<any>
    {
      console.log("service.SavePatientVisitNurseData() hits");
      console.log(JSON.stringify(p));
      const headers = { 'content-type': 'application/json'}  
        return this.httpsvc.post<PatientProcedure>("http://localhost:3000/Procedure", JSON.stringify(p),{'headers':headers});      
    }
    public SavePatientVisitMedicationData(p:PatientMedication):Observable<any>
    {
      console.log("service.SavePatientVisitNurseData() hits");
      console.log(JSON.stringify(p));
      const headers = { 'content-type': 'application/json'}  
        return this.httpsvc.post<PatientMedication>("http://localhost:3000/Medication", JSON.stringify(p),{'headers':headers});      
    }
    public SavePatientData(p:Patients):Observable<any>
    {
      console.log("service.SavePatientData() hits");
      console.log(JSON.stringify(p));
      const headers = { 'content-type': 'application/json'}  
      if(p.email != "")
      {
        //return this.httpsvc.post<Patients>("http://localhost:3000/Patient", JSON.stringify(p),{'headers':headers});
        return this.httpsvc.post<Patients>(this.config.authApiURI+"/patient",p).pipe(catchError(this.handleError));
      }
    }
    public GetPatientVisitDataByID(aID: number):Observable<any>
    {           
        return this.httpsvc.get<PatientVisit>("http://localhost:3000/PatientVisit?appointmentid="+aID);
    }
    public GetPatientAllergyDataByPatientID(pID: number):Observable<any>
    {           
        return this.httpsvc.get<PatientAllergy>("http://localhost:3000/Allergy?patientid="+pID);
    }
    public GetPatientDiagnosisDataByAppointmentID(aID: number):Observable<any>
    {           
        return this.httpsvc.get<PatientDiagnosis>("http://localhost:3000/Diagnosis?appointmentid="+aID);
    }
    public GetPatientProcedureDataByAppointmentID(aID: number):Observable<any>
    {           
        return this.httpsvc.get<PatientProcedure>("http://localhost:3000/Procedure?appointmentid="+aID);
    }
    public GetPatientMedicationDataByAppointmentID(aID: number):Observable<any>
    {           
        return this.httpsvc.get<PatientMedication>("http://localhost:3000/Medication?appointmentid="+aID);
    }    
}
