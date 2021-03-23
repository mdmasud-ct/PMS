import { Component, OnInit,Output } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { BrowserModule } from '@angular/platform-browser';
//import { Patients } from '../../models/patient';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators, RequiredValidator} from '@angular/forms';
import { MatchPasswd } from '../../CustomValidator/PasswdMatch.validator';
import { Router } from "@angular/router";
import { ToasterService } from '../../core/ToasterService';
import { ToasterPosition } from '../../core/ToasterPosition';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '../../core/dropdownmaster.service';
import { Genders } from '../../core/dropdownmaster.service';
import { finalize } from 'rxjs/operators';
import { Positioning } from '@ng-bootstrap/ng-bootstrap/util/positioning';
import { EventEmitter } from '@angular/core';
import { Patients } from 'app/models/Patient';
@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css'],
  providers: [ToasterService]
})
export class PatientRegisterComponent implements OnInit {

  public ob: Observable<string>;
  
  public patient;
  msg:string="";
  success: boolean;
  genders:any;
  titles:any;
  res: any;
  

  fg: FormGroup = new FormGroup({
    firstname: new FormControl('',Validators.required),
    lastname: new FormControl('',Validators.required),
    dob: new FormControl('',Validators.required),
    contact: new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl('',Validators.required),
    confirmpassword: new FormControl('',[Validators.required, MatchPasswd('password')]),
    title: new FormControl('',[Validators.required]),
    gender: new FormControl('',[Validators.required])
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

this.patient=new Patients(this.fg.value.firstname,this.fg.value.lastname,this.fg.value.dob,this.fg.value.contact
                    ,this.fg.value.email,this.fg.value.password,(this.fg.value.firstname+" "+this.fg.value.lastname),"Active","No",this.fg.value.title,this.fg.value.gender);

console.log(this.patient);

if(this.fg.invalid==false)
{ 
  this.ob = this.patientsvc.SavePatientData(this.patient);
  this.ob.pipe(finalize(() => {
    this.spinner.hide();
  })).subscribe(
    dataa => { 
      this.res = dataa;
      console.log(this.res);
      if(this.res.code=="1"){ 
        this.success=true;
        this.showMessage();
        this.toast.success("Success","User registered successfully",ToasterPosition.topFull);
      }else{
        this.toast.error("Error",this.res.response,ToasterPosition.topFull);
      }
    },
    (error: any) => this.toast.error("Error",error,ToasterPosition.topFull)
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
    this.titles= Object.entries(Title) ;
    this.genders = Object.entries(Genders);
  }
  

}
