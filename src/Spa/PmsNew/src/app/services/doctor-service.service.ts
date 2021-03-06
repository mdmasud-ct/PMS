import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Doctors} from '../Models/Doctor'

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {

  constructor(private httpsvc:HttpClient) { }

  public GetAllDoctors():Observable<Doctors[]>
  {
    console.log('service.GetAllDoctors called');
    return this.httpsvc.get<Doctors[]>('http://localhost:3000/Doctor');
  }

  public GetFilteredDoctors(filterStr:string):Observable<Doctors[]>
  {
    console.log('service.GetAllDoctors called');
    return this.httpsvc.get<Doctors[]>('http://localhost:3000/Doctor?'+filterStr);
  }

  public GetDoctorDataById(id:number):Observable<Doctors[]>
  {
    debugger;
    console.log('service.GetAllDoctors called');
    return this.httpsvc.get<Doctors[]>('http://localhost:3000/Doctor?id='+id);    
  }
}
