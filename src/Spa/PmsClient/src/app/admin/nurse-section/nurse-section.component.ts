import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as data from '../../../assets/jsonData/AllUserdata.json';
import { RegisterService } from '../../service/register.service';
import {MatTableDataSource} from '@angular/material/table';
import { Nurse } from '../../models/nurseModel';
import { FileDetector } from 'selenium-webdriver';
import { Observable } from 'rxjs';

// const DataJsonPatient: any = (data as any).default;

@Component({
  selector: 'app-nurse-section',
  templateUrl: './nurse-section.component.html',
  styleUrls: ['./nurse-section.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class NurseSectionComponent implements OnInit {
  public ob :Observable<Nurse[]>;
  public regiterData;
  msg:any;
  dataSourceNurse: any;
  public nurseData: Nurse[]= [];
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
    constructor(config: NgbModalConfig, private modalService: NgbModal, private registerService: RegisterService) {
      //modals used by this component
      config.backdrop = 'static';
      config.keyboard = false;
    }

    public Getjson():void
    {
      this.ob = this.registerService.GetNurseJsonDatas()
      this.ob.subscribe(
        data => { 
          console.log("Output");
          console.log(data);
          this.nurseData = data;
          // console.log("Output Is: "+data["firstname"]);          
        },
        (error: any) => console.log("Error in saving regiter data")
        );
        this.dataSourceNurse = new MatTableDataSource(this.nurseData);
        console.log("Data Source: "+this.nurseData);
    }
  open(content) { // Ng Pop Up Model 
    this.modalService.open(content,{ size:'xl',centered:true,scrollable:true});
  } 
 
  ngOnInit(): void {
    this.Getjson();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceNurse.filter = filterValue.trim().toLowerCase();
    // console.log("DataSource filter: "+this.dataSourceNurse);    
  }
}
