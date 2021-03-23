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
import { AuthService } from 'app/core/auth.service';

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
  public UserData: doctorGrid;
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
  constructor(config: NgbModalConfig,private auth:AuthService, private modalService: NgbModal, private registerService: RegisterService,private toaster:ToasterService,private router: Router,private spinner:NgxSpinnerService,private renderer: Renderer2,private conf:ConfigService,private http:HttpClient)
  {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  
  public Getjson(id?:number):void
 { 
      this.spinner.show();    
      this.ob = this.registerService.GetDoctorJsonDatas(this.auth.authorizationHeaderValue)
      this.ob.pipe(finalize(()=>this.spinner.hide())).subscribe(
      dataa => { 
      this.datasource =new MatTableDataSource<doctorGrid>(dataa);
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sort;
     },
     (error: any) => console.log("Error in saving regiter data")
     );
 }
  public async GetdataById(id: number)
  {
    if(!isNaN(id)){
    this.spinner.show();
    this.registerService.GetDoctorJsonDatasByID(id,this.auth.authorizationHeaderValue).pipe(finalize(()=>{
        this.spinner.hide();
    })).subscribe(
    data => {
      this.UserData= data;
    });
  }
  }
  public  DeletedataById(id: number)
  {
    this.ob = this.registerService.DeleteDoctorJsonDatasByID(id)
    this.ob.subscribe(
    data => {this.DeleteUserData= data;});
    console.log("DeleteUserData : "+this.DeleteUserData.id);
  }
  applyFilter()
  {
    this.datasource.filter = this.value.trim().toLocaleLowerCase();
  }
  async Open(content,id?:number)
  { 
    this.spinner.show();
    await this.GetdataById(id);
    this.modalService.open(content,{ size:'xl',centered:true,scrollable:true});
    this.spinner.hide();
  }

  async Viewopen(Viewcontent, id?:number)
  { 
    this.spinner.show();    
    await this.GetdataById(id);
    this.modalService.open(Viewcontent,{ size:'md',centered:true,scrollable:false});  
  }
  Deleteopen(Deletecontent, id?:number)
  { 
    this.GetdataById(id);
    this.modalService.open(Deletecontent,{ size:'md',centered:true,scrollable:true});
    
  }
  ActiveOpen(Activatecontent, id?:number)
  { 
    this.GetdataById(id);
    this.modalService.open(Activatecontent,{ size:'md',centered:true,scrollable:true});
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
    console.log("Id: "+this.auth.userId);
  }
  UpdateDoctorStatus(doctorId:Number,isactive:boolean,event): void
  {
    debugger;
    this.spinner.show();
    let obj:any={};
    obj.Id=doctorId,
    obj.IsActive=isactive;
    this.ob =this.registerService.SoftDeleteDoctorData(obj)
    this.ob.subscribe(
      dataa => { 
        console.log(dataa);   
        if(dataa !=null)
        {
          this.spinner.hide();
          this.success = true;
          let res:any;
          res = dataa;
          if(res.code==1){
            this.toaster.success("Success",res.response,ToasterPosition.topFull);
          }else{
            this.toaster.error("Error",res.response,ToasterPosition.topFull);
          }   
          this.receiveMessage(event);
        }
       },
      (error: any) => {this.spinner.hide(); this.toaster.error("Error","Unable to update. Please contact administrator",ToasterPosition.topFull)}
    );
    }
    functioncallbackFunction(){
      this.success=true;
    }
    gOnDestroy(): void {
      // Do not forget to unsubscribe the event
      this.dtTrigger.unsubscribe();
    }
    
    DownloadGridData()
      {
        debugger;
         this.ob = this.registerService.DownloadGridData("doctor");
        this.ob.subscribe(
          (response: any) =>{
            debugger;
              let dataType = response.type;
              let binaryData = [];
              binaryData.push(response);
              let downloadLink = document.createElement('a');
              downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
              let fileName="AllDoctorData_"+new Date().toLocaleString()+".xlsx";
                  downloadLink.setAttribute('download', fileName);
              document.body.appendChild(downloadLink);
              downloadLink.click();
          }
      )
      }
}
