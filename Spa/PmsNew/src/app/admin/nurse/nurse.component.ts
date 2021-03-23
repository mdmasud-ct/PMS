import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterService } from '../../services/register.service';
import { MatTableDataSource } from '@angular/material/table';
import { Nurse } from '../../models/nurseModel';
import { Observable } from 'rxjs';
import { ToasterPosition } from '../../core/ToasterPosition';
import { ToasterService } from '../../core/ToasterService';
import { RegisterComponent } from '../register/register.component';
import { AuthService } from '../../core/auth.service';
import { doctorGrid } from 'app/models/doctorGrid';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css'],
  providers: [NgbModalConfig, NgbModal, ToasterService],
})
export class NurseComponent implements OnInit {
  value = '';
  private UserData: any;
  public ob :Observable<doctorGrid[]>;
  public regiterData;
  private DeleteUserData: any;
  msg:any;
  public dataSourceNurse: any;  
  public NurseData: Nurse[]= [];
  public dataSourceNurseData: Nurse[]= []; 
  public NrIdToUpdate:number; 
  success: boolean;
  datasource: MatTableDataSource<doctorGrid>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = [
                      'Id',
                      'FullName',
                      'dob',
                      'EmailID',
                      'ContactNo',
                      //'Address',
                      'Status',
                      'Gender',
                      'View_Edit_Delete'
                     ];
    constructor(config: NgbModalConfig, private modalService: NgbModal, private registerService: RegisterService,private toaster:ToasterService,private auth:AuthService,private spinner: NgxSpinnerService) {
      config.backdrop = 'static';
      config.keyboard = false;
    }

    public Getjson():void
    {
      this.spinner.show();
      this.ob = this.registerService.GetNurseJsonDatas(this.auth.authorizationHeaderValue)
      this.ob.pipe(finalize(()=>this.spinner.hide())).subscribe(
        data => { 
          this.datasource =new MatTableDataSource<doctorGrid>(data);
          this.datasource.paginator = this.paginator;
          this.datasource.sort = this.sort;
          console.log(data);
        },
        (error: any) => this.toaster.error("Error","Unable to fetch records",ToasterPosition.topFull)
        );
    }
  
  public DeletedataById(id: number)
  {
    this.ob = this.registerService.DeleteNurseJsonDatasByID(id)
    this.ob.subscribe(
    data => {this.DeleteUserData= data;});
    console.log("DeleteUserData : "+this.DeleteUserData.id);
  }
  applyFilter()
  {
    this.datasource.filter = this.value.trim().toLocaleLowerCase();
  }
  async Open(content, id?:number)
  {
    this.spinner.show();
    await this.GetdataById(id);
    this.modalService.open(content,{ size:'xl',centered:true,scrollable:true});
    this.spinner.hide();
  }

  Viewopen(Viewcontent, id?:number)
  {
    this.modalService.open(Viewcontent,{ size:'md',centered:true,scrollable:false});  
    this.GetdataById(id);
  }
  Deleteopen(Deletecontent, id?:number)
  { // Ng Pop Up Model       
    this.modalService.open(Deletecontent,{ size:'md',centered:true,scrollable:true});
    this.GetdataById(id);
    // this.DeletedataById(id);
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
  public async GetdataById(id: number)
    {
      if(!isNaN(id)){
      this.spinner.show();
      this.registerService.GetNurseJsonDatasByID(id,this.auth.authorizationHeaderValue).pipe(finalize(()=>{
          this.spinner.hide();
      })).subscribe(
      data => {
        this.UserData= data;
      });
    }
    }
    functioncallbackFunction(){
      this.success=true;
    }
    
    receiveMessage($event) {
      this.spinner.show();
      this.modalService.dismissAll();
      this.Getjson();
    }
    UpdateDoctorStatus(nurseId:Number,isactive:boolean,event): void
  {
    debugger;
    this.spinner.show();
    let obj:any={};
    obj.Id=nurseId,
    obj.IsActive=isactive;
    this.ob =this.registerService.SoftDeleteNurseData(obj)
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
     this.ob = this.registerService.DownloadGridData("nurse");
    this.ob.subscribe(
      (response: any) =>{
        debugger;
          let dataType = response.type;
          let binaryData = [];
          binaryData.push(response);
          let downloadLink = document.createElement('a');
          downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
          let fileName="AllNurseData_"+new Date().toLocaleString()+".xlsx";
              downloadLink.setAttribute('download', fileName);
          document.body.appendChild(downloadLink);
          downloadLink.click();
      }
  )
  }
}
