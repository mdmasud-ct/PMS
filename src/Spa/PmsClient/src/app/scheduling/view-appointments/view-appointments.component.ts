import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import * as data from 'jsonData/AllUserData.json'
import { RegisterService } from '../../service/register.service';
import {MatTableDataSource} from '@angular/material/table';
import { Appointment } from '../../models/Appointment';
import { Observable } from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {AfterViewInit, ViewChild} from '@angular/core';


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
  displayedColumns = [
                      'ID',
                      'DrID',
                      'DrName',
                      'PatientID',
                      'PatientName',
                      'Date',
                      'Fromtime',
                      'Totime',
                      'View_Edit_Delete'                                            
                     ];
  constructor(private registerService: RegisterService) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public Getjson():void
  {
    debugger;
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
  }
  ngAfterViewInit() {
    this.Getjson();
    this.dataSourceAppointment.paginator = this.paginator;
  }

}
