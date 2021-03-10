import { Component,Input, OnInit,Output,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
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
import { isNullOrUndefined } from 'util';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
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
  @Input()  nrId:number;
  @Input()  drId:number;
  @Input()  pRole:string;
  @Input() userrole:string; 
  @Input() abc:string;
  @Input() userData:any;
  res: any;
  message:any;
  UserData:any;
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
  constructor(private registersvc: RegisterService,private toaster:ToasterService,private router:Router, private spinner: NgxSpinnerService) { }
  public SavePractitionerData(): void
  {
      let operation:string = "";
      //this.fg.value.role = this.userrole;
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
      if(this.nursedata.length > 0 || this.doctordata.length > 0)
      {
          operation="PATCH";
          if(this.nursedata.length>0)
            this.RegisterUser.id=this.nursedata[0].id;
          else
            this.RegisterUser.id=this.doctordata[0].id;
      }
      else{
        operation="POST";
      }     

      if(this.fg.invalid==false)
      { 
        this.spinner.show();
        this.ob = this.registersvc.SaveUserRegiterDatas(this.RegisterUser,operation)
        if(operation == "POST")
          operation="registered";
        else
          operation="updated"
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
            //this.toaster.success("Success",data["role"]+" "+data["firstname"]+" "+data["lastname"]+" has "+operation+" successfully.",ToasterPosition.topFull,this.functioncallbackFunction) 
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
   console.log('LoadData'+this.nrId);
  this.obnr=this.registersvc.GetNurseJsonDatasByID(this.nrId);
  this.obnr.subscribe(
    (dr:Nurse[])=>{this.nursedata=dr;console.log(this.nursedata)
      console.log(this.nursedata[0])
    this.fg.patchValue({
      "title": this.nursedata[0].title,
      "firstname": this.nursedata[0].firstname,
      "lastname": this.nursedata[0].lastname,
      "email":this.nursedata[0].EmailID,
      "contactno":this.nursedata[0].ContactNo,
      "address":this.nursedata[0].Address,
      "speciality":this.nursedata[0].Specialties,
      "dob":this.nursedata[0].Dob
    })
  },
  (error:any)=>console.log('fails to load nurse data')
  );
 }
 loadDrData(drId:number)
 {
   this.ob = this.registersvc.GetDoctorJsonDatasByID(drId)
   this.ob.pipe(finalize(()=>{
       this.spinner.hide();
   })).subscribe(
   data => {
     this.UserData= data;
     console.log(this.UserData)
     this.fg.patchValue({
      "title":      this.UserData.title,
      "firstname":  this.UserData.firstName,
      "lastname":   this.UserData.lastName,
      "email":      this.UserData.emailId,
      "contactno":  this.UserData.ContactNo,
      "address":    this.UserData.address,
      "speciality": this.UserData.speciality,
      "dob":        this.UserData.Dob,
      "gender":     this.UserData.gender,
       "id":        this.UserData.id 
   });
  //  this.obdr=this.registersvc.GetDoctorJsonDatasByID(this.drId);
  //   this.obdr.subscribe(
  //   (dr:Doctor[])=>{this.doctordata=dr;console.log(this.doctordata)
  //     console.log(this.doctordata[0])
  //   this.fg.patchValue({
  //     "title": this.doctordata[0].title,
  //     "firstname": this.doctordata[0].firstname,
  //     "lastname": this.doctordata[0].lastname,
  //     "email":this.doctordata[0].Email,
  //     "contactno":this.doctordata[0].ContactNo,
  //     "address":this.doctordata[0].Address,
  //     "speciality":this.doctordata[0].Specialties,
  //     "dob":this.doctordata[0].Dob
  //   })
  },
  (error:any)=>console.log('fails to load nurse data')
  );
 }

  ngOnInit(): void {
    console.log(this.userData);
    //console.log(this.nrId+""+this.drId);
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
    //this.messageEvent.emit(this.message);
    this.parentFun.emit();
  }
}
