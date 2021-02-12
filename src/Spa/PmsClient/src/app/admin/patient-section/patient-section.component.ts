import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as data from '../../../assets/jsonData/AllUserdata.json';
import { RegisterService } from '../../service/register.service';
import {MatTableDataSource} from '@angular/material/table';
import { Patient } from '../../models/patientModel';
import { FileDetector } from 'selenium-webdriver';
import { Observable } from 'rxjs';

// export interface PeriodicElement {
//   PatientID: number;
//   FullName: string;
//   Date_of_Birth: string;
//   EmailID: string;
//   ContactNo: number;
//   Address: string;
//   Allergies: string;
//   Status: string;
//   Blocked_Unblocked: string;
//   View_Edit_Delete: any;
// }
// const DataJsonPatient: any = (data as any).default;

@Component({
  selector: 'app-patient-section',
  templateUrl: './patient-section.component.html',
  styleUrls: ['./patient-section.component.css']
})
export class PatientSectionComponent implements OnInit
{
      public ob :Observable<Patient[]>;
      public regiterData;
      msg:any;
      dataSourcePatient: any;
      public PatientData: Patient[]= [];
      //Ng mat-table columns
      displayedColumns = [
        'PatientID',
        'FullName',
        'Date_of_Birth',
        'EmailID',
        'ContactNo',
        'Address',
        'Allergies',
        'Status',
        'Blocked_Unblocked',
        'View_Edit_Delete'
      ];
    // dataSourcepatient = new MatTableDataSource(DataJsonPatient);

    // Ng Pop Up Model
    constructor(config: NgbModalConfig, private modalService: NgbModal, private registerService: RegisterService) {
      //modals used by this component
      config.backdrop = 'static';
      config.keyboard = false;
      // console.log("Heeellllelele");      
    }
    
    public Getjson():void
    {
      this.ob = this.registerService.GetPatientJsonDatas()
      this.ob.subscribe(
        data => { 
          console.log("Output");
          console.log(data);
          this.PatientData = data;
          // console.log("Output Is: "+data["firstname"]);          
        },
        (error: any) => console.log("Error in saving regiter data")
        );
        this.dataSourcePatient = new MatTableDataSource(this.PatientData);
        console.log("Data Source: "+this.PatientData);
    }
    open(content)
    { 
      // Ng Pop Up Model 
      this.modalService.open(content);
    } 

    ngOnInit(): void
    {
      this.Getjson();
    }

    applyFilter(event: Event)
    {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSourcePatient.filter = filterValue.trim().toLowerCase();
      // console.log("DataSource filter: "+this.dataSourceNurse);    
    }
    getRecord(displayedColumns):void
    {
      alert(displayedColumns);
    }
    getUsers(){
      this.registerService.GetPatientJsonDatas().subscribe(data => {
        this.PatientData=data;
      });
    }
    // onClickView(id: number):void
// {

// }

// onClickEdit(id: number):void
// {

// }
onClickDelete(id: number):void
  {
    this.registerService.DeletePatientJsonDatasByID(id).subscribe(data => {
      this.getUsers();
    });
  }

}
