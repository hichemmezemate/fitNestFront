import { Component } from '@angular/core';
import { ExercicesService } from '../service/exercices/exercices.service';
import { Exercice } from '../interface/exercice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.component.html',
  styleUrl: './exercices.component.css'
})
export class ExercicesComponent {
  exercices: Exercice[] = []

  constructor(private exerciceService: ExercicesService, private router: Router) {
    
  }

  ngOnInit() {
    this.exerciceService.getExercices().subscribe(
      (data: Exercice[]) => {
        this.exercices = data;
        
      },
      error => {
        console.error('Error fetching data: ', error);
      }
    );
  }

  navigateToDetail(exercice: any) {
    this.router.navigate(['/exerciceDetail', exercice.id]);
  }
}
