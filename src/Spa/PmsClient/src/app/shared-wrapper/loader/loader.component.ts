import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hideloader() { 
    // Setting display of spinner 
    // element to none 
    document.getElementById('loading').style.display = 'none'; 
  }
  showloader(){
    document.getElementById('loading').style.display = 'true'; 
  } 

}
