import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, RequiredValidator} from '@angular/forms';
import { observable, Observable } from 'rxjs';
import { PatientVisit } from '../../Models/patientvisit';
import { PatientService} from '../../services/patient.service';
import { PatientAllergy } from '../../Models/patientallergy1';
import { PatientDiagnosis } from '../../Models/patientdiagnosis';
import { PatientProcedure } from '../../Models/patientprocedure';
import { PatientMedication } from '../../Models/patientmedication';
import {ToasterService} from '../../core/ToasterService';

@Component({
  selector: 'app-show-visit-history',
  templateUrl: './show-visit-history.component.html',
  styleUrls: ['./show-visit-history.component.css']
})
export class ShowVisitHistoryComponent implements OnInit {
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

  @Input()  pId:number;
  @Input()  aId:number;
  @Input()  drName:string;

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
    DrName: new FormControl('',Validators.required)    
  });

  constructor(private practitionersvc: PatientService) { }
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

  DownloadPatientData()
      {
        debugger;

         this.ob = this.practitionersvc.GetExcelReport(this.aId,this.pId);
        this.ob.subscribe(
          (response: any) =>{
            debugger;
              let dataType = response.type;
              let binaryData = [];
              binaryData.push(response);
              let downloadLink = document.createElement('a');
              downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
              let fileName="Report_"+new Date().toLocaleString()+".xlsx";
                  downloadLink.setAttribute('download', fileName);
              document.body.appendChild(downloadLink);
              downloadLink.click();
          }
      )
      }
    
  ngOnInit(): void {  
    debugger;  
    this.loadAppointmentData(this.aId);
    this.loadAllergyData(this.pId);
    this.loadDiagnosisData(this.aId);
    this.loadProcedureData(this.aId);
    this.loadMedicationData(this.aId);
    this.fg.patchValue({      
      "ApptID":this.aId,
      "DrName":"Dr. "+this.drName
    })
  }
  functioncallbackFunction(){
    this.success=true;
  }

}
