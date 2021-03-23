import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, RequiredValidator} from '@angular/forms';
import { observable, Observable } from 'rxjs';
import { PatientVisit } from '../../Models/patientvisit';
import { PatientService} from '../../services/patient.service';
import { PatientAllergy } from '../../Models/patientallergy1';
import { PatientDiagnosis } from '../../Models/patientdiagnosis';
import { PatientProcedure } from '../../Models/patientprocedure';
import { PatientMedication } from '../../Models/patientmedication';
import { NgxSpinnerService } from 'ngx-spinner'
import { ToasterPosition } from '../../../../src/app/core/ToasterPosition';
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
  public obdiagnosismaster:Observable<PatientDiagnosis[]>;
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
  public description: string;
  public AllergyRows: Array<{allergytype: string, chkFatal: boolean}> = [];
  public DiagnosisRows: Array<{diagnosiscode: string, diagnosisdescription: string}> = [];
  public ProcedureRows: Array<{proceduretype: string, proceduredescription: string}> = [];
  public MedicationRows: Array<{medicationtype: string, medicationdescription: string}> = [];
  public diagnosisMaster:any;
  public procedureMaster:any;
  public allergyMaster:any;
  public medicineMaster:any;

  @Input()  pId:number;
  @Input()  aId:number;
  @Output("parentFun") parentFun: EventEmitter<any> = new EventEmitter();

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
    respirationrate : new FormControl('',Validators.required)//,
    // ApptID: new FormControl('',Validators.required),
    // PtID: new FormControl('',Validators.required)    
  });

  constructor(private practitionersvc: PatientService,private toaster: ToasterService) { }
  AddAllergy() 
  {      
    //this.AllergyRows.push( {allergytype: this.allergytype, chkFatal: this.chkFatal==null?'false':'true' } );
    this.patienvisitallergy = new PatientAllergy(parseInt(this.allergytype.toString()),
    this.chkFatal==null?false:true,parseInt(this.pId.toString()));
    this.ob = this.practitionersvc.SavePatientVisitAllergyData(this.patienvisitallergy)
    
    this.ob.subscribe(      
      data => { 
        console.log(data);      
        console.log("Output Is: "+data["allergy"]); 
        this.msg = data["firstname"]+ ", has Registered Successfully"
        this.loadAllergyData(this.pId); },
      (error: any) => console.log("Error in saving patientvisitallergy data")
      );
    this.allergytype = null;
    this.chkFatal = null;
    
  }
  AddDiagnosis()
  {    
    // this.DiagnosisRows.push( {diagnosistype: this.diagnosistype, diagnosisdescription: this.diagnosisdescription} );    
    this.patienvisitdiagnosis = new PatientDiagnosis(parseInt(this.diagnosistype.toString()),
    this.diagnosisdescription,this.pId.toString(),parseInt(this.aId.toString()));
    this.ob = this.practitionersvc.SavePatientVisitDiagnosisData(this.patienvisitdiagnosis)
    
    this.ob.subscribe(      
      data => {         
        this.msg = data["firstname"]+ ", has Registered Successfully" 
        this.loadDiagnosisData(this.aId);
      },
      (error: any) => console.log("Error in saving patientvisitdiagnosis data")
      );  
            
  }
  AddProcedure()
  {
    //this.ProcedureRows.push( {proceduretype: this.proceduretype, proceduredescription: this.proceduredescription} );
    this.patienvisitprocedure = new PatientProcedure(parseInt(this.proceduretype.toString()),
    this.proceduredescription,this.pId.toString(),parseInt(this.aId.toString()));
    this.ob = this.practitionersvc.SavePatientVisitProcedureData(this.patienvisitprocedure)
    
    this.ob.subscribe(      
      data => { 
        console.log(data);      
        console.log("Output Is: "+data["procedure"]); 
        this.msg = data["firstname"]+ ", has Registered Successfully" 
        this.loadProcedureData(this.aId);},
      (error: any) => console.log("Error in saving patientvisitprocedure data")
      );    
    
  }
  AddMedication()
  {
    //this.MedicationRows.push( {medicationtype: this.medicationtype, medicationdosage: this.medicationdosage,medicationdescription: this.medicationdescription} );
    this.patienvisitmedication = new PatientMedication(parseInt(this.medicationtype.toString()),
    this.description,parseInt(this.aId.toString()));
    this.ob = this.practitionersvc.SavePatientVisitMedicationData(this.patienvisitmedication)
    
    this.ob.subscribe(      
      data => { 
        console.log(data);      
        console.log("Output Is: "+data["medication"]); 
        this.msg = data["firstname"]+ ", has Registered Successfully" 
        this.loadMedicationData(this.aId);},
      (error: any) => console.log("Error in saving patientvisitmedication data")
      );    
    
  }
  SavePatientVisitDoctor():void
  {
    let operation:string="";
    console.log(this.fg.value.height);
    this.patientvisitdoctor=new PatientVisit(
      parseInt(this.pId.toString()),parseInt(this.aId.toString()),parseInt(this.fg.value.height),
      parseInt(this.fg.value.weight),parseInt(this.fg.value.bloodpressuresystolic),
      parseInt(this.fg.value.bloodpressurediastolic),parseInt(this.fg.value.bodytemperature)
      ,parseInt(this.fg.value.respirationrate)); 
      debugger;     
      if(this.patientvisitdata["id"] > 0)
      {          
          operation="PATCH";  
          this.patientvisitdoctor.appointmentid=this.patientvisitdata["appointmentId"]; 
          console.log(this.patientvisitdoctor);       
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
          this.sendMessage();
          this.toaster.success("Success",data["response"],ToasterPosition.topFull,this.functioncallbackFunction)   
          }     
          console.log("Output Is: "+data["height"]); 
          this.msg = data["firstname"]+ ", has Registered Successfully" },
        (error: any) => console.log("Error in saving patientvisitnurse data")
        );
    }
  }
  loadAppointmentData(aId:number)
  {    
   this.obpv=this.practitionersvc.GetPatientVisitDataByID(this.aId);
   this.obpv.subscribe(
     (pv:PatientVisit[])=>{this.patientvisitdata=pv;
      console.log(this.patientvisitdata)       
       console.log(this.patientvisitdata["height"])
     this.fg.patchValue({
       "height": this.patientvisitdata["height"],
       "weight": this.patientvisitdata["weight"],
       "bloodpressuresystolic": this.patientvisitdata["bloodPressureSystolic"],
       "bloodpressurediastolic":this.patientvisitdata["bloodPressureDiastolic"],
       "bodytemperature":this.patientvisitdata["bodyTemperature"],
       "respirationrate":this.patientvisitdata["respirationRate"]       
     })
   },
   (error:any)=>console.log('fails to load nurse data')
   );
  }
  loadAllergyData(pId:number)
  {    
  this.AllergyRows = [];
   this.oballergy=this.practitionersvc.GetPatientAllergyDataByPatientID(this.pId);
   this.oballergy.subscribe(
     (pv:PatientAllergy[])=>{this.patientAllergyData=pv;      
       console.log(this.patientAllergyData)
       for (let i = 0; i < this.patientAllergyData.length; i++) {
        this.AllergyRows.push( {allergytype: this.patientAllergyData[i].allergyName, 
          chkFatal: this.patientAllergyData[i].fatalAllergy } );
      }
       
   },
   (error:any)=>console.log('fails to load allergy data')
   );
  }
  loadDiagnosisData(aId:number)
  {      
   this.DiagnosisRows=[];
   this.obdiagnosis=this.practitionersvc.GetPatientDiagnosisDataByAppointmentID(this.aId);
   this.obdiagnosis.subscribe(
     (pv:PatientDiagnosis[])=>{this.patientDiagnosisData=pv;      
       console.log(this.patientDiagnosisData)
       for (let i = 0; i < this.patientDiagnosisData.length; i++) {
        this.DiagnosisRows.push( {diagnosiscode: this.patientDiagnosisData[i].diagnosisCode, 
          diagnosisdescription: this.patientDiagnosisData[i].diagnosisDescription } );
      }
       
   },
   (error:any)=>console.log('fails to load allergy data')
   );
  }
  loadProcedureData(aId:number)
  {   
    this.ProcedureRows=[];
   this.obprocedure=this.practitionersvc.GetPatientProcedureDataByAppointmentID(this.aId);
   this.obprocedure.subscribe(
     (pv:PatientProcedure[])=>{this.patientProcedureData=pv;      
       console.log(this.patientProcedureData[0])
       for (let i = 0; i < this.patientProcedureData.length; i++) {
        this.ProcedureRows.push( {proceduretype: this.patientProcedureData[i].procedureCode, 
          proceduredescription: this.patientProcedureData[i].procedureDescription } );
      }
       
   },
   (error:any)=>console.log('fails to load allergy data')
   );
  }
  loadMedicationData(aId:number)
  {   
    this.MedicationRows=[];
   this.obmedication=this.practitionersvc.GetPatientMedicationDataByAppointmentID(this.aId);
   this.obmedication.subscribe(
     (pv:PatientMedication[])=>{this.patientMedicationData=pv;      
       console.log(this.patientMedicationData[0])
       for (let i = 0; i < this.patientMedicationData.length; i++) {
        this.MedicationRows.push( {medicationtype: this.patientMedicationData[i].medicineStrength,          
        medicationdescription: this.patientMedicationData[i].description} );
      }       
   },
   (error:any)=>console.log('fails to load allergy data')
   );
  }

  ngOnInit(): void {    
    this.loadAppointmentData(this.aId);
    this.loadAllergyData(this.pId);
    this.loadDiagnosisData(this.aId);
    this.loadProcedureData(this.aId);
    this.loadMedicationData(this.aId);
    // this.fg.patchValue({      
    //   "ApptID":"A0"+this.aId,
    //   "PtID":"P0"+this.pId
    // })
    this.loadDiagnosisMaster();
    this.loadProcedureMaster();
    this.loadAllergyMaster();
    this.loadMedicineMaster();
  }
  functioncallbackFunction(){
    this.success=true;
  }
  loadDiagnosisMaster()
  {
    this.obdiagnosismaster=this.practitionersvc.GetDiagnosisMaster();
    this.obdiagnosismaster.subscribe(
      (data:any)=>{        
      this.diagnosisMaster=data;      
      }
    )
  }
  loadProcedureMaster()
  {
    this.obprocedure=this.practitionersvc.GetProcedureMaster();
    this.obprocedure.subscribe(
      (data:any)=>{        
      this.procedureMaster=data;      
      }
    )
  }
  loadAllergyMaster()
  {
    this.oballergy=this.practitionersvc.GetAllergyMasterVisit();
    this.oballergy.subscribe(
      (data:any)=>{        
      this.allergyMaster=data;      
      }      
    )
    console.log(this.allergyMaster);
  }
  loadMedicineMaster()
  {
    this.obmedication=this.practitionersvc.GetMedicineMaster();
    this.obmedication.subscribe(
      (data:any)=>{        
      this.medicineMaster=data;      
      }      
    )
    console.log(this.medicineMaster);
  }
  sendMessage() {
    //this.messageEvent.emit(this.message);
    this.parentFun.emit();
  }
}
