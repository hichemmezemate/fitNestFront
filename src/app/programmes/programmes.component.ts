import { Component } from '@angular/core';
import { Programme } from '../interface/programme';
import { ProgrammesService } from '../service/programmes/programmes.service';
import { ConnexionService } from '../service/connexion/connexion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programmes',
  templateUrl: './programmes.component.html',
  styleUrl: './programmes.component.css'
})
export class ProgrammesComponent {
  programmes: Programme[] = []

  constructor(private programmesService: ProgrammesService, private router: Router) {
    
  }

  ngOnInit() {
    this.programmesService.getProgrammes().subscribe(
      (data: Programme[]) => {
        this.programmes = data;
      },
      error => {
        console.error('Error fetching data: ', error);
      }
    );
  }

  navigateToDetail(program: any) {
    this.router.navigate(['/programmeDetail', program.id]);
  }



}
