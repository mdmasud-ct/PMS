import { Component, Input, OnInit } from '@angular/core';
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
  public obpv:Observable<PatientVisit[]>;
  public oballergy:Observable<PatientAllergy[]>;
  public obdiagnosis:Observable<PatientDiagnosis[]>;
  public obprocedure:Observable<PatientProcedure[]>;
  public obmedication:Observable<PatientMedication[]>;
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

  @Input()  pId:number;
  @Input()  aId:number;

  public patientvisitdata: PatientVisit[]=[];
  public patientAllergyData: PatientAllergy[]=[];
  public patientDiagnosisData: PatientDiagnosis[]=[];
  public patientProcedureData: PatientProcedure[]=[];
  public patientMedicationData: PatientMedication[]=[];
  
  fg: FormGroup = new FormGroup({
    height: new FormControl('',Validators.required),
    weight: new FormControl('',Validators.required),
    bloodpressuresystolic: new FormControl('',Validators.required),
    bloodpressurediastolic: new FormControl('',Validators.required),
    bodytemperature: new FormControl('',Validators.required),
    respirationrate : new FormControl('',Validators.required),
    ApptID: new FormControl('',Validators.required),
    PtID: new FormControl('',Validators.required)    
  });

  constructor(private practitionersvc: PatientService,private toaster: ToasterService) { }
  AddAllergy() 
  {               
    this.AllergyRows.push( {allergytype: this.allergytype, chkFatal: this.chkFatal==null?'false':'true' } );
    this.patienvisitallergy = new PatientAllergy(this.allergytype,this.chkFatal==null?'false':'true',this.pId.toString());
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
    this.patienvisitdiagnosis = new PatientDiagnosis(this.diagnosistype,this.diagnosisdescription,this.pId.toString(),this.aId.toString());
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
    this.patienvisitprocedure = new PatientProcedure(this.proceduretype,this.proceduredescription,this.pId.toString(),this.aId.toString());
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
    this.patienvisitmedication = new PatientMedication(this.medicationtype,this.medicationdosage,this.medicationdescription,this.pId.toString(),this.aId.toString());
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
    let operation:string="";
    console.log(this.fg.value.height);
    this.patientvisitdoctor=new PatientVisit(
      this.pId.toString(),this.aId.toString(),this.fg.value.height,this.fg.value.weight,
      this.fg.value.bloodpressuresystolic,this.fg.value.bloodpressurediastolic,
      this.fg.value.bodytemperature,this.fg.value.respirationrate);      
      if(this.patientvisitdata.length > 0)
      {          
          operation="PATCH";  
          this.patientvisitdoctor.id=this.patientvisitdata[0].id;        
      }
      else
      {
        operation="POST";
      }
    if(this.fg.invalid==false)
    { 
      this.ob = this.practitionersvc.SavePatientVisitData(this.patientvisitdoctor,operation)

      this.ob.subscribe(      
        data => { 
          console.log(data); 
          if(data !=null)
          {
          this.success = true;
          this.toaster.success("Success","Visit details of PatientID "+data["patientid"]+" updated.",ToasterPosition.topFull,this.functioncallbackFunction)   
          }     
          console.log("Output Is: "+data["height"]); 
          this.msg = data["firstname"]+ ", has Registered Successfully" },
        (error: any) => console.log("Error in saving patientvisitnurse data")
        );
    }
  }
  loadAppointmentData(aId:number)
  {
    console.log('LoadData'+this.aId);
   this.obpv=this.practitionersvc.GetPatientVisitDataByID(this.aId);
   this.obpv.subscribe(
     (pv:PatientVisit[])=>{this.patientvisitdata=pv;
      console.log(this.patientvisitdata)
       console.log(this.patientvisitdata[0])
     this.fg.patchValue({
       "height": this.patientvisitdata[0].height,
       "weight": this.patientvisitdata[0].weight,
       "bloodpressuresystolic": this.patientvisitdata[0].bloodpressuresystolic,
       "bloodpressurediastolic":this.patientvisitdata[0].bloodpressurediastolic,
       "bodytemperature":this.patientvisitdata[0].bodytemperature,
       "respirationrate":this.patientvisitdata[0].respirationrate       
     })
   },
   (error:any)=>console.log('fails to load nurse data')
   );
  }
  loadAllergyData(pId:number)
  {    
   this.oballergy=this.practitionersvc.GetPatientAllergyDataByPatientID(this.pId);
   this.oballergy.subscribe(
     (pv:PatientAllergy[])=>{this.patientAllergyData=pv;      
       console.log(this.patientAllergyData[0])
       for (let i = 0; i < this.patientAllergyData.length; i++) {
        this.AllergyRows.push( {allergytype: this.patientAllergyData[i].allergy, 
          chkFatal: this.patientAllergyData[i].isfatal } );
      }
       
   },
   (error:any)=>console.log('fails to load allergy data')
   );
  }
  loadDiagnosisData(aId:number)
  {   
    
   this.obdiagnosis=this.practitionersvc.GetPatientDiagnosisDataByAppointmentID(this.aId);
   this.obdiagnosis.subscribe(
     (pv:PatientDiagnosis[])=>{this.patientDiagnosisData=pv;      
       console.log(this.patientDiagnosisData[0])
       for (let i = 0; i < this.patientDiagnosisData.length; i++) {
        this.DiagnosisRows.push( {diagnosistype: this.patientDiagnosisData[i].diagnosis, 
          diagnosisdescription: this.patientDiagnosisData[i].diagnosisdescription } );
      }
       
   },
   (error:any)=>console.log('fails to load allergy data')
   );
  }
  loadProcedureData(aId:number)
  {   
    
   this.obprocedure=this.practitionersvc.GetPatientProcedureDataByAppointmentID(this.aId);
   this.obprocedure.subscribe(
     (pv:PatientProcedure[])=>{this.patientProcedureData=pv;      
       console.log(this.patientProcedureData[0])
       for (let i = 0; i < this.patientProcedureData.length; i++) {
        this.ProcedureRows.push( {proceduretype: this.patientProcedureData[i].procedure, 
          proceduredescription: this.patientProcedureData[i].proceduredescription } );
      }
       
   },
   (error:any)=>console.log('fails to load allergy data')
   );
  }
  loadMedicationData(aId:number)
  {   
    
   this.obmedication=this.practitionersvc.GetPatientMedicationDataByAppointmentID(this.aId);
   this.obmedication.subscribe(
     (pv:PatientMedication[])=>{this.patientMedicationData=pv;      
       console.log(this.patientMedicationData[0])
       for (let i = 0; i < this.patientMedicationData.length; i++) {
        this.MedicationRows.push( {medicationtype: this.patientMedicationData[i].medication, 
          medicationdosage: this.patientMedicationData[i].dosage,
        medicationdescription: this.patientMedicationData[i].medicationdescription} );
      }
       
   },
   (error:any)=>console.log('fails to load allergy data')
   );
  }

  ngOnInit(): void {
    debugger;
    this.loadAppointmentData(this.aId);
    this.loadAllergyData(this.pId);
    this.loadDiagnosisData(this.aId);
    this.loadProcedureData(this.aId);
    this.loadMedicationData(this.aId);
    this.fg.patchValue({      
      "ApptID":"A0"+this.aId,
      "PtID":"P0"+this.pId
    })
  }
  functioncallbackFunction(){
    this.success=true;
  }
}
