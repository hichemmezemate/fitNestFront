import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Programme } from '../../interface/programme';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProgrammesService {

  constructor(private http: HttpClient, private router: Router) { }

  private programmeURL = 'http://localhost:3000/programmes'

  getProgrammes(): Observable<Programme[]> {
    return this.http.get<Programme[]>(this.programmeURL)
  }

  getProgrammeInfo(id: number): Observable<Programme> {
    return this.http.get<Programme>(this.programmeURL+'/'+id)
  }

  createProgramme(body: any) {
    this.http.post(this.programmeURL, body).subscribe({
      next: data => {
        this.router.navigate(["mes-programmes"])
        return true
      },
      error: error => {
        return false
      }
    })
  } 
}
