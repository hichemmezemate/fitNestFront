import { Injectable } from '@angular/core';
import { Exercice } from '../../interface/exercice';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ExercicesService {

  constructor(private http: HttpClient, private router: Router) { }

  private exerciceURL = 'http://localhost:3000/exercices'

  getExercices(): Observable<Exercice[]> {
    return this.http.get<Exercice[]>(this.exerciceURL)
  }

  getExerciceInfo(id: number): Observable<Exercice> {
    return this.http.get<Exercice>(this.exerciceURL+'/'+id)
  }

  addExercice(body: Exercice) {
    return this.http.post(this.exerciceURL, body).subscribe({
      next: data => {
        this.router.navigate(["exercices"]);
      },
      error: error => {
        alert(error)
      }
    })
  }
}
