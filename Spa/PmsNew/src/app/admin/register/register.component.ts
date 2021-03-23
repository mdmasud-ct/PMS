import { Component,Input, OnInit,Output,EventEmitter } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { FormGroup} from '@angular/forms';
import { FormControl} from '@angular/forms';
import { Validators} from '@angular/forms';
import { Register } from '../../models/registerModel';
import { RegisterService } from '../../services/register.service';
import { DoctorServiceService } from '../../services/doctor-service.service';
import { Doctors } from '../../models/Doctor';
import { Nurse } from '../../Models/nurseModel';
import { Doctor } from '../../models/doctorModel';
import { ToasterPosition } from '../../core/ToasterPosition';
import {ToasterService} from '../../core/ToasterService';
import { Title } from '../../core/dropdownmaster.service';
import { Genders } from '../../core/dropdownmaster.service';
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
//import { isNullOrUndefined } from 'util';
import { AuthService } from '../../core/auth.service';
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[DatePipe]
})

export class RegisterComponent implements OnInit {
  
  public ob :Observable<string>;
  public obnr:Observable<Nurse[]>;
  public obdr:Observable<Doctor[]>;
  public nursedata: Nurse[]=[];
  public doctordata: Doctor[]=[];
  public RegisterUser;
  success: boolean;
  msg:string="";
  fullname:string ="";
  titles:any;
  genders:any;
  entityId:string;
  @Input()  nrId:number;
  @Input()  drId:number;
  @Input()  pRole:string;
  @Input() userrole:string; 
  @Input() abc:string;
  @Input() userData:any;
  res: any;
  message:any;
  UserDataE:any;
  @Output() messageEvent = new EventEmitter<string>();
  @Output("parentFun") parentFun: EventEmitter<any> = new EventEmitter();
  fg: FormGroup = new FormGroup({
    title: new FormControl('',Validators.required),
    firstname: new FormControl('',Validators.required),
    lastname: new FormControl('',Validators.required),
    email: new FormControl(null,[Validators.required,Validators.email]),
    dob: new FormControl('',Validators.required),
    role : new FormControl('',Validators.required),
    contactno : new FormControl('',Validators.required),
    address : new FormControl('',Validators.required),
    speciality : new FormControl(''), 
    gender: new FormControl('',[Validators.required]),
    id:new FormControl('')
  });
  constructor(private registersvc: RegisterService,private toaster:ToasterService,private router:Router, private spinner: NgxSpinnerService,private auth:AuthService,private datepipe:DatePipe) { }
  public SavePractitionerData(): void
  {
      let operation:string = "";
      console.log()
      this.fullname = this.fg.value.firstname +' '+ this.fg.value.lastname;
      this.RegisterUser = new Register(this.fg.value.title,
                              this.fg.value.firstname,
                              this.fg.value.lastname,
                              this.fg.value.email,
                              this.fg.value.dob,
                              this.fg.value.role,
                              this.fullname,
                              this.fg.value.contactno,
                              this.fg.value.address,
                              this.fg.value.speciality,'Active','No',this.fg.value.id,
                              this.fg.value.gender);

      debugger;
      if(this.nursedata.length > 0 || this.UserDataE != undefined)
      {
          operation="PATCH";
          this.RegisterUser.id=this.UserDataE.id;
      }
      else{
        operation="POST";
        this.RegisterUser.id = 0;
      }     

      if(this.fg.invalid==false)
      { 
        this.spinner.show();
        this.ob = this.registersvc.SaveUserRegiterDatas(this.RegisterUser,operation)
        if(operation == "POST")
          operation  = "registered";
        else
          operation  = "updated"
        this.ob.pipe(finalize(() => {
          this.spinner.hide();
        })).subscribe(
          data => { 
            this.success = true;
            this.res = data;
            if(this.res.code=="1"){ 
            this.success=true;
            this.message = this.res.code;
            this.sendMessage();
            this.toaster.success("Success","Saved successfully",ToasterPosition.topFull);
            }
            else{
              this.toaster.error("Error",this.res.response,ToasterPosition.topFull);
            }
          },
          (error: any) => this.toaster.error("Error","Error in saving data: "+error, ToasterPosition.topFull)
          );
    }
}
getToday(): string {
  return new Date().toISOString().split('T')[0];
}
loadNrData(nrId:number)
{
  this.ob=this.registersvc.GetNurseJsonDatasByID(this.nrId,this.auth.authorizationHeaderValue);
  this.ob.pipe(finalize(()=>{
  this.spinner.hide();
})).subscribe(
data => {
  this.UserDataE= data;
  console.log(this.UserDataE)
  this.fg.patchValue({
   "title":      this.UserDataE.title,
   "firstname":  this.UserDataE.firstName,
   "lastname":   this.UserDataE.lastName,
   "email":      this.UserDataE.emailId,
   "contactno":  this.UserDataE.phoneNo,
   "address":    this.UserDataE.address,
   "speciality": this.UserDataE.speciality,
   "dob":        this.datepipe.transform(this.UserDataE.dob,'yyyy-MM-dd') ,
   "gender":     this.UserDataE.gender,
});
  },
  (error:any)=>console.log('fails to load nurse data')
  );
 }
 loadDrData(drId:number)
 {
   this.ob = this.registersvc.GetDoctorJsonDatasByID(drId,this.auth.authorizationHeaderValue)
   this.ob.pipe(finalize(()=>{
       this.spinner.hide();
   })).subscribe(
   data => {
     this.UserDataE= data;
     console.log(this.UserDataE)
     this.fg.patchValue({
      "title":      this.UserDataE.title,
      "firstname":  this.UserDataE.firstName,
      "lastname":   this.UserDataE.lastName,
      "email":      this.UserDataE.emailId,
      "contactno":  this.UserDataE.phoneNo,
      "address":    this.UserDataE.address,
      "speciality": this.UserDataE.speciality,
      "dob":        this.datepipe.transform(this.UserDataE.dob,'yyyy-MM-dd') ,
      "gender":     this.UserDataE.gender,
   });
  },
  (error:any)=>console.log('fails to load nurse data')
  );
 }
  ngOnInit(): void {
    console.log("Boss"+this.userData);
    if(this.drId==undefined && this.nrId==undefined){}
    else if(this.nrId==undefined && this.drId!=undefined)
      this.loadDrData(this.drId);
    else if(this.nrId!=undefined && this.drId==undefined)
      {this.loadNrData(this.nrId);}

      console.log("Role: "+this.userrole);
      let url = this.router.url;
      console.log(url);

      if(url=="/doctor"){
        this.userrole = "Doctor";
        this.fg.patchValue({
          "role":"Doctor"
        });
      }else{
        this.userrole = 'Nurse';
        this.fg.patchValue({
          "role":"Nurse"
        });
      }
      this.titles= Object.entries(Title) ;
      this.genders = Object.entries(Genders);
    }
  functioncallbackFunction(){
    this.success=true;
  }
  sendMessage() {
    this.parentFun.emit();
  }
}
