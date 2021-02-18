import { Injectable } from '@angular/core';
import { ToasterPosition } from './ToasterPosition';
import {ToastrService} from 'ngx-toastr';
import { timeout } from 'rxjs/operators';

@Injectable()
export class ToasterService{
    constructor(private toastr: ToastrService) {}
    timeout:number= 3000;
  public error(title: string, message: string, positionClass: ToasterPosition,timein:number=this.timeout) {
    this.toastr.error(message, title, {positionClass,timeOut:timein} );
  }
  public success(title: string, message: string, positionClass: ToasterPosition,mycallback:any=this.Callback,timein:number = this.timeout) {
    this.toastr.success(message, title,{ positionClass,timeOut:timein,closeButton:true, } );
    mycallback();
  }
  public warning(title: string, message: string, positionClass: ToasterPosition,timein:number = this.timeout) {
    this.toastr.warning(message, title,{ positionClass,timeOut:timein } );
  }
  public info(title: string, message: string, positionClass: ToasterPosition,timein:number=this.timeout) {
    this.toastr.info(message, title,{ positionClass,timeOut:timein } );
  }
  public showresponse(title: string='', message: string, positionClass: ToasterPosition) {
    switch(title){
      case "":{

      }
      case "":{
        
      }
      case "":{
        
      }
      case "":{
        
      }
      case "":{
        
      }
    } 
    this.toastr.info(message, title,{ positionClass } );
  }
  public Callback(){
    console.log("call");
  }
}