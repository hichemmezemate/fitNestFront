import { Component } from '@angular/core';
import { GroupeMuscle } from '../interface/groupe-muscle';
import { GroupeMuscleService } from '../service/groupe_muscle/groupe-muscle.service';
import { ExercicesService } from '../service/exercices/exercices.service';

@Component({
  selector: 'app-add-exercice',
  templateUrl: './add-exercice.component.html',
  styleUrl: './add-exercice.component.css'
})
export class AddExerciceComponent {
  groupeMuscle: GroupeMuscle[] = []

  constructor(private groupeMuscleService: GroupeMuscleService, private exerciceService: ExercicesService) {
    
  }

  ngOnInit() {
    this.groupeMuscleService.getMuscleGroupe().subscribe(
      (data: GroupeMuscle[]) => {
        this.groupeMuscle = data;
        
      },
      error => {
        console.error('Error fetching data: ', error);
      }
    );
  }

  submit(data: any) {
    this.exerciceService.addExercice(data)
  }
}
