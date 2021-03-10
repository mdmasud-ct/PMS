import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { Doctors } from '../../models/Doctor';
import { Appointment } from '../../models/Appointment';
import { throttleTime } from 'rxjs/operators';
import { DoctorServiceService } from '../../Service/doctor-service.service';
import {AppointmentService} from '../../Service/appointment.service';
import {ToasterService} from '../../core/ToasterService';
import { ToasterPosition } from 'src/app/core/ToasterPosition';


@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {

@Input()  drId:number;

public ob:Observable<Doctors[]>;
public doctorsdata: Doctors[]=[];

public ob1:Observable<Appointment[]>;
public appointmentData;
public msg:string="";
success: boolean;

userForm: FormGroup = new FormGroup({
  doctorname: new FormControl(''),
  patientname: new FormControl(''),
  appointmentdate: new FormControl('',Validators.required),
  fromtime: new FormControl(null,Validators.required),
  totime: new FormControl('',Validators.required),
  spetiality : new FormControl('')   
});

  constructor(private doctorsvc:DoctorServiceService
    ,private appointmentsvc:AppointmentService,private toaster:ToasterService) {
   }

  submit():void{
console.log('click done');
console.log(this.userForm);
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0];
  }

  SaveAppointmentData():void{
    console.log('click done');
    console.log(this.userForm);
    this.appointmentData=new Appointment(0,this.userForm.value.doctorname,this.userForm.value.patientname
      ,this.userForm.value.appointmentdate,this.userForm.value.fromtime,this.userForm.value.totime
      ,this.drId.toString(),"1",false,"");

      if(this.userForm.invalid==false)
      {
      this.ob1=this.appointmentsvc.SaveAppointment(this.appointmentData);
      this.ob1.subscribe(
        dataa => { 
          console.log(dataa);    
        // alert('Appointment saved.')      
        this.success = true;
        this.toaster.success("Success","Appointment Saved",ToasterPosition.topFull,this.functioncallbackFunction)   },
        (error: any) =>  {this.toaster.error('Error',error,ToasterPosition.topFull);
         console.log("Error in saving Appointment data")}
      )
      }
  }

 loadData(drId:number)
 {
  this.ob=this.doctorsvc.GetDoctorDataById(this.drId);
  this.ob.subscribe(
  (dr:Doctors[])=>{this.doctorsdata=dr;console.log(this.doctorsdata)
  this.userForm.patchValue({
    "doctorname": "Dr. " +this.doctorsdata[0].firstname + " " + this.doctorsdata[0].lastname,
    "patientname": "Patient1",
    "spetiality": this.doctorsdata[0].speciality
  })
},
(error:any)=>console.log('fails to load doctors data')
);
 }

 functioncallbackFunction(){
  this.success=true;
}

  ngOnInit(): void {
    debugger;
    console.log(this.drId);
    this.loadData(this.drId); 
  }
}
