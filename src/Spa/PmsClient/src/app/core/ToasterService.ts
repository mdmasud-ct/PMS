import { Injectable } from '@angular/core';
import { ToasterPosition } from './ToasterPosition';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class ToasterService{
    constructor(private toastr: ToastrService) {}
    
  public error(title: string, message: string, positionClass: ToasterPosition) {
    this.toastr.error(message, title, {positionClass} );
  }
  public success(title: string, message: string, positionClass: ToasterPosition) {
    this.toastr.success(message, title,{ positionClass } );
  }
  public warning(title: string, message: string, positionClass: ToasterPosition) {
    this.toastr.warning(message, title,{ positionClass } );
  }
  public info(title: string, message: string, positionClass: ToasterPosition) {
    this.toastr.info(message, title,{ positionClass } );
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
}