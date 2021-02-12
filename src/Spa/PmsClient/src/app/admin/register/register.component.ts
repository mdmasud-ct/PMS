import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup} from '@angular/forms';
import { FormControl} from '@angular/forms';
import { Validators} from '@angular/forms';
import { Register } from '../../models/registerModel';
import { RegisterService } from '../../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  public ob :Observable<string>;
  public RegisterUser;
  msg:string="";
  fullname:string ="";

  fg: FormGroup = new FormGroup({
    title: new FormControl('',Validators.required),
    firstname: new FormControl('',Validators.required),
    lastname: new FormControl('',Validators.required),
    email: new FormControl(null,[Validators.required,Validators.email]),
    dob: new FormControl('',Validators.required),
    role : new FormControl('',Validators.required),
    contactno : new FormControl('',Validators.required),
    address : new FormControl('',Validators.required),
    speciality : new FormControl('',Validators.required) 
  });
  constructor(private registersvc: RegisterService) { }

  public SavePractitionerData(): void
  {
      // console.log("ts.SavePractitionerData() hits");
      this.fullname = this.fg.value.firstname+' '+this.fg.value.lastname;
      this.RegisterUser=new Register(this.fg.value.title,
                              this.fg.value.firstname,
                              this.fg.value.lastname,
                              this.fg.value.email,
                              this.fg.value.dob,
                              this.fg.value.role,
                              this.fullname,
                              this.fg.value.contactno,
                              this.fg.value.address,
                              this.fg.value.speciality,'Active','Block');
      if(this.fg.invalid==false)
      { 
        console.log('Before hitting service');
        this.ob = this.registersvc.SaveUserRegiterDatas(this.RegisterUser)

        this.ob.subscribe(
          data => { 
            console.log(data);      
            console.log("Output Is: "+data["firstname"]); 
            this.msg = data["firstname"]+ ", has Registered Successfully" },
          (error: any) => console.log("Error in saving practitioner data")
          );
    }
}

getToday(): string {
  return new Date().toISOString().split('T')[0];
}

  ngOnInit(): void {
  }

}
