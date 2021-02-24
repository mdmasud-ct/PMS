import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../Service/patient.service';
import { Patients } from '../../Models/Patient';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators, RequiredValidator} from '@angular/forms';
import { MatchPasswd } from '../../CustomValidator/PasswdMatch.validator'
import { Router } from "@angular/router";
import { ToasterService } from '../../core/ToasterService';
import { ToasterPosition } from '../../core/ToasterPosition';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent implements OnInit {

  public ob: Observable<string>;
  // public patient: Patients = {"id": 2,"firstname": "ram","lastname": "sharma","email": "RM@gmail.com",
  //                                 "contact": "1234567898","dob": "1994-05-5","password": "RM1234"};
  public patient;
  msg:string="";
  success: boolean;
  fg: FormGroup = new FormGroup({
    firstname: new FormControl('',Validators.required),
    lastname: new FormControl('',Validators.required),
    dob: new FormControl('',Validators.required),
    contact: new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl('',Validators.required),
    confirmpassword: new FormControl('',[Validators.required, MatchPasswd('password')]),
  });
  constructor(private patientsvc: PatientService,private router: Router,private toast:ToasterService,private spinner:NgxSpinnerService) { }

// SavePatientData(eventsource: any): void
SavePatientData1():void{
  this.fg.reset();
}
SavePatientData(): void
{
  this.spinner.show();
  console.log("ts.SavePatientData() hits");
  console.log(this.fg.value);
  console.log(this.fg.value.firstname);

this.patient=new Patients(this.fg.value.firstname,this.fg.value.lastname,this.fg.value.dob,this.fg.value.contact
                    ,this.fg.value.email,this.fg.value.password,(this.fg.value.firstname+" "+this.fg.value.lastname),"Active","No");

console.log(this.patient);

if(this.fg.invalid==false)
{ 
  this.ob = this.patientsvc.SavePatientData(this.patient)

  this.ob.subscribe(
    dataa => { 
      console.log(dataa);      
      console.log("Output Is: "+dataa["firstname"]); 
      this.success=true;
      this.showMessage();
      //this.router.navigate(['/userlogin']);
    },
    (error: any) => console.log("Error in saving patient data")
  );
    }
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0];
  }
  navigatePage():void{
    this.router.navigate(["/userlogin"]);
  }
  showMessage():void{
    this.spinner.hide();
    this.toast.success("Success","Patient registered successfully",ToasterPosition.topFull,5000);
  }
  
  ngOnInit(): void {
    //this.success=true;
  }

}
