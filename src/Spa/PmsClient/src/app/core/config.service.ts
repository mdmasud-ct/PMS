import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }
  get authApiURI() {
    return 'http://localhost:52778/api';
  }    
 
  get resourceApiURI() {
    return 'http://localhost:61006/api';
  }
  get tempResourseAPI(){
    return 'http://localhost:3000';
  }
}

