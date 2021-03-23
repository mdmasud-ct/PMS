import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/core/auth.service';
import { ToasterPosition } from 'app/core/ToasterPosition';
import { ToasterService } from 'app/core/ToasterService';
import { RegisterService } from 'app/services/register.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { UserInfoModel } from '../models/UserInfoModel';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  private UserData: any;
  public ob :Observable<any>;
  constructor(private auth: AuthService, private spinner: NgxSpinnerService,private registerService: RegisterService,private toastr: ToasterService ) { }
  fg: FormGroup = new FormGroup({
    //title: new FormControl('',Validators.required),
    firstname :  new FormControl('',Validators.required),
    lastname  :  new FormControl('',Validators.required),
    email     :  new FormControl({value:'',disabled:true},[Validators.required]),
    role      :  new FormControl('',Validators.required),
    contactno :  new FormControl('',Validators.required),
    address   :  new FormControl('',Validators.required),
    userName  :  new FormControl({value:'',disabled:true},[Validators.required]),
    id        :  new FormControl('')
  });
  ngOnInit() {
    this.GetUserInfo();
  }
  private async GetUserInfo(){
    this.spinner.show();
      this.ob = this.registerService.GetUserProfile(this.auth.authorizationHeaderValue)
      this.ob.pipe(finalize(()=>this.spinner.hide())).subscribe(
        data => { 
          this.UserData = data;
          this.UserData.firstName = this.UserData.firstName==undefined?this.UserData.name.split(' ')[0]:this.UserData.firstName;
          this.UserData.lastName  = this.UserData.lastName==undefined?this.UserData.name.split(' ')[1]:this.UserData.lastName;
          this.fg.patchValue({
            "firstname":  this.UserData.firstName,
            "lastname":   this.UserData.lastName,
            "email":      this.UserData.email,
            "userName":   this.UserData.userName,
            "contactno":  this.UserData.phoneNumber,
            "address":    this.UserData.address,
         });
        },
        (error: any) => this.toastr.error("Error","Unable to fetch records",ToasterPosition.topFull)
        );
  } 

}
