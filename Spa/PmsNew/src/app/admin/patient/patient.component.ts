import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterService } from '../../services/register.service';
import { MatTableDataSource } from '@angular/material/table';
import { Patients } from '../../models/Patient';
import { Observable } from 'rxjs';
import {ToasterService} from '../../core/ToasterService';
import { ToasterPosition } from '../../core/ToasterPosition';
import { MatPaginator } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { Patient } from 'app/models/patientModel';
import { isThisTypeNode } from 'typescript';
import { AuthService } from '../../core/auth.service';
import { doctorGrid } from 'app/models/doctorGrid';
import { MatSort } from '@angular/material/sort';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
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
  public ob :Observable<doctorGrid[]>;
  public regiterData;
  msg:any;
  public dataSourcePatient: any;  
  public PatientData: Patients[]= [];
  public dataSourcePatientData: Patients[]= [];
  constructor(config: NgbModalConfig, private modalService: NgbModal
    , private registerService: RegisterService,private toaster:ToasterService,private auth:AuthService, private spinner: NgxSpinnerService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  datasource: MatTableDataSource<doctorGrid>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  success: boolean;
  displayedColumns = [
    'Id',
    'FullName',
    'dob',
    'EmailID',
    'ContactNo',
    'Status',
    //'Blocked_Unblocked',
    'View_Edit_Delete'
  ];

  public Getjson():void
  {
    this.spinner.show();
    this.ob = this.registerService.GetPatientJsonDatas(this.auth.authorizationHeaderValue)
    this.ob.pipe(finalize(()=>this.spinner.hide())).subscribe(
      data => { 
        this.datasource =new MatTableDataSource<doctorGrid>(data);
        this.datasource.paginator = this.paginator;
        this.datasource.sort = this.sort;
      },
      (error: any) => this.toaster.error("Error","Unable to fetch records",ToasterPosition.topFull)
      );
 }
 public GetdataById(id: number)
 {
   this.ob = this.registerService.GetPatientJsonDatasByID(id,this.auth.authorizationHeaderValue)
   this.ob.subscribe(
   data => {
     this.UserData= data;
    });
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
    this.datasource.filter = this.value.trim().toLocaleLowerCase();
 }
 Open(content)
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
 Editopen(Editcontent, id?:number)
 {
   this.modalService.open(Editcontent,{ size:'md',centered:true,scrollable:true});  
 }
 
 UpdateDoctorStatus(nurseId:Number,isactive:boolean,event): void
  {
    this.spinner.show();
    let obj:any={};
    obj.Id=nurseId,
    obj.IsActive=isactive;
    this.ob =this.registerService.SoftDeletePatienData(obj)
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

 ngOnInit(): void
 {
   this.Getjson();
 }
 receiveMessage($event) {
  this.spinner.show();
  this.modalService.dismissAll();
  this.Getjson();
}
ActiveOpen(Activatecontent, id?:number)
  {
    this.spinner.show();
    this.GetdataById(id);
    this.modalService.open(Activatecontent,{ size:'md',centered:true,scrollable:true});
    this.spinner.hide();
  }

      
  DownloadGridData()
  {
    debugger;
     this.ob = this.registerService.DownloadGridData("patient");
    this.ob.subscribe(
      (response: any) =>{
        debugger;
          let dataType = response.type;
          let binaryData = [];
          binaryData.push(response);
          let downloadLink = document.createElement('a');
          downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
          let fileName="AllPatientData_"+new Date().toLocaleString()+".xlsx";
              downloadLink.setAttribute('download', fileName);
          document.body.appendChild(downloadLink);
          downloadLink.click();
      }
  )
  }
}
