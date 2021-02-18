import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
@Component({
  selector: 'app-relogin',
  templateUrl: './relogin.component.html',
  styleUrls: ['./relogin.component.css']
})
export class ReloginComponent implements OnInit {

  constructor(private routes:Router,private activatedRoute:ActivatedRoute,private auth:AuthService) { }
  msg:string;
  sub;
  ngOnInit(): void {
    this.sub=this.activatedRoute.paramMap.subscribe(params => { 
      console.log(params);
       this.msg = params.get('msg'); 
   });
  }
  onClick(){

//alert("clicked");    
  }

}
