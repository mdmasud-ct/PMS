import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import * as data from '../../../assets/jsonData/AllUserdata.json';
import { RegisterService } from '../../services/register.service';
import { MatTableDataSource } from '@angular/material/table';
//import { Patient } from '../../models/patientModel';
import { Patients } from '../../models/Patient';
import { Observable } from 'rxjs';
import {ToasterService} from '../../core/ToasterService';
import { ToasterPosition } from '../../core/ToasterPosition';
import { MatPaginator } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { Patient } from 'app/models/patientModel';
import { isThisTypeNode } from 'typescript';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
  providers:[ToasterService],
})
export class PatientComponent implements OnInit {
  value = '';
  private UserData: any;
  private DeleteUserData: any;
  public ob :Observable<Patients[]>;
  public regiterData;
  msg:any;
  public dataSourcePatient: any;  
  public PatientData: Patients[]= [];
  public dataSourcePatientData: Patients[]= [];
  constructor(config: NgbModalConfig, private modalService: NgbModal
    , private registerService: RegisterService,private toaster:ToasterService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  // MatPaginator Inputs
  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;
  dataSource = new MatTableDataSource<Patients>(this.dataSourcePatientData);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  success: boolean;
  //Ng mat-table columns
  displayedColumns = [
    'PatientID',
    'FullName',
    'DOB',
    'EmailID',
    'ContactNo',
    'Status',
    'Blocked_Unblocked',
    'View_Edit_Delete'
  ];

  public Getjson():void
  {
    this.ob = this.registerService.GetPatientJsonDatas()
    this.ob.subscribe(
      data => { 
        console.log("Output");
        console.log(data);
        this.PatientData = data;
        this.dataSourcePatientData = data;
        this.dataSource = new MatTableDataSource<Patients>(this.dataSourcePatientData);

      },
      (error: any) => console.log("Error in saving regiter data")
      );
      this.dataSourcePatient = new MatTableDataSource(this.PatientData);
      console.log("Data Source: "+this.PatientData);
  }
 // View by Id function
 public GetdataById(id: number)
 {
   this.ob = this.registerService.GetPatientJsonDatasByID(id)
   this.ob.subscribe(
   data => {this.UserData= data; console.log(data)});
   // console.log("USerdata : "+this.UserData.id);
 }
 // Delete by Id function
 public DeletedataById(id: number)
 {
   this.ob = this.registerService.DeletePatientJsonDatasByID(id)
   this.ob.subscribe(
   data => {this.DeleteUserData= data;});
   console.log("DeleteUserData : "+this.DeleteUserData.id);
 }
 applyFilter()
 {
   //debugger;
   console.log(this.value);

   if(this.value!='')
   {
    this.dataSourcePatientData=this.PatientData.filter(p => p.fullName.includes(this.value));
    this.dataSource = new MatTableDataSource<Patients>(this.PatientData.filter(p => p.fullName.toUpperCase().includes(this.value.toUpperCase())));
   }
   else
   {
   this.dataSourcePatientData=this.PatientData;
   this.dataSource = new MatTableDataSource<Patients>(this.PatientData);
   }
   console.log(this.PatientData);    
 }
 // Ng Pop Up Model
 open(content)
 { // Ng Pop Up Model 
   this.modalService.open(content,{ size:'xl',centered:true,scrollable:true});     
 }

 Viewopen(Viewcontent, id?:number)
 { // Ng Pop Up Model       
   this.modalService.open(Viewcontent,{ size:'md',centered:true,scrollable:false});  
   this.GetdataById(id);
  }
 Deleteopen(Deletecontent, id?:number)
 { // Ng Pop Up Model       
   this.modalService.open(Deletecontent,{ size:'md',centered:true,scrollable:true});
   this.GetdataById(id);
   // this.DeletedataById(id);
 }
 Editopen(Editcontent, id?:number)
 {
   this.modalService.open(Editcontent,{ size:'md',centered:true,scrollable:true});  
   // this.GetdataById(id);
 }
 
 SoftDeletePatientData(patientId:Number): void
 {
   //debugger;
   this.modalService.dismissAll();
   console.log("ts.SoftDeletePatientData() hits");
 
  let obj:any={};
  obj.id=patientId,
  obj.status="InActive";
  
   this.ob =this.registerService.SoftDeletePatienData(obj)
 
   this.ob.subscribe(
     dataa => { 
       console.log(dataa);   
       if(dataa !=null)
       {
       this.success = true;
       this.toaster.success("Success","Patient Deleted.",ToasterPosition.topFull,this.functioncallbackFunction)   
       }
      },
     (error: any) => console.log("Error in deleteing patient data")
   );
   }

   functioncallbackFunction(){
    this.success=true;
  }

 ngOnInit(): void
 {
   this.Getjson();
   this.dataSource.paginator = this.paginator;

 }

}
