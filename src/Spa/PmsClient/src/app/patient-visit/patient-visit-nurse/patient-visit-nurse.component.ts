import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, RequiredValidator} from '@angular/forms';
import { observable, Observable } from 'rxjs';
import { PatientVisit } from '../../Models/patientvisit';
import { PatientService} from '../../Service/patient.service';
import { PatientAllergy } from '../../Models/patientallergy1';
import { ToasterPosition } from 'src/app/core/ToasterPosition';
import { ToasterService } from '../../core/ToasterService';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-patient-visit-nurse',
  templateUrl: './patient-visit-nurse.component.html',
  styleUrls: ['./patient-visit-nurse.component.css']
})
export class PatientVisitNurseComponent implements OnInit {
  public ob :Observable<string>;
  success:boolean;
  public patientvisitnurse;
  public patienvisitallergy;
  msg:string="";
  public allergytype: string;
  public chkFatal: string;
  public AllergyRows: Array<{allergytype: string, chkFatal: string}> = [];

  fg: FormGroup = new FormGroup({
    height: new FormControl('',Validators.required),
    weight: new FormControl('',Validators.required),
    bloodpressuresystolic: new FormControl('',Validators.required),
    bloodpressurediastolic: new FormControl('',Validators.required),
    bodytemperature: new FormControl('',Validators.required),
    respirationrate : new FormControl('',Validators.required)   
  });
  constructor(private practitionersvc: PatientService,private toaster: ToasterService,private spinner:NgxSpinnerService ) { }

  AddAllergy() {           
    
    this.AllergyRows.push( {allergytype: this.allergytype, chkFatal: this.chkFatal==null?'false':'true' } );
    this.patienvisitallergy = new PatientAllergy(this.allergytype,this.chkFatal==null?'false':'true','P001');
    this.ob = this.practitionersvc.SavePatientVisitAllergyData(this.patienvisitallergy)
    
    this.ob.subscribe(      
      data => { 
        console.log(data);      
        console.log("Output Is: "+data["allergy"]); 
        this.msg = data["firstname"]+ ", has Registered Successfully" },
      (error: any) => console.log("Error in saving patientvisitallergy data")
      );

    this.allergytype = null;
    this.chkFatal = null;
  }

  SavePatientVisitNurse():void
  {
    console.log(this.fg.value.height);
    this.patientvisitnurse=new PatientVisit(
      'P001','A001',this.fg.value.height,this.fg.value.weight,
      this.fg.value.bloodpressuresystolic,this.fg.value.bloodpressurediastolic,this.fg.value.bodytemperature,
      this.fg.value.respirationrate  
    );
    if(this.fg.invalid==false)
    { 
      this.ob = this.practitionersvc.SavePatientVisitData(this.patientvisitnurse)

      this.ob.subscribe(      
        data => { 
          console.log(data); 
          if(data !=null)
          {
          this.success = true;
          this.toaster.success("Success","Visit details of Patient P001 updated.",ToasterPosition.topFull,this.functioncallbackFunction)   
          }     
          console.log("Output Is: "+data["height"]); 
          this.msg = data["firstname"]+ ", has Registered Successfully" },
        (error: any) => console.log("Error in saving patientvisitnurse data")
        );
    }
  }
  ngOnInit(): void {
  }
  functioncallbackFunction(){
    this.success=true;
  }

}
