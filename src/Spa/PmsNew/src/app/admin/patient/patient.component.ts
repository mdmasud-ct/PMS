import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, Injectable,AfterViewInit, Renderer2} from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import * as data from '../../../assets/jsonData/AllUserdata.json';
import { RegisterService } from '../../services/register.service';
import {MatTableDataSource} from '@angular/material/table';
import { Doctor } from '../../models/doctorModel';
import { Observable, Subject } from 'rxjs';
import { ToasterPosition } from '../../core/ToasterPosition';
import { ToasterService } from '../../core/ToasterService';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgModel } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { ConfigService } from '../../core/config.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
export class PatientComponent implements OnInit {

  value = '';
  private UserData: any;
  private DeleteUserData: any;
  public ob :Observable<Doctor[]>;
  public regiterData;
  msg:any;
  public dataSourceDoctor: any;  
  public Nurse: Doctor[]= [];
  public dataSourceDoctorData: Doctor[]= [];
  public DrIdToUpdate:number; 
  success: boolean;
  message:string;


  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  receiveMessage($event) {
    this.message = $event;
    this.modalService.dismissAll();
    //this.Getjson();
  }
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
  constructor(config: NgbModalConfig, private modalService: NgbModal, private registerService: RegisterService,private toaster:ToasterService,private router: Router,private spinner:NgxSpinnerService,private renderer: Renderer2,private conf:ConfigService,private http:HttpClient)
  {
    //modals used by this component
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    
  }

}
