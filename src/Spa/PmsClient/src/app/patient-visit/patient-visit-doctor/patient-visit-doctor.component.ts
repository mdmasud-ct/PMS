import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, RequiredValidator} from '@angular/forms';
import { observable, Observable } from 'rxjs';
import { PatientVisit } from '../../Models/patientvisit';
import { PatientService} from '../../Service/patient.service';
import { PatientAllergy } from '../../Models/patientallergy1';
import { PatientDiagnosis } from '../../Models/patientdiagnosis';
import { PatientProcedure } from '../../Models/patientprocedure';
import { PatientMedication } from '../../Models/patientmedication';
import { NgxSpinnerService } from 'ngx-spinner'
import { ToasterPosition } from 'src/app/core/ToasterPosition';
import {ToasterService} from '../../core/ToasterService';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-patient-visit-doctor',
  templateUrl: './patient-visit-doctor.component.html',
  styleUrls: ['./patient-visit-doctor.component.css']
})
export class PatientVisitDoctorComponent implements OnInit {
  public ob :Observable<string>;
  success: boolean;
  public patientvisitdoctor;  
  msg:string="";
  public patienvisitallergy;
  public patienvisitdiagnosis;
  public patienvisitprocedure;
  public patienvisitmedication;
  public allergytype: string;
  public chkFatal: string;
  public diagnosistype: string;
  public diagnosisdescription: string;
  public proceduretype: string;
  public proceduredescription: string;
  public medicationtype: string;
  public medicationdosage: string;
  public medicationdescription: string;
  public AllergyRows: Array<{allergytype: string, chkFatal: string}> = [];
  public DiagnosisRows: Array<{diagnosistype: string, diagnosisdescription: string}> = [];
  public ProcedureRows: Array<{proceduretype: string, proceduredescription: string}> = [];
  public MedicationRows: Array<{medicationtype: string,medicationdosage: string, medicationdescription: string}> = [];

  fg: FormGroup = new FormGroup({
    height: new FormControl('',Validators.required),
    weight: new FormControl('',Validators.required),
    bloodpressuresystolic: new FormControl('',Validators.required),
    bloodpressurediastolic: new FormControl('',Validators.required),
    bodytemperature: new FormControl('',Validators.required),
    respirationrate : new FormControl('',Validators.required)   
  });

  constructor(private practitionersvc: PatientService,private toaster: ToasterService) { }
  AddAllergy() 
  {               
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
  AddDiagnosis()
  {
    this.DiagnosisRows.push( {diagnosistype: this.diagnosistype, diagnosisdescription: this.diagnosisdescription} );
    this.patienvisitdiagnosis = new PatientDiagnosis(this.diagnosistype,this.diagnosisdescription,'P001');
    this.ob = this.practitionersvc.SavePatientVisitDiagnosisData(this.patienvisitdiagnosis)
    
    this.ob.subscribe(      
      data => { 
        console.log(data);      
        console.log("Output Is: "+data["diagnosis"]); 
        this.msg = data["firstname"]+ ", has Registered Successfully" },
      (error: any) => console.log("Error in saving patientvisitdiagnosis data")
      );
    this.diagnosistype = null;
    this.diagnosisdescription = null;
  }

  AddProcedure()
  {
    this.ProcedureRows.push( {proceduretype: this.proceduretype, proceduredescription: this.proceduredescription} );
    this.patienvisitprocedure = new PatientProcedure(this.proceduretype,this.proceduredescription,'P001');
    this.ob = this.practitionersvc.SavePatientVisitProcedureData(this.patienvisitprocedure)
    
    this.ob.subscribe(      
      data => { 
        console.log(data);      
        console.log("Output Is: "+data["procedure"]); 
        this.msg = data["firstname"]+ ", has Registered Successfully" },
      (error: any) => console.log("Error in saving patientvisitprocedure data")
      );
    this.proceduretype = null;
    this.proceduredescription = null;
  }
  AddMedication()
  {
    this.MedicationRows.push( {medicationtype: this.medicationtype, medicationdosage: this.medicationdosage,medicationdescription: this.medicationdescription} );
    this.patienvisitmedication = new PatientMedication(this.medicationtype,this.medicationdosage,this.medicationdescription,'P001');
    this.ob = this.practitionersvc.SavePatientVisitMedicationData(this.patienvisitmedication)
    
    this.ob.subscribe(      
      data => { 
        console.log(data);      
        console.log("Output Is: "+data["medication"]); 
        this.msg = data["firstname"]+ ", has Registered Successfully" },
      (error: any) => console.log("Error in saving patientvisitmedication data")
      );
    this.medicationtype = null;
    this.medicationdosage = null;
    this.medicationdescription = null;
  }

  SavePatientVisitDoctor():void
  {
    console.log(this.fg.value.height);
    this.patientvisitdoctor=new PatientVisit(
      'P001','A001',this.fg.value.height,this.fg.value.weight,
      this.fg.value.bloodpressuresystolic,this.fg.value.bloodpressurediastolic,this.fg.value.bodytemperature,
      this.fg.value.respirationrate  
    );
    if(this.fg.invalid==false)
    { 
      this.ob = this.practitionersvc.SavePatientVisitData(this.patientvisitdoctor)

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
