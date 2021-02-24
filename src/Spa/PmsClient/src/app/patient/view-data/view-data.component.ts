import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import {PatientAllergy} from '../../models/PatientAllergy';
import {PatientDemographicData} from '../../models/PatientDemographicData';
import {PatientService } from '../../Service/patient.service';
import { Patients } from 'src/app/models/Patient';
import {ToasterService} from '../../core/ToasterService';
import { ToasterPosition } from 'src/app/core/ToasterPosition';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit {

  public ob :Observable<PatientAllergy[]>;
  public patientAllergyData;
  public ob1 :Observable<PatientDemographicData[]>;
  public patientDemographicData;
  public ob2 :Observable<Patients[]>;
  public dataSourceAllergyData: PatientAllergy[]= [];
  public demographicData: PatientDemographicData[]= [];

  public isFatal:boolean=false;
  public isUseSameAddress:boolean=false;
  public isPortalAccess:boolean=false;
  // public rbNomineePortalAccess:string="false"; 
  success: boolean;

  userForm: FormGroup = new FormGroup({
    patientfirstname: new FormControl(''),
    patientlastname: new FormControl(''),
    patientdob: new FormControl(''),
    patientcontact: new FormControl(''),
    patientemail: new FormControl(null),
    race: new FormControl('',Validators.required),
    ethnicity: new FormControl('',Validators.required),
    languagesKnown: new FormControl('',Validators.required),
    address: new FormControl(null,Validators.required),
    nomineeFirstName: new FormControl('',Validators.required),
    nomineeLastName : new FormControl('',Validators.required),   
    nomineeEmail : new FormControl('',Validators.required),   
    nomineeRelationship : new FormControl('',Validators.required),   
    nomineeContact : new FormControl('',Validators.required),   
    nomineeAddress : new FormControl('',Validators.required),
    portalaccess : new FormControl(false),
    sameasabove:new FormControl(false)
  });

  displayedColumns = [
    'id',
    'allergy',
    'isfatal'
   ];


  constructor(private patientsvc:PatientService,private toaster:ToasterService) { }

  

  public SavePatientAllergy(allergy:string,event:Event):void{
    debugger;
    console.log('Add allergy done');
    if(allergy != "")
    {
      this.patientAllergyData=new PatientAllergy(0,allergy,this.isFatal,1);     
      this.ob=this.patientsvc.SaveAllergyData(this.patientAllergyData);
      this.ob.subscribe(
        dataa => { 
          console.log(dataa);   
        this.GetPatientAllergyData();    
      },
        (error: any) => console.log("Error in saving patient Allergy data")
      )
        }
        else{
          alert('Allergy type cannot be empty');
        }        
    event.preventDefault();
  }

  public GetPatientAllergyData():void
  {
    this.ob = this.patientsvc.GetPatientAllergyDataByID(1);
    this.ob.subscribe(
      data => { 
        console.log("Output");
        console.log(data);
        this.dataSourceAllergyData = data;
      },
      (error: any) => console.log("Error in saving regiter data")
      );
  }

  
  public SavePatientDemographicData():void{
    debugger;
    let operation:string="";
    console.log('save demographic done');
     this.patientDemographicData=new PatientDemographicData((this.demographicData.length > 0) ? this.demographicData[0].id : 0,this.userForm.value.race,this.userForm.value.ethnicity,
      this.userForm.value.languagesKnown,this.userForm.value.address,this.userForm.value.nomineeFirstName
      ,this.userForm.value.nomineeLastName,this.userForm.value.nomineeEmail,this.userForm.value.nomineeRelationship,
      this.userForm.value.nomineeContact,(this.userForm.value.sameasabove == true)? this.userForm.value.address : this.userForm.value.nomineeAddress,this.userForm.value.portalaccess,1)
     
      if(this.demographicData.length > 0)
      {
          operation="PATCH";
      }
      else
      {
        operation="POST";
      }
      this.ob=this.patientsvc.SaveDemographicData(this.patientDemographicData,operation)
      this.ob.subscribe(
        dataa => { 
          console.log(dataa); 
          //alert('Data Saved')          
          this.success = true;
          this.toaster.success("Success","Data Saved",ToasterPosition.topFull,this.functioncallbackFunction)
          this.ngOnInit();
           },
        (error: any) => {this.toaster.error('Error',error,ToasterPosition.topFull);
        console.log("Error in saving patient Allergy data")}
      )
  }

  loadPatientData()
  {
    this.ob2=this.patientsvc.GetPatientDataByID(1);
    this.ob2.subscribe(
      (data:Patients[])=>{
        if(data.length > 0)
        {
          this.userForm.patchValue({
            "patientfirstname": data[0].firstname,
            "patientlastname": data[0].lastname,
            "patientdob": data[0].dob,
            "patientcontact": data[0].contact,
            "patientemail": data[0].email
          })
        }
      }
    )
  }

  loadDemographicData()
  {
   this.ob1=this.patientsvc.GetPatientDemographicDataByID(1);
   this.ob1.subscribe(
   (dr:PatientDemographicData[])=>{this.demographicData=dr;console.log(this.demographicData);
    if(this.demographicData.length > 0)
    {
   this.userForm.patchValue({
    "race": this.demographicData[0].race,
    "ethnicity": this.demographicData[0].ethnicity,
    "languagesKnown": this.demographicData[0].languagesKnown,
    "address": this.demographicData[0].address,
    "nomineeFirstName": this.demographicData[0].nomineeFirstName,
    "nomineeLastName" : this.demographicData[0].nomineeLastName,   
    "nomineeEmail" : this.demographicData[0].nomineeEmail,   
    "nomineeRelationship" : this.demographicData[0].nomineeRelationship,   
    "nomineeContact" : this.demographicData[0].nomineeContact,   
    "nomineeAddress" : this.demographicData[0].nomineeAddress,
    "portalaccess" : this.demographicData[0].isNeedportalAccess
   })
  }
 },
 (error:any)=>console.log('fails to load doctors data')
 );
  }

  IsFatalCheckEvent(event){
    debugger;    
    this.isFatal=event.target.checked;
    console.log(this.isFatal);
    }
    
    // IsUseSameAddressEvent(event){
    //   debugger;    
    //   this.isUseSameAddress=event.target.checked;
    //   console.log(this.isUseSameAddress);
    //   }

      // IsPortalAccessEvent(event){
      //   debugger;    
      //   this.isPortalAccess=event.target.checked;
      //   console.log(this.isPortalAccess);
      //   }

      functioncallbackFunction(){
        this.success=true;
      }

    ngOnInit(): void {
      this.loadPatientData();
      this.loadDemographicData();
      this.GetPatientAllergyData();
    }

}
