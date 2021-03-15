import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { UserManager, UserManagerSettings, User } from 'oidc-client';
import { BehaviorSubject } from 'rxjs'; 
import { BaseService } from "./base.service";
import { ConfigService } from './config.service';
import { RouterOutlet } from '@angular/router';
import decode from 'jwt-decode';
import { analytics } from 'googleapis/build/src/apis/analytics';
@Injectable({
  providedIn: 'root'
})
export class AuthService  extends BaseService{

  // Observable navItem source
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  authNavStatus$ = this._authNavStatusSource.asObservable();

  private manager = new UserManager(getClientSettings());
  private user: User | null;
  private username: string;
  public userrole:string;
  
  constructor(private http: HttpClient, private configService: ConfigService) { 
    super();     
    
    this.manager.getUser().then(user => { 
      this.user = user;      
      this._authNavStatusSource.next(this.isAuthenticated());
    });
  }
  login() { 
    return this.manager.signinRedirect();   
  }

  async completeAuthentication() {
      this.user = await this.manager.signinRedirectCallback();
      this._authNavStatusSource.next(this.isAuthenticated());
      this.username = this.name;
  }  

  register(userRegistration: any) {   
    console.log(userRegistration); 
    return this.http.post(this.configService.authApiURI + '/account', userRegistration).pipe(catchError(this.handleError));
  }
  changePassword(userModel: any,token:string){
    console.log(userModel);
    return this.http.post(this.configService.authApiURI + '/modify', userModel).pipe(catchError(this.handleError));
  }
  getUserRole(name:any){
    return this.http.post(this.configService.authApiURI + '/information', {username:name}).pipe(catchError(this.handleError));
  }
  isAuthenticated(): boolean {
    return this.user != null && !this.user.expired;
  }
  get userId():string{
    if(this.isAuthenticated()){
      let payload:any;
      payload  = decode(this.authorizationHeaderValue);
      return payload.sub;
    }
    return "";
  }
  
  get authorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  get name(): string {
    return this.user != null ? this.user.profile.name : '';
  }
  get email(): string{
    return this.user !=null ? this.user.profile.email:'';
  }
  get role(): string{
    return this.user !=null ? this.userrole:'';
  }

  async signout() {
    await this.manager.signoutRedirect();
  }
  signoutSilent(){
    this.user=null;
  }
}
export function getClientSettings(): UserManagerSettings {
  return {
      authority: 'http://localhost:60970',
      client_id: 'angular_spa',
      redirect_uri: 'http://localhost:4200/auth-callback',
      post_logout_redirect_uri: 'http://localhost:4200/',
      response_type:"id_token token",
      scope:"openid profile email api.read",
      filterProtocolClaims: true,
      loadUserInfo: true,
      automaticSilentRenew: true,
      silent_redirect_uri: 'http://localhost:4200/silent-refresh.html'
  };
}
