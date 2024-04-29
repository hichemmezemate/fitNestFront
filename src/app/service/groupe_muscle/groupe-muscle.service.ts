import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exercice } from '../../interface/exercice';
import { GroupeMuscle } from '../../interface/groupe-muscle';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupeMuscleService {

  constructor(private http: HttpClient) { }

  private groupeURL = "http://localhost:3000/muscle-groupe"

  getMuscleGroupe(): Observable<GroupeMuscle[]> {
    return this.http.get<GroupeMuscle[]>(this.groupeURL)
  }
}
