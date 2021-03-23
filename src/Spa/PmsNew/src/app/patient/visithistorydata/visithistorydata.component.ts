import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Appointment } from '../../models/Appointment';
import { Observable } from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {AfterViewInit, ViewChild} from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { finalize } from 'rxjs/operators'
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppointmentService } from '../../services/appointment.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-visithistorydata',
  templateUrl: './visithistorydata.component.html',
  styleUrls: ['./visithistorydata.component.css']
})
export class VisithistorydataComponent implements OnInit {

  public ob :Observable<Appointment[]>;  
  public dataSourceAppointmentData: Appointment[]= [];
   displayedColumns = [
    'AppointmentId',
    'DoctorID',
    'DoctorName',
    'PatientID',
    'PatientName',
    'Date',
    'StartTime',
    'EndTime',
    'Description',
    'View_Edit_Delete'                                            
   ];
   
  public pIdToUpdate:number; 
  public aIdToUpdate:number; 
  public drName:string; 
  constructor(private authService: AuthService,
    private router: Router, private route: ActivatedRoute,
    private modalService: NgbModal,
    private appointmentsvc:AppointmentService,private spinner:NgxSpinnerService ) { }

  ngOnInit(): void {
    this.LoadAppointmentsHistory();
  }

  public LoadAppointmentsHistory():void
  {    
    this.spinner.show();
    this.ob = this.appointmentsvc.GetAppointmentsHistoryForPatient(this.authService.email)
    this.ob.subscribe(
      data => { 
        this.spinner.hide();
        console.log("Output");
        console.log(data);
        this.dataSourceAppointmentData = data;
      },
      (error: any) => console.log("Error in saving regiter data")
      );
      
  }

  open(content,selectedaId?:number,selectedpId?:number,Drname?:string)
  { // Ng Pop Up Model    
    debugger;
    this.modalService.open(content,{ size:'xl',centered:true,scrollable:true});    
    this.aIdToUpdate=selectedaId;  
    this.pIdToUpdate=selectedpId;  
    this.drName=Drname; 
  }

}
