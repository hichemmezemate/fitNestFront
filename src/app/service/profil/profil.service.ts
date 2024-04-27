import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private http: HttpClient) { }


  userInfo: any;

  setUserInfo(userData: any){
    this.userInfo = userData;
  }
  getUser() {
    return this.userInfo;
  }


 
}
