import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }
  get authApiURI() {
    return 'http://localhost:63423/api';
  }    
 
  get resourceApiURI() {
    return 'http://localhost:61006/api';
  }
  get tempResourseAPI(){
    return 'http://localhost:3000';
  }
  get patientManagementAPI(){
    return 'http://localhost:54877/api';
  }
  get scheduleManagementAPI(){
    return 'http://localhost:56207/api';
  }
}

