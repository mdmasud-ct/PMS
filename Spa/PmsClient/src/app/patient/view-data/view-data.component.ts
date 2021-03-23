import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import {PatientAllergy} from '../../models/PatientAllergy';
import {PatientDemographicData} from '../../models/PatientDemographicData';
import {PatientService } from '../../Service/patient.service';
import { Patients } from 'src/app/models/Patient';
import {ToasterService} from '../../core/ToasterService';
import { ToasterPosition } from 'src/app/core/ToasterPosition';
import { SelectAutocompleteComponent } from 'mat-select-autocomplete';
import { AuthService } from '../../core/auth.service';

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
  public allergyMaster:any;
  public res: any;
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
    // languagesKnown: new FormControl('',Validators.required),
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
 
    //#region Language Known Input
@ViewChild(SelectAutocompleteComponent) multiSelect: SelectAutocompleteComponent;
@ViewChild('autoComplete')  public langSelect:any;
  options = [
    {
      display: 'English',
      value: 'English'
    }, {
      display: 'French',
      value: 'French'
    }, {
      display: 'Hindi',
      value: 'Hindi'
    }, {
      display: 'German',
      value: 'German'
    }, {
      display: 'Spanish',
      value: 'Spanish'
    }, {
      display: 'Marathi',
      value: 'Marathi'
    }
  ];
  selectedOptions = [];

  selected = this.selectedOptions;
  showError = false;
  errorMessage = '';
  //#endregion

  constructor(private patientsvc:PatientService,private toaster:ToasterService,private authService: AuthService) { }

  

  public SavePatientAllergy(allergy:string):void{
    debugger;
    console.log('Add allergy done');
    if(typeof allergy!='undefined')
    {
      this.patientAllergyData=new PatientAllergy(0,allergy,this.isFatal,1);     
      this.ob=this.patientsvc.SaveAllergyData(this.authService.email,this.patientAllergyData);
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
  }

  public GetPatientAllergyData():void
  {
    this.ob = this.patientsvc.GetPatientAllergyDataByID(this.authService.email);
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
     this.patientDemographicData=new PatientDemographicData((this.demographicData["id"] > 0) ? this.demographicData["id"] : 0,this.userForm.value.race,this.userForm.value.ethnicity,
     this.langSelect.displayString,this.userForm.value.address,this.userForm.value.nomineeFirstName
      ,this.userForm.value.nomineeLastName,this.userForm.value.nomineeEmail,this.userForm.value.nomineeRelationship,
      this.userForm.value.nomineeContact,(this.userForm.value.sameasabove == true)? this.userForm.value.address : this.userForm.value.nomineeAddress,this.userForm.value.portalaccess,1)
     
      if(this.demographicData["id"] > 0)
      {
          operation="PATCH";
      }
      else
      {
        operation="POST";
      }
      this.ob=this.patientsvc.SaveDemographicData(this.authService.email,this.patientDemographicData,operation)
      this.ob.subscribe(
        dataa => { 
          this.res = dataa;
          console.log(this.res);
          if(this.res.code=="1"){ 
            this.success=true;
            this.toaster.success("Success",this.res.response,ToasterPosition.topFull);
          }else{
            this.toaster.error("Error",this.res.response,ToasterPosition.topFull);
          }
          this.ngOnInit();
           },
        (error: any) => {this.toaster.error('Error',error,ToasterPosition.topFull);
        console.log("Error in saving patient Allergy data")}
      )
  }

  loadPatientData()
  {
    this.ob2=this.patientsvc.GetPatientDataByID(this.authService.email);
    this.ob2.subscribe(
      (data:any)=>{
        debugger;
        if(data["firstname"] != "")
        {
          this.userForm.patchValue({
            "patientfirstname": data["firstname"],
            "patientlastname": data["lastname"],
            "patientdob": data["dob"],
            "patientcontact": data["contact"],
            "patientemail": data["email"]
          })
        }
      }
    )
  }

  loadDemographicData()
  {
   this.ob1=this.patientsvc.GetPatientDemographicDataByID(this.authService.email);
   this.ob1.subscribe(
   (dr:PatientDemographicData[])=>{this.demographicData=dr;console.log(this.demographicData);
    debugger;
    if(this.demographicData["id"] > 0)
    {
      //Convert Language string into array
      this.selectedOptions=this.demographicData["languagesKnown"].split(',');
      
   this.userForm.patchValue({
    "race": this.demographicData["race"],
    "ethnicity": this.demographicData["ethnicity"],
    // "languagesKnown": this.demographicData[0].languagesKnown,
    "address": this.demographicData["address"],
    "nomineeFirstName": this.demographicData["nomineeFirstName"],
    "nomineeLastName" : this.demographicData["nomineeLastName"],   
    "nomineeEmail" : this.demographicData["nomineeEmail"],   
    "nomineeRelationship" : this.demographicData["nomineeRelationship"],   
    "nomineeContact" : this.demographicData["nomineeContact"],   
    "nomineeAddress" : this.demographicData["nomineeAddress"],
    "portalaccess" : this.demographicData["isNeedportalAccess"]
   })
  }
 },
 (error:any)=>console.log('fails to load doctors data')
 );
  }

  loadAllergyMaster()
  {
    this.ob2=this.patientsvc.GetAllergyMaster();
    this.ob2.subscribe(
      (data:any)=>{
        debugger;
      this.allergyMaster=data;
      }
    )
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

      //#region Language Known Input
      onToggleDropdown() {
        this.multiSelect.toggleDropdown();
      }
    
      getSelectedOptions(selected) {
        this.selected = selected;
      }
    
      onResetSelection() {
        this.selectedOptions = [];
      }
      //#endregion

    ngOnInit(): void {
      this.loadPatientData();
      this.loadDemographicData();
      this.loadAllergyMaster();
      this.GetPatientAllergyData();
    }

}
