import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';



@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  constructor(private authService:AuthService) { }
  res:any;
  ngOnInit(): void {
    
    
  }

}
