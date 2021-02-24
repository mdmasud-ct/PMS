import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {PatientDemographicData} from '../Models/PatientDemographicData';
import {PatientAllergy} from '../Models/PatientAllergy';
import { PatientVisit } from '../Models/patientvisit';
import {PatientDiagnosis} from '../Models/patientdiagnosis';
import {PatientProcedure} from '../Models/patientprocedure';
import {PatientMedication} from '../Models/patientmedication';
import {Patients} from '../models/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpsvc:HttpClient) { }

 
  public GetPatientAllergyDataByID(PatientID: number):Observable<any>
  {
      return this.httpsvc.get<PatientAllergy>("http://localhost:3000/Allergy?patientid="+PatientID);
  }

  public GetPatientDemographicDataByID(PatientID: number):Observable<any>
  {
      return this.httpsvc.get<PatientDemographicData>("http://localhost:3000/DemographicData?patientid="+PatientID);
  }

  public GetPatientDataByID(PatientID: number):Observable<any>
  {
      return this.httpsvc.get<Patients>("http://localhost:3000/Patient?id="+PatientID);
  }

  public SaveAllergyData(pal:PatientAllergy):Observable<any>
  {
    console.log("service.SaveAllergyData() hits");
    const headers={'content-type':'application/json'};
    if(pal.Patientid >= 0)
    {
      return this.httpsvc.post<PatientAllergy>("http://localhost:3000/Allergy",JSON.stringify(pal),{'headers':headers});
    }
    return null;
  }

  public SaveDemographicData(pdgd:PatientDemographicData,operation:string):Observable<any>
  {
    debugger;
    console.log("service.SaveAllergyData() hits");
    const headers={'content-type':'application/json'};
    if(pdgd.Patientid >= 0)
    {      
      if(operation==="POST")
      return this.httpsvc.post<PatientDemographicData>("http://localhost:3000/DemographicData",JSON.stringify(pdgd),{'headers':headers});
      else
      return this.httpsvc.patch<PatientDemographicData>("http://localhost:3000/DemographicData/"+pdgd.id,JSON.stringify(pdgd),{'headers':headers});
    }
    return null;
  }
  public SavePatientVisitData(p:PatientVisit):Observable<any>
    {
      console.log("service.SavePatientVisitData() hits");
      console.log(JSON.stringify(p));
      const headers = { 'content-type': 'application/json'}  
        return this.httpsvc.post<PatientVisit>("http://localhost:3000/PatientVisit", JSON.stringify(p),{'headers':headers});      
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
        return this.httpsvc.post<Patients>("http://localhost:3000/Patient", JSON.stringify(p),{'headers':headers});
        // .pipe(map(value => value[0].name +", has Register Successfully"));
      }
    }
}
