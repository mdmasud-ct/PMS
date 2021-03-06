import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import * as data from '../../../assets/jsonData/AllUserdata.json';
import { RegisterService } from '../../services/register.service';
import {MatTableDataSource} from '@angular/material/table';
import { Nurse } from '../../models/nurseModel';
import { Observable } from 'rxjs';
import { ToasterPosition } from '../../core/ToasterPosition';
import {ToasterService} from '../../core/ToasterService';
import { ElementRef, HostListener, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
//import { MdbTableDirective, MdbTablePaginationComponent } from 'ng-uikit-pro-standard';
@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css'],
  providers: [NgbModalConfig, NgbModal, ToasterService],
})
export class NurseComponent implements OnInit {

  value = '';
  private UserData: any;
  public ob :Observable<Nurse[]>;
  public regiterData;
  private DeleteUserData: any;
  msg:any;
  public dataSourceNurse: any;  
  public NurseData: Nurse[]= [];
  public dataSourceNurseData: Nurse[]= []; 
  public NrIdToUpdate:number; 
  success: boolean;
  //Ng mat-table columns
  displayedColumns = [
                      'NurseID',
                      'FullName',
                      'Date_of_Birth',
                      'EmailID',
                      'ContactNo',
                      'Address',
                      'Status',
                      'Blocked_Unblocked',
                      'View_Edit_Delete'
                     ];
  
    // Ng Pop Up Model
    constructor(config: NgbModalConfig, private modalService: NgbModal, private registerService: RegisterService,private toaster:ToasterService) {
      //modals used by this component
      config.backdrop = 'static';
      config.keyboard = false;
    }

    public Getjson():void
    {
      this.ob = this.registerService.GetNurseJsonDatas()
      this.ob.subscribe(
        data => { 
          this.NurseData = data;
          this.dataSourceNurseData = data;
        },
        (error: any) => console.log("Error in recieving data")
        );
        this.dataSourceNurse = new MatTableDataSource(this.NurseData);
    }
    public GetdataById(id: number)
    {
      this.ob = this.registerService.GetNurseJsonDatasByID(id)
      this.ob.subscribe(
      data => {this.UserData= data;});
    }
    public DeletedataById(id: number)
    {
    this.ob = this.registerService.DeleteNurseJsonDatasByID(id)
    this.ob.subscribe(
    data => {this.DeleteUserData= data;});
    }
    applyFilter()
    {
    debugger;
    console.log(this.value);

    if(this.value!='')
    {
    this.dataSourceNurseData=this.NurseData.filter(p => p.FullName.includes(this.value));
    }
    else
    {
      this.dataSourceNurseData=this.NurseData;
    }
      console.log(this.NurseData);    
    }
    open(content)
    { 
      this.modalService.open(content,{ size:'xl',centered:true,scrollable:true});     
    }

    Viewopen(Viewcontent, id?:number)
    {
      this.modalService.open(Viewcontent,{ size:'md',centered:true,scrollable:false});  
      this.GetdataById(id);
    }
    Deleteopen(Deletecontent, id?:number)
    { 
      this.modalService.open(Deletecontent,{ size:'md',centered:true,scrollable:true});
      this.GetdataById(id);
    }
    Editopen(Editcontent, selectedNrId?:number)
    {    
      this.modalService.open(Editcontent,{ size:'xl',centered:true,scrollable:true});
      this.NrIdToUpdate=selectedNrId;  
    }
    ngOnInit(): void
    {
      this.Getjson();
    }
    SoftDeleteNurseData(nurseId:Number): void
    {
    debugger;
    this.modalService.dismissAll();
    console.log("ts.SoftDeletePatientData() hits");
    console.log(nurseId);
    let obj:any={};
    obj.id=nurseId,
    obj.Status="InActive";
   
    this.ob =this.registerService.SoftDeleteNurseData(obj)
  
    this.ob.subscribe(
      dataa => { 
        console.log(dataa);   
        if(dataa !=null)
        {
         this.success = true;
         this.toaster.success("Success","Nurse with Id: "+nurseId+" Deleted.",ToasterPosition.topFull,this.functioncallbackFunction)   
        }
       },
      (error: any) => console.log("Error in deleting nurse data")
    );
    }
    functioncallbackFunction(){
      this.success=true;
    }
    receiveMessage($event) {
      this.modalService.dismissAll();
      this.Getjson();
    }

}
