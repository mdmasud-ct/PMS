import { Component, forwardRef, OnInit, ViewChild } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarOptions, FullCalendarComponent,Calendar } from '@fullcalendar/angular';
import {AuthService} from '../core/auth.service';
import {InboxService} from '../services/inbox.service';
import { Observable } from 'rxjs';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { content } from 'googleapis/build/src/apis/content';
import { FormControl, FormGroup } from '@angular/forms';
import { ToasterPosition } from 'app/core/ToasterPosition';
import { ToasterService } from 'app/core/ToasterService';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  public appointmentId:number;
  public ob :Observable<any>;
  public CalendarEventData:any;
  calendarOptions: CalendarOptions;
  eventsModel: any;
  @ViewChild('fullcalendar') fullcalendar: FullCalendarComponent;
  @ViewChild('content')
  public modelContent: any;
  status:string;
  success:boolean;

  userForm: FormGroup = new FormGroup({
    patientid: new FormControl(''),
    patientname: new FormControl(''),
    appointmentdate: new FormControl(''),
    fromtime: new FormControl(null),
    totime: new FormControl(''),
    description: new FormControl(''),   
    note: new FormControl(''), 
    appointmentaction:new FormControl('')
  });

  constructor(private authService: AuthService,private inboxSVC:InboxService,private config: NgbModalConfig, 
    private modalService: NgbModal,private toaster:ToasterService,private spinner:NgxSpinnerService) { }

  ngOnInit() {
    this.GetAllCalendarNotification();  
}

updateHeader() {
  this.calendarOptions.headerToolbar = {
    left: 'prev,next myCustomButton',
    center: 'title',
    right: ''
  };
}

updateEvents() {
  const nowDate = new Date();
  const yearMonth = nowDate.getUTCFullYear() + '-' + (nowDate.getUTCMonth() + 1);

  this.calendarOptions.events = [{
    title: 'Updaten Event',
    start: yearMonth + '-08',
    end: yearMonth + '-10'
  }];

}

public GetAllCalendarNotification():void
  {
    this.spinner.show();
    this.ob = this.inboxSVC.GetAllCalendarNotification(this.authService.role,this.authService.email);
    this.ob.subscribe(
      data => { 
        this.spinner.hide();
        console.log("Output");
        console.log(data);
        this.CalendarEventData = data;       
        this.SetCalendarData();
  console.log("CalenderEvent:"+this.calendarOptions.events)
      },
      (error: any) => console.log("Error in fetching data")
      );
  }

  public SetCalendarData():void
  {
     // need for load calendar bundle first
  forwardRef(() => Calendar);

  this.calendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    editable: true,
    customButtons: {
      myCustomButton: {
        text: 'custom!',
        click: function () {
          alert('clicked the custom button!');
        }
      }
    },
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridWeek dayGridMonth'
    },
    
    dateClick: this.handleDateClick.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventDragStop: this.handleEventDragStop.bind(this),
    // events: [
    //   { title: 'Regular checkup: Dr. Philip Price:', date: '2021-03-03', time: '5:30 PM'},
    //   { title: 'Fever and Cold: Dr. Doctor 12', date: '2021-04-01' }
    // ],
     events: this.CalendarEventData,     
  };
  }

  handleDateClick(arg) {
    console.log(arg);    
  }
  
  handleEventClick(arg) {
    debugger;
    console.log(arg);
    this.appointmentId=arg.event.id;
    this.open(this.modelContent,4);
    this.GetNotificationDetails(arg.event.id);
    
  }
  handleEventDragStop(arg) {
    console.log(arg);
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0];
  }

  open(content,eventId:number) { // Ng Pop Up Model 
    debugger;
    this.modalService.open(content,{ size: 'xl',centered:true });
  } 

  public GetNotificationDetails(appointmentId:number):void
  {
    this.ob = this.inboxSVC.GetNotificationDetails(appointmentId);
    this.ob.subscribe(
      data => { 
        debugger;
        console.log("Output");
        console.log(data);
        this.status=data["status"];
        this.userForm.patchValue({
          "patientid": data["patientId"],
          "patientname": data["patientName"],
          "appointmentdate": data["date"],
          "fromtime": data["startTime"],
          "totime": data["endTime"],
          "description": data["description"],   
          "note": data["reason"]
        })
      },
      (error: any) => console.log("Error in fetching data")
      );
  }

  public SaveAppointmentAction(): void
    {   
          debugger;
          console.log('Before hitting service');        
          this.ob = this.inboxSVC.SaveAppointmentActionData(this.appointmentId,this.userForm.value.appointmentaction,this.userForm.value.note)    
          this.ob.subscribe(
            data => { 
              console.log(data);      
              this.success = true;
              if(data.code==1)
              {                
              this.Refresh();
              this.toaster.success("Success",data.response,ToasterPosition.topFull,this.functioncallbackFunction) 
              }
              else
              {                
              this.Refresh();
              this.toaster.error("Error",data.response,ToasterPosition.topFull) 
              }
            },
            (error: any) => console.log("Error in fetching data")
            );
  }
  functioncallbackFunction(){
    this.success=true;
  }
  Refresh() {   
    debugger;   
    this.modalService.dismissAll();    
    this.GetAllCalendarNotification(); 
  } 
}
