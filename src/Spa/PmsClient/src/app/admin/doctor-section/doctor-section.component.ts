import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as data from '../../../assets/jsonData/AllUserdata.json';
import { RegisterService } from '../../service/register.service';
import {MatTableDataSource} from '@angular/material/table';
import { Doctor } from '../../models/doctorModel';
import { Observable } from 'rxjs';
import { NgModel } from '@angular/forms';
import { ToasterPosition } from 'src/app/core/ToasterPosition';
import {ToasterService} from '../../core/ToasterService';

@Component({
  selector: 'app-doctor-section',
  templateUrl: './doctor-section.component.html',
  styleUrls: ['./doctor-section.component.css'],
  providers: [NgbModalConfig, NgbModal]
})

export class DoctorSectionComponent implements OnInit {
  value = '';
  // closeResult = '';
  private UserData: any;
  private DeleteUserData: any;
  public ob :Observable<Doctor[]>;
  public regiterData;
  msg:any;
  public dataSourceDoctor: any;  
  public DoctorData: Doctor[]= [];
  public dataSourceDoctorData: Doctor[]= [];
  public DrIdToUpdate:number; 
  success: boolean;
  displayedColumns = [
                      'DrID',
                      'FullName',
                      'Date_of_Birth',
                      'EmailID',
                      'ContactNo',
                      'Address',
                      'Specialties',
                      'Status',
                      'Blocked_Unblocked',
                      'View_Edit_Delete'
                     ]; 
  // Ng Pop Up Model
  constructor(config: NgbModalConfig, private modalService: NgbModal, private registerService: RegisterService,private toaster:ToasterService)
  {
    //modals used by this component
    config.backdrop = 'static';
    config.keyboard = false;
  }
 // Get all details function
 public Getjson(id?:number):void
 {     
     this.ob = this.registerService.GetDoctorJsonDatas()
     this.ob.subscribe(
     data => { 
     console.log("Output");
     console.log(data);
     this.DoctorData = data;
     this.dataSourceDoctorData = data;
     },
     (error: any) => console.log("Error in saving regiter data")
     );
     this.dataSourceDoctor = new MatTableDataSource(this.DoctorData);
     console.log("Data Source: "+this.DoctorData);      
 }
  // View by Id function
  public GetdataById(id: number)
  {
    this.ob = this.registerService.GetDoctorJsonDatasByID(id)
    this.ob.subscribe(
    data => {this.UserData= data;});
    // console.log("USerdata : "+this.UserData.id);
  }
  // Delete by Id function
  public DeletedataById(id: number)
  {
    this.ob = this.registerService.DeleteDoctorJsonDatasByID(id)
    this.ob.subscribe(
    data => {this.DeleteUserData= data;});
    console.log("DeleteUserData : "+this.DeleteUserData.id);
  }
  applyFilter()
  {
    debugger;
    console.log(this.value);

    if(this.value!='')
    {
    this.dataSourceDoctorData=this.DoctorData.filter(p => p.FullName.includes(this.value));
    }
    else
    {
    this.dataSourceDoctorData=this.DoctorData;
    }
    console.log(this.DoctorData);    
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
  Editopen(Editcontent, selectedDrId?:number)
  {
    console.log(selectedDrId);
    this.modalService.open(Editcontent,{ size:'xl',centered:true,scrollable:true});  
    this.DrIdToUpdate=selectedDrId;  
    // this.GetdataById(id);
  }
  // getToday(): string
  // {
  //    return new Date().toISOString().split('T')[0];
  // }
  ngOnInit(): void
  {
    this.Getjson();
  }
  SoftDeleteDoctorData(doctorId:Number): void
  {
    debugger;
    this.modalService.dismissAll();
    console.log("ts.SoftDeleteDoctorData() hits");    
   let obj:any={};
   obj.id=doctorId,
   obj.Status="InActive";
   
    this.ob =this.registerService.SoftDeleteDoctorData(obj)
  
    this.ob.subscribe(
      dataa => { 
        console.log(dataa);   
        if(data !=null)
        {
         this.success = true;
         this.toaster.success("Success","Doctor with Id: "+doctorId+" Deleted.",ToasterPosition.topFull,this.functioncallbackFunction)   
        }
       },
      (error: any) => console.log("Error in deleting doctor data")
    );
    }
    functioncallbackFunction(){
      this.success=true;
    }

}