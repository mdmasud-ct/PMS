import { Component, OnInit,Input } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Doctors } from '../../models/Doctor';
import { DoctorServiceService } from '../../Service/doctor-service.service'
import { ViewChild } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
public ob:Observable<Doctors[]>;
// public doctorsdata: Doctors[]=[];
public doctorsdata: any;
public doctorinfo:Doctors;
public filterStr:string="";
public drIdForAppointment:number;

@ViewChild('cmbcity')
  public cmbcity: any;
@ViewChild('cmbspeciality')
  public cmbspeciality: any;
 public rbGender:string=""; 

  City: string[] = [
    'Mumbai', 'Thane', 'Kalyan', 'Andheri', 'Borivali','Dadar','Sion','Kurla','Ghatkopar','Mulund','Dombivli'
    ,'Airoli','Turbhe','Belapur','Panvel','Bandra','Malad','Virar','Pawai' ];

    speciality: string[] = [
      'Allergist', 'Cardiologist', 'Dentist', 'Dermatologist', 'Gynecologist','Neurologist','Pediatrician','Psychiatrist' ];  

  constructor(private doctorservice:DoctorServiceService,config: NgbModalConfig, 
    private modalService: NgbModal ) {
 //modals used by this component
 config.backdrop = 'static';
 config.keyboard = false;

   }

public GetAllDoctor():void
{
  console.log('ts.GetAllDoctors called');
this.ob=this.doctorservice.GetAllDoctors();
this.ob.subscribe(
  (dr:any)=>{
    this.doctorsdata=dr;
    console.log(this.doctorsdata)
  },
  (error:any)=>console.log('fails to load doctors data')
  );
}

onChange(mrChange: any) {
  this.rbGender=mrChange.value;
}

public GetFilterData():void
{
// console.log(this.cmbcity.value);
// console.log(this.cmbspeciality.value);
// console.log(this.rbGender);
this.filterStr="";
if(typeof this.cmbcity.value!= 'undefined' || this.cmbcity.value)
{
  this.filterStr+=(typeof this.filterStr!='undefined' && this.filterStr)?("&city="+this.cmbcity.value):("city="+this.cmbcity.value);
  //console.log(this.filterStr);
}
if(typeof this.cmbspeciality.value!= 'undefined' || this.cmbspeciality.value)
{
  this.filterStr+=(typeof this.filterStr!='undefined' && this.filterStr)?("&speciality="+this.cmbspeciality.value):("speciality="+this.cmbspeciality.value);
  //console.log(this.filterStr);
}
if(this.rbGender!="")
{
  this.filterStr+=(typeof this.filterStr!='undefined' && this.filterStr)?("&gender="+this.rbGender):("gender="+this.rbGender);
  //console.log(this.filterStr);
}
console.log(this.filterStr);

this.ob=this.doctorservice.GetFilteredDoctors(this.filterStr);
this.ob.subscribe(
  (dr:any)=>{this.doctorsdata=dr;console.log(this.doctorsdata)},
  (error:any)=>console.log('fails to load doctors data')
  );

}

open(content,selectedDrId:number) { // Ng Pop Up Model 
  debugger;
  this.modalService.open(content,{ size: 'xl',centered:true });
  this.drIdForAppointment=selectedDrId;
} 

  ngOnInit(): void {
    this.GetAllDoctor();
  }

}
