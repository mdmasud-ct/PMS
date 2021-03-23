import { Component,Input, OnInit,Output,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup} from '@angular/forms';
import { FormControl} from '@angular/forms';
import { Validators} from '@angular/forms';
import { Appointment } from '../../models/Appointment';
import { ToasterPosition } from '../../../app/core/ToasterPosition';
import {ToasterService} from '../../core/ToasterService';
import { AppointmentService } from '../../../app/services/appointment.service';

@Component({
  selector: 'app-appointment-action',
  templateUrl: './appointment-action.component.html',
  styleUrls: ['./appointment-action.component.css']
})
export class AppointmentActionComponent implements OnInit {

  public Appointment;
  public ob :Observable<Appointment[]>;
  public obad :Observable<Appointment[]>;
  success: boolean;
  isApproved: boolean=false;
  
  public appointmentdata: Appointment[]=[];

  fg: FormGroup = new FormGroup({    
    appointmentaction : new FormControl('',Validators.required),
    appointmentreason : new FormControl('',Validators.required) 
  });  
  @Input()  aId:number;
  @Input()  pId:number;  
  @Input() drname:string;
  @Input() patientname:string;
  @Input() date:string;
  @Input() fromtime:string;
  @Input() totime:string;
  @Input() drid:string;  
  @Output("parentFun") parentFun: EventEmitter<any> = new EventEmitter();

  constructor(private appointmentsvc: AppointmentService,private toaster:ToasterService) { }

  ngOnInit(): void {
    this.loadAppointmentActionData(this.aId);
  }
    public SaveAppointmentAction(): void
    {     
      debugger;  
        if(this.fg.value.appointmentaction == "Approved")
          this.isApproved=true;        
        this.Appointment=new Appointment(this.aId,this.drname,this.patientname,this.date,this.fromtime,
                                this.totime,this.drid,this.pId.toString(),this.isApproved,
                                this.fg.value.appointmentreason);  
                    
        if(this.fg.invalid==false)
        { 
          debugger;
          console.log('Before hitting service');        
          this.ob = this.appointmentsvc.SaveAppointmentActionData(this.Appointment)        
          this.ob.subscribe(
            data => { 
              console.log(data);      
              console.log("Output Is: "+data["firstname"]); 
              this.success = true;
              this.sendMessage();
              this.toaster.success("Success",data["response"],ToasterPosition.topFull,this.functioncallbackFunction) 
              //this.msg = data["firstname"]+ ", has Registered Successfully" 
            },
            (error: any) => console.log("Error in saving practitioner data")
            );
      }
  }
  functioncallbackFunction(){
    this.success=true;
  }
  public loadAppointmentActionData(aId:number)
  {
    console.log('LoadData'+this.aId);
    debugger;
   this.obad=this.appointmentsvc.GetAppointmentActionDataByAppointmentID(this.aId);
   let appointmentaction:string="";
   this.obad.subscribe(
     (pv:Appointment[])=>{this.appointmentdata=pv;console.log(this.appointmentdata[0]); debugger;
      if(this.appointmentdata["isApproved"]==true)      
        appointmentaction="Approved";
      else
        appointmentaction = "Rejected";
     this.fg.patchValue({
       "appointmentreason": this.appointmentdata["reason"],
       "appointmentaction": appointmentaction,       
     })
   },
   (error:any)=>console.log('fails to load nurse data')
   );
  }
  sendMessage() {
    //this.messageEvent.emit(this.message);
    this.parentFun.emit();
  }
}
