import { Injectable } from '@angular/core';
import { Exercice } from '../../interface/exercice';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExercicesService {

  constructor(private http: HttpClient) { }

  private exerciceURL = 'http://localhost:3000/exercices'

  getExercices(): Observable<Exercice[]> {
    return this.http.get<Exercice[]>(this.exerciceURL)
  }
}
