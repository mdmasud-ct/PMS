import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
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
import { Patient } from 'app/models/patientModel';
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

   public GetExcelReport(aID: number,pID: number):Observable<any>
   {
    let header = new HttpHeaders({
      'Content-Type': 'text/csv'
     });
       return this.httpsvc.get(this.config.patientVisitManagementAPI+"/patientvisit/getexcelreport?appointmentId="+aID+"&patientId="+pID,{responseType:'blob',headers:header});      
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
     let header = new HttpHeaders({
       'Content-Type': 'application/json'
      });
     if(operation==="POST")
     {
       return this.httpsvc.post<PatientVisit>(this.config.patientVisitManagementAPI+"/patientvisit/addvitalsigns", JSON.stringify(p),{'headers':header});      
     }
     else
     {
       return this.httpsvc.post<PatientVisit>(this.config.patientVisitManagementAPI+"/patientvisit/updatevitalsigns", JSON.stringify(p),{'headers':header});      
     }
   } 
   public SavePatientVisitAllergyData(p:PatientAllergy):Observable<any>
   {
     console.log("service.SavePatientVisitNurseData() hits");
     console.log(JSON.stringify(p));
     const headers = { 'content-type': 'application/json'}  
       return this.httpsvc.post<PatientAllergy>(this.config.patientVisitManagementAPI+"/patientvisit/addallergy", JSON.stringify(p),{'headers':headers});      
   }
   public SavePatientVisitDiagnosisData(p:PatientDiagnosis):Observable<any>
   {
     console.log("service.SavePatientVisitNurseData() hits");
     console.log(JSON.stringify(p));
     const headers = { 'content-type': 'application/json'}  
       return this.httpsvc.post<PatientDiagnosis>(this.config.patientVisitManagementAPI+"/patientvisit/adddiagnosis", JSON.stringify(p),{'headers':headers});      
   }
   public SavePatientVisitProcedureData(p:PatientProcedure):Observable<any>
   {
     console.log("service.SavePatientVisitNurseData() hits");
     console.log(JSON.stringify(p));
     const headers = { 'content-type': 'application/json'}  
       return this.httpsvc.post<PatientProcedure>(this.config.patientVisitManagementAPI+"/patientvisit/addprocedure", JSON.stringify(p),{'headers':headers});      
   }
   public SavePatientVisitMedicationData(p:PatientMedication):Observable<any>
   {
     console.log("service.SavePatientVisitNurseData() hits");
     console.log(JSON.stringify(p));
     const headers = { 'content-type': 'application/json'}  
       return this.httpsvc.post<PatientMedication>(this.config.patientVisitManagementAPI+"/patientvisit/addmedication", JSON.stringify(p),{'headers':headers});      
   }
     public SavePatientData(p:Patients):Observable<any>
       {
       console.log("service.SavePatientData() hits");
       const headers = { 'content-type': 'application/json'};
       return this.httpsvc.post<Patients>(this.config.authApiURI+"/patient",p).pipe(catchError(this.handleError));
       
     }
     public GetPatientVisitDataByID(aID: number):Observable<any>
    {           
        return this.httpsvc.get<PatientVisit>(this.config.patientVisitManagementAPI+"/patientvisit/getvitalsignsdata?appointmentid="+aID);
    }
    public GetPatientAllergyDataByPatientID(pID: number):Observable<any>
    {           
        return this.httpsvc.get<PatientAllergy>(this.config.patientVisitManagementAPI+"/patientvisit/getallergy?patientid="+pID);
    }
    public GetPatientDiagnosisDataByAppointmentID(aID: number):Observable<any>
    {           
        return this.httpsvc.get<PatientDiagnosis>(this.config.patientVisitManagementAPI+"/patientvisit/getdiagnosis?appointmentid="+aID);
    }
    public GetPatientProcedureDataByAppointmentID(aID: number):Observable<any>
    {           
        return this.httpsvc.get<PatientProcedure>(this.config.patientVisitManagementAPI+"/patientvisit/getprocedure?appointmentid="+aID);
    }
    public GetPatientMedicationDataByAppointmentID(aID: number):Observable<any>
    {           
        return this.httpsvc.get<PatientMedication>(this.config.patientVisitManagementAPI+"/patientvisit/getmedication?appointmentid="+aID);
    }
    public GetDiagnosisMaster():Observable<any>
    {
        return this.httpsvc.get<any>(this.config.patientVisitManagementAPI+"/patientvisit/getdiagnosismasterdata");
    }    
    public GetProcedureMaster():Observable<any>
    {
        return this.httpsvc.get<any>(this.config.patientVisitManagementAPI+"/patientvisit/getproceduremasterdata");
    }  
    public GetAllergyMasterVisit():Observable<any>
    {
        return this.httpsvc.get<any>(this.config.patientVisitManagementAPI+"/patientvisit/getallergymasterdata");
    }
    public GetMedicineMaster():Observable<any>
    {
        return this.httpsvc.get<any>(this.config.patientVisitManagementAPI+"/patientvisit/getmedicinemasterdata");
    }
}
