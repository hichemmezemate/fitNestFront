import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class InscriptionService {

  constructor(private http : HttpClient, private router: Router) { }


  createUser(body: any) {
    this.http.post("http://localhost:3000/users", body).subscribe({
      next: data => {
        this.router.navigate(['connexion']);
        return true
      },
      error: error => {
        
        return false
      }
    })
  }
}
