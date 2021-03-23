import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators'
import { AuthService } from '../../core/auth.service';
import { UserRegistration }    from '../../models/user.registration';
 
import { ToasterService } from './../../core/ToasterService';
import { ToasterPosition } from './../../core/ToasterPosition';
import { Roles } from '../../core/dropdownmaster.service'; 
@Component({
  selector: 'app-registers',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  success: boolean;
  error: string;
  userRegistration: UserRegistration = { name: '', email: '', password: '',role:''};
  submitted: boolean = false;
  roles:any;
  constructor(private authService: AuthService,private toastr: ToasterService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.roles = Roles;
  }
  keys() : Array<string> {
    var keys = Object.keys(this.roles);
    //console.log(keys);
    return keys;
    //return keys.slice(keys.length / 2);
  }
  onSubmit1(){
    this.success=true;
    this.toastr.success('Success', 'Registered successfully',ToasterPosition.topFull,this.functioncallbackFunction);
  }
  onSubmit() { 

    this.spinner.show();

    this.authService.register(this.userRegistration)
      .pipe(finalize(() => {
        this.spinner.hide();
      }))  
      .subscribe(
      result => {         
         if(result) {
           console.log("Succeess");
           this.success = true;
           this.toastr.success('Success', 'Registered successfully',ToasterPosition.topFull,this.functioncallbackFunction);
         }
      },
      error => {
        //if(error.status==='undefined')
        this.toastr.error('Error',"Unexpected error occured. Please contact administrator.",ToasterPosition.topFull);
        //else
          //this.toastr.error('Error',error,ToasterPosition.topFull,this.functioncallbackFunction
          this.error = error;       
      });
  }
  functioncallbackFunction(){
    //this.toastr.warning("warning","Testing",ToasterPosition.topFull);
    this.success=true;
  }

}
