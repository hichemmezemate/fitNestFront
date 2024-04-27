import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Programme } from '../../interface/programme';

@Injectable({
  providedIn: 'root'
})
export class ProgrammesService {

  constructor(private http: HttpClient) { }

  private programmeURL = 'http://localhost:3000/programmes'

  getProgrammes(): Observable<Programme[]> {
    return this.http.get<Programme[]>(this.programmeURL)
  }

  createProgramme(body: any) {
    this.http.post(this.programmeURL, body).subscribe({
      next: data => {
        return true
      },
      error: error => {
        return false
      }
    })
  } 
}
