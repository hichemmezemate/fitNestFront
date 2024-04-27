import { Component } from '@angular/core';
import { ExercicesService } from '../service/exercices/exercices.service';
import { Exercice } from '../interface/exercice';

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.component.html',
  styleUrl: './exercices.component.css'
})
export class ExercicesComponent {
  exercices: Exercice[] = []

  constructor(private exerciceService: ExercicesService) {
    
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
}
