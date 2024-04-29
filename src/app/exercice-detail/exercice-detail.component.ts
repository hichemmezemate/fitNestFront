import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExercicesService } from '../service/exercices/exercices.service';
import { Exercice } from '../interface/exercice';

@Component({
  selector: 'app-exercice-detail',
  templateUrl: './exercice-detail.component.html',
  styleUrl: './exercice-detail.component.css'
})
export class ExerciceDetailComponent {
  id: string | null = null;

  constructor(private route: ActivatedRoute, private exerciceService: ExercicesService) {}

  exercice: any

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    let exerciceId = +this.id!;

    this.exerciceService.getExerciceInfo(exerciceId).subscribe(
      (data: Exercice) => {
        this.exercice = data;
      },
      error => {
        console.error('Error fetching data: ', error);
      }
    );

  }



}
