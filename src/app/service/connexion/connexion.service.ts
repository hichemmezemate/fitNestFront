import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  constructor(private http : HttpClient, public router: Router) { }

  isLog: boolean = false

  response: any;

  userInfo: any;
  userToken: any;

  private profilInfoURL = 'http://localhost:3000/users/'


  login(body: any): any{
    this.response = this.http.post("http://localhost:3000/auth/login", body)
    return this.response;
  }

  logout() {
    localStorage.removeItem('token');
    this.isLog = false
    this.router.navigate(['/connexion']);
  }

  setResponse() {
    return this.response
  }

  getUserInfo(userId: number, accesToken: string) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accesToken}`
    })
    return this.http.get<any>(this.profilInfoURL+ userId.toString(), { headers: headers })
  }

  setUserInfo() {    
    this.setResponse().subscribe({
      next: (result: any) => {
        this.userToken = result;
        localStorage.setItem('token', this.userToken.access_token.toString())
        this.getUserInfo(this.userToken.user_id, this.userToken.access_token).subscribe({
          next: (res: any) => {
            this.userInfo = res;
            return this.userInfo
          },
          error: () => alert('Erreur de récupération des informations utilisateur')
        })
      },
      error: (error: any) => {
        console.error('Error fetching user token:', error);
      }
    });
  }

  isConnected() { 
    if(this.isLog) {
      return true
    } else {
      return false
    }
  }

  isAdmin(){
    if(this.userInfo != undefined && this.userInfo.role.nom === "Admin") {
      return true
    } else {
      return false
    }
  }
}
