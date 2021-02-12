import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as data from '../../../assets/jsonData/AllUserdata.json';
import { RegisterService } from '../../service/register.service';
import {MatTableDataSource} from '@angular/material/table';
import { Doctor } from '../../models/doctorModel';
//import { FileDetector } from 'selenium-webdriver';
import { Observable } from 'rxjs';

// export interface PeriodicElement {
//   DrID: number;
//   FullName: string;
//   Date_of_Birth: string;
//   EmailID: string;
//   ContactNo: number;
//   Address: string;
//   Specialties: string;
//   Status: string;
//   Blocked_Unblocked: string;
//   View_Edit_Delete: any;
// }
// const DataJsonDoctor: any = (data as any).default;

@Component({
  selector: 'app-doctor-section',
  templateUrl: './doctor-section.component.html',
  styleUrls: ['./doctor-section.component.css'],
  providers: [NgbModalConfig, NgbModal],
})

export class DoctorSectionComponent implements OnInit {
  value = '';
  public ob :Observable<Doctor[]>;
  public regiterData;
  msg:any;
  dataSourceDoctor: any;  
  public DoctorData: Doctor[]= [];
  public dataSourceDoctorData: Doctor[]= [];
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
  // dataSourceDoctor = new MatTableDataSource(DataJsonDoctor);

  // //Register Component TS
  // public ob :Observable<string>;
  // public regiterData;
  // msg:string="";

  // userForm: FormGroup = new FormGroup({
  //   title: new FormControl('',Validators.required),
  //   firstname: new FormControl('',Validators.required),
  //   lastname: new FormControl('',Validators.required),
  //   email: new FormControl(null,[Validators.required,Validators.email]),
  //   dob: new FormControl('',Validators.required),
  //   role : new FormControl('',Validators.required)   
  // });
  // Ng Pop Up Model
  constructor(config: NgbModalConfig, private modalService: NgbModal, private registerService: RegisterService) {
    //modals used by this component
    config.backdrop = 'static';
    config.keyboard = false;
  }

  public Getjson():void
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
  
  open(content) { // Ng Pop Up Model 
    this.modalService.open(content,{ size:'xl',centered:true,scrollable:true});
    
  } 
 
  // onClickView(id: number):void
  // {

  // }

  // onClickEdit(id: number):void
  // {

  // }
  // onClickDelete(id: number):void
  // {

  // }
  ngOnInit(): void {
    this.Getjson();
  }
  applyFilter() {
    debugger;
    console.log(this.value);
   
    if(this.value!='')
    {
      this.dataSourceDoctorData=this.DoctorData.filter(p => p.Blocked_Unblocked.includes(this.value));
    }
    else
    {
      this.dataSourceDoctorData=this.DoctorData;
    }
     console.log(this.DoctorData);    
  }
  getRecord(displayedColumns):void
{
  //alert(displayedColumns);
}

  // //Register Components TS
  // SaveRegiterData(): void
  // { 
  //   this.regiterData=new Register(
  //                                 this.userForm.value.title,
  //                                 this.userForm.value.firstname,
  //                                 this.userForm.value.lastname,
  //                                 this.userForm.value.email,
  //                                 this.userForm.value.dob,
  //                                 this.userForm.value.role
  //                               );

  //   console.log(this.regiterData);

  //   if(this.userForm.invalid==false)
  //   { 
  //     this.ob = this.registerService.SaveRegiterDatas(this.regiterData)
  //     this.ob.subscribe(
  //       data => { 
  //         console.log(data);      
  //         console.log("Output Is: "+data["firstname"]); 
  //         this.msg = data["firstname"]+ ", has Registered Successfully" },
  //       (error: any) => console.log("Error in saving regiter data")
  //       );
  //   }
  // }

  // getToday(): string {
  //   return new Date().toISOString().split('T')[0];
  // }

}