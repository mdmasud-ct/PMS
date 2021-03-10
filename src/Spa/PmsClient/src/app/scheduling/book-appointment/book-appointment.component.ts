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
import { AuthService } from '../../core/auth.service';


@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {

@Input()  drId:number;

public ob:Observable<Doctors[]>;
public doctorsdata: any;
public ob1:Observable<Appointment[]>;
public appointmentData;
public msg:string="";
success: boolean;
public res: any;

userForm: FormGroup = new FormGroup({
  doctorname: new FormControl(''),
  patientname: new FormControl(''),
  appointmentdate: new FormControl('',Validators.required),
  fromtime: new FormControl(null,Validators.required),
  totime: new FormControl('',Validators.required),
  spetiality : new FormControl(''),
  description: new FormControl('')   
});

  constructor(private doctorsvc:DoctorServiceService
    ,private appointmentsvc:AppointmentService,private toaster:ToasterService,private authService: AuthService) {
   }

  submit():void{
console.log('click done');
console.log(this.userForm);
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0];
  }

  SaveAppointmentData():void{
    debugger;
    console.log('click done');
    console.log(this.userForm);
    this.appointmentData=new Appointment(0,this.userForm.value.doctorname,this.userForm.value.patientname
      ,this.userForm.value.appointmentdate,this.userForm.value.fromtime,this.userForm.value.totime
      ,this.drId.toString(),this.doctorsdata["patientid"],false,"",this.userForm.value.description);

      if(this.userForm.invalid==false)
      {
      this.ob1=this.appointmentsvc.SaveAppointment(this.appointmentData);
      this.ob1.subscribe(
        dataa => { 
          this.res = dataa;
          console.log(this.res);
          if(this.res.code=="1"){ 
            this.success=true;
            this.toaster.success("Success",this.res.response,ToasterPosition.topFull);
          }else{
            this.toaster.error("Error",this.res.response,ToasterPosition.topFull);
          }  },
        (error: any) =>  {this.toaster.error('Error',error,ToasterPosition.topFull);
         console.log("Error in saving Appointment data")}
      )
      }
  }

 loadData(drId:number)
 {
  this.ob=this.doctorsvc.GetDoctorDataById(this.drId,this.authService.email);
  this.ob.subscribe(
  (dr:any)=>{this.doctorsdata=dr;console.log(this.doctorsdata)
  this.userForm.patchValue({
    "doctorname": "Dr. " +this.doctorsdata["drname"],
    "patientname": "Patient1",
    "spetiality": this.doctorsdata["speciality"]
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
