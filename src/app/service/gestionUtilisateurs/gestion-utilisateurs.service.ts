import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../interface/user';

@Injectable({
  providedIn: 'root'
})
export class GestionUtilisateursService {
  constructor(private http: HttpClient) { }

  private usersURL = 'http://localhost:3000/users'

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersURL)
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.usersURL + '/' + id)
  }


  updateUser(body:any) {
    return this.http.put<User>(this.usersURL, body)
  }
}
