import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, Injectable,AfterViewInit, Renderer2, ViewChild} from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import * as data from '../../../assets/jsonData/AllUserdata.json';
import { RegisterService } from '../../services/register.service';
import { MatTableDataSource } from '@angular/material/table';
import { Doctor } from '../../models/doctorModel';
import { Observable, Subject } from 'rxjs';
import { ToasterPosition } from '../../core/ToasterPosition';
import { ToasterService } from '../../core/ToasterService';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgModel } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';
import { finalize } from 'rxjs/operators';
import { ConfigService } from '../../core/config.service';
import { HttpClient } from '@angular/common/http';
import { SelectorMatcher } from '@angular/compiler';
import { data } from 'jquery';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { doctorGrid } from 'app/models/doctorGrid';
class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
interface doctorGridM{
  doctorDisplayId: string;
  isActive: boolean;
  firstName: string;
  lastName: string;
  emailId: string;
  Name: string;
  Dob:string;
  age:number;
  gender:string;
}
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
  providers: [NgbModalConfig, NgbModal,ToasterService]
})
export class DoctorComponent implements OnInit {

  value = '';
  private UserData: doctorGrid;
  private DeleteUserData: any;
  public ob :Observable<doctorGrid[]>;
  
  public regiterData;
  msg:any;
  public dataSourceDoctor: any;  
  public DoctorData: Doctor[]= [];
  public dataSourceDoctorData: Doctor[]= [];
  public DrIdToUpdate:number; 
  success: boolean;
  message:string;
  doctors:any;
  gridData:doctorGrid[]=[];
  datasource: MatTableDataSource<doctorGrid>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  $: any;
  ngAfterViewInit(): void {
    
    // this.renderer.listen('document', 'click', (event) => {
    //   if (event.target.hasAttribute("view-person-id")) {
    //     this.router.navigate(["/person/" + event.target.getAttribute("view-person-id")]);
    //   }
    // });
  }
  receiveMessage($event) {
    this.spinner.show();
    this.message = $event;
    this.modalService.dismissAll();
    this.Getjson();
  }
  displayedColumns = [
                      'Id',
                      'FullName',
                      'dob',
                      'EmailID',
                      'Age',
                      'Gender',
                      'Status',
                      'View_Edit_Delete'
                      //'Blocked_Unblocked',
                      //'Specialties',
                     ]; 
  constructor(config: NgbModalConfig, private modalService: NgbModal, private registerService: RegisterService,private toaster:ToasterService,private router: Router,private spinner:NgxSpinnerService,private renderer: Renderer2,private conf:ConfigService,private http:HttpClient)
  {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  
  public Getjson(id?:number):void
 { 
    this.spinner.show();    
     this.ob = this.registerService.GetDoctorJsonDatas()
     this.ob.pipe(finalize(()=>this.spinner.hide())).subscribe(
     dataa => { 
       
       //this.gridData=dataa;
      this.datasource =new MatTableDataSource<doctorGrid>(dataa);
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sort;
      //this.DoctorData = data;
     //this.dataSourceDoctorData = data;
     //console.log(this.DoctorData);
     
     },
     (error: any) => console.log("Error in saving regiter data")
     );
     //this.dataSourceDoctor = new MatTableDataSource(this.DoctorData);
     //console.log("Data Source: "+this.DoctorData);      
 }
  public GetdataById(id: number)
  {
    this.spinner.show();
    this.registerService.GetDoctorJsonDatasByID(id).pipe(finalize(()=>{
        this.spinner.hide();
    })).subscribe(
    data => {
      this.UserData= data;
    });
  }
  public DeletedataById(id: number)
  {
    this.ob = this.registerService.DeleteDoctorJsonDatasByID(id)
    this.ob.subscribe(
    data => {this.DeleteUserData= data;});
    console.log("DeleteUserData : "+this.DeleteUserData.id);
  }
  applyFilter()
  {
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
    
    //this.value = this.value.trim(); // Remove whitespace
    //this.value = this.value.toLowerCase(); // Datasource defaults to lowercase matches
    this.datasource.filter = this.value.trim().toLocaleLowerCase();
  }
  Open(content,id?:number)
  { 
    this.spinner.show();
    this.modalService.open(content,{ size:'xl',centered:true,scrollable:true});
    this.GetdataById(id);
    //$("ViewM").modal('show');
    this.spinner.hide();
  }

  Viewopen(Viewcontent, id?:number)
  { 
    this.spinner.show();    
    this.GetdataById(id);
    this.modalService.open(Viewcontent,{ size:'md',centered:true,scrollable:false});  
  }
  Deleteopen(Deletecontent, id?:number)
  { 
    this.GetdataById(id);
    this.modalService.open(Deletecontent,{ size:'md',centered:true,scrollable:true});
    
  }
  Editopen(Editcontent, selectedDrId?:number)
  {
    this.modalService.open(Editcontent,{ size:'xl',centered:true,scrollable:true});  
    this.DrIdToUpdate=selectedDrId;  
  }

  ngOnInit(): void
  {
    this.Getjson();
    const that = this;
    this.dtOptions = {
      
      pagingType: 'full_numbers',
      pageLength: 2,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        that.http.post<DataTablesResponse>(
            this.conf.tempResourseAPI+"/Doctor",
            dataTablesParameters, {}
          ).subscribe(resp => {
            that.DoctorData = resp.data;

            callback({
              //recordsTotal: resp.recordsTotal,
              //recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{
        title: 'Title',
        data: 'title'
      }, {
        title: 'First name',
        data: 'firstname'
      }, {
        title: 'Last name',
        data: 'lastname'
      }, {
        title: 'Action',
        render: function (data: any, type: any, full: any) {
          return 'View';
        },
      }]
    };
    
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
        if(dataa !=null)
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
    gOnDestroy(): void {
      // Do not forget to unsubscribe the event
      this.dtTrigger.unsubscribe();
    }
    
}
