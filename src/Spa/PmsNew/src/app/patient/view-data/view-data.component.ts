import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import {PatientService } from '../../services/patient.service';
import { Patients } from '../../models/patient';
import {ToasterService} from '../../core/ToasterService';
import { ToasterPosition } from '../../core/ToasterPosition';
import { SelectAutocompleteComponent } from 'mat-select-autocomplete';
import { AuthService } from '../../core/auth.service';
import { PatientAllergy } from 'app/Models/PatientAllergy';
import { PatientDemographicData } from 'app/Models/PatientDemographicData';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css'],
  providers:[DatePipe]
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
    // race: new FormControl('',Validators.required),
    // ethnicity: new FormControl('',Validators.required),
    // languagesKnown: new FormControl('',Validators.required),
    address: new FormControl(null),
    nomineeFirstName: new FormControl(''),
    nomineeLastName : new FormControl(''),   
    nomineeEmail : new FormControl('',Validators.email),   
    nomineeRelationship : new FormControl(''),   
    nomineeContact : new FormControl('',Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")),   
    nomineeAddress : new FormControl(''),
    portalaccess : new FormControl(false),
    sameasabove:new FormControl(false)
  });

  Race: string[] = [
    'White', 'Black', 'American Indian', 'Asian', 'Native Hawaiian'];

    Ethnicity: string[] = [
      "German", "Italian","French", "Irish", "English", "African", "Jamaican","Nigerian","Chinese","Korean","Japanese","Indian","Samoan","Chamorro" ];  

      @ViewChild('cmbrace')
      public cmbrace: any;
      public selectedRace:any;

      @ViewChild('cmbethnicity')
      public cmbethnicity: any;
      public selectedEthnicity:any;

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

  constructor(private patientsvc:PatientService,private toaster:ToasterService,private authService: AuthService
    ,private datePipe:DatePipe) { }

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
     this.patientDemographicData=new PatientDemographicData((this.demographicData["id"] > 0) ? this.demographicData["id"] : 0,this.cmbrace.value,this.cmbethnicity.value,
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
        (error: any) => {
          this.toaster.error('Error',error,ToasterPosition.topFull);
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
            "patientdob": this.datePipe.transform(data["dob"],"MMMM d, y"),
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
      this.selectedRace=this.demographicData["race"];
      this.selectedEthnicity=this.demographicData["ethnicity"];
      
   this.userForm.patchValue({
    // "race": this.demographicData["race"],
    // "ethnicity": this.demographicData["ethnicity"],
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

      // DownloadPatientData()
      // {
      //   debugger;
      //   // this.ob = this.patientsvc.GetPatientAllergyDataByID(this.authService.email);
      //   // this.ob.subscribe(
      //   //   data => { 
      //   //     let fileName="Report_"+new Date().toLocaleString();
      //   //     this.downloadFile(data, fileName);
      //   //   },
      //   //   (error: any) => console.log("Error in fetching data")
      //   //   );



      //    this.ob = this.patientsvc.GetCSVFile(this.authService.email);
      //   this.ob.subscribe(
      //     (response: any) =>{
      //       debugger;
      //         let dataType = response.type;
      //         let binaryData = [];
      //         binaryData.push(response);
      //         let downloadLink = document.createElement('a');
      //         downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
      //         let fileName="Report_"+new Date().toLocaleString()+".csv";
      //             downloadLink.setAttribute('download', fileName);
      //         document.body.appendChild(downloadLink);
      //         downloadLink.click();
      //     }
      // )
      // }

    //   downLoadFile(data: any, type: string) {
    //     debugger;
    //     let blob = new Blob([data], { type: type});
    //     let url = window.URL.createObjectURL(blob);
    //     let pwa = window.open(url);
    //     if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
    //         alert( 'Please disable your Pop-up blocker and try again.');
    //     }
    // }

  //   downloadFile(data, filename='data') {
  //     debugger;
  //     let csvData = this.ConvertToCSV(data, ['id','allergy', 'isfatal', 'patientid']);
  //     console.log(csvData)
  //     let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
  //     let dwldLink = document.createElement("a");
  //     let url = URL.createObjectURL(blob);
  //     let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
  //     if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
  //         dwldLink.setAttribute("target", "_blank");
  //     }
  //     dwldLink.setAttribute("href", url);
  //     dwldLink.setAttribute("download", filename + ".csv");
  //     dwldLink.style.visibility = "hidden";
  //     document.body.appendChild(dwldLink);
  //     dwldLink.click();
  //     document.body.removeChild(dwldLink);
  // }

  // ConvertToCSV(objArray, headerList) {
  //      let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
  //      let str = '';
  //      let row = 'S.No,';

  //      for (let index in headerList) {
  //          row += headerList[index] + ',';
  //      }
  //      row = row.slice(0, -1);
  //      str += row + '\r\n';
  //      for (let i = 0; i < array.length; i++) {
  //          let line = (i+1)+'';
  //          for (let index in headerList) {
  //             let head = headerList[index];

  //              line += ',' + array[i][head];
  //          }
  //          str += line + '\r\n';
  //      }
  //      return str;
  //  }

    ngOnInit(): void {
      this.loadPatientData();
      this.loadDemographicData();
      this.loadAllergyMaster();
      this.GetPatientAllergyData();
    }

}
