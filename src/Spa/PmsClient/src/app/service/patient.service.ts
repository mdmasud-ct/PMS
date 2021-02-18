import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patients } from '../Models/Patient';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PatientService 
{

  constructor(private httpSVC:HttpClient) 
  { 
  }

    public SavePatientData(p:Patients):Observable<any>
    {
      console.log("service.SavePatientData() hits");
      console.log(JSON.stringify(p));
      const headers = { 'content-type': 'application/json'}  
      if(p.email != "")
      {
        return this.httpSVC.post<Patients>("http://localhost:3000/Patients", JSON.stringify(p),{'headers':headers});
        // .pipe(map(value => value[0].name +", has Register Successfully"));
      }
    }
}
