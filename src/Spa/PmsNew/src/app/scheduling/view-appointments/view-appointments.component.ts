import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RegisterService } from '../../services/register.service';
import {MatTableDataSource} from '@angular/material/table';
import { Appointment } from '../../models/Appointment';
import { Observable } from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {AfterViewInit, ViewChild} from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { finalize } from 'rxjs/operators'
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PatientService } from '../../services/patient.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.css']
})
export class ViewAppointmentsComponent implements OnInit {
  value = '';
  public ob :Observable<Appointment[]>;
  public regiterData;
  msg:any;
  dataSourceAppointment: any;  
  public AppointmentData: Appointment[]= [];
  public dataSourceAppointmentData: Appointment[]= [];
  role:string;
  res:any;
  public matselection: any;
  public pIdToUpdate:number; 
  public aIdToUpdate:number; 
  public drnameToUpdate:string; 
  public patientnameToUpdate:string; 
  public dateToUpdate:string; 
  public fromtimeToUpdate:string; 
  public totimeToUpdate:string; 
  public dridToUpdate:string; 
  
  displayedColumns = [
                      'ID',
                      'DrID',
                      'Description',
                      'DrName',
                      'PatientID',
                      'PatientName',
                      'Date',
                      'Fromtime',
                      'Totime',
                      'View_Edit_Delete'                                            
                     ];
  constructor(private registerService: RegisterService,
              private authService: AuthService,
              private router: Router, private route: ActivatedRoute,
              private modalService: NgbModal,
              private patientsvc:PatientService,
              private spinner:NgxSpinnerService,) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public Getjson():void
  {    
    this.ob = this.registerService.GetAppointmentJsonData()
    this.ob.subscribe(
      data => { 
        console.log("Output");
        console.log(data);
        this.AppointmentData = data;
        this.dataSourceAppointmentData = data;
      },
      (error: any) => console.log("Error in saving regiter data")
      );
      this.dataSourceAppointment = new MatTableDataSource<Appointment>(this.AppointmentData);
      console.log("Data Source: "+this.AppointmentData);
      
  }
  ngOnInit(): void {
    this.Getjson();
    this.dataSourceAppointment.paginator = this.paginator;
    this.initRole();
  }
  ngAfterViewInit() {
    this.Getjson();
    this.dataSourceAppointment.paginator = this.paginator;
  }
  initRole(){
    this.authService.getUserRole(this.authService.email)
      .pipe(finalize(() => {
      }))  
      .subscribe(
      result => {         
         if(result) {                    
            this.res = result;    
            this.role = this.res.role;
         }
      },
      error => {
      });
  } 
  open(content,selectedaId?:number,selectedpId?:number)
  { // Ng Pop Up Model    
    this.modalService.open(content,{ size:'xl',centered:true,scrollable:true});    
    this.aIdToUpdate=selectedaId;  
    this.pIdToUpdate=selectedpId;   
  }
  openAction(content,selectedaId?:number,selectedpId?:number,selecteddrname?:string,selectedpatientname?:string,
    selecteddate?:string,selectedfromtime?:string,selectedtotime?:string,selecteddrid?:string)
    {
      debugger;
      this.modalService.open(content,{ size:'xl',centered:true,scrollable:true});    
      this.aIdToUpdate=selectedaId;  
      this.pIdToUpdate=selectedpId;
      this.drnameToUpdate=selecteddrname;
      this.patientnameToUpdate=selectedpatientname;
      this.dateToUpdate=selecteddate;
      this.fromtimeToUpdate=selectedfromtime;
      this.totimeToUpdate=selectedtotime;
      this.dridToUpdate=selecteddrid;    
    }   
    receiveMessage($event) {      
      this.modalService.dismissAll();
      this.Getjson();
    } 
}
