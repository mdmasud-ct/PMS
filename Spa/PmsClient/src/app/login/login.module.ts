import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserloginComponent } from './userlogin/userlogin.component';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../core/auth.service';
import { NgxSpinnerModule } from 'ngx-spinner';




@NgModule({
  declarations: [UserloginComponent],
  imports: [
    CommonModule,
    NgxSpinnerModule
  ]
})
export class LoginModule { }
