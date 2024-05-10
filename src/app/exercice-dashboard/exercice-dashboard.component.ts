import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExercicesService } from '../service/exercices/exercices.service';
import { Exercice } from '../interface/exercice';
import { GroupeMuscleService } from '../service/groupe_muscle/groupe-muscle.service';
import { GroupeMuscle } from '../interface/groupe-muscle';

@Component({
  selector: 'app-exercice-dashboard',
  templateUrl: './exercice-dashboard.component.html',
  styleUrl: './exercice-dashboard.component.css'
})
export class ExerciceDashboardComponent {
  id: string | null = null;
  groupeMuscle: GroupeMuscle[] = []

  constructor(private route: ActivatedRoute, private exerciceService: ExercicesService, private router: Router, private groupeMuscleService: GroupeMuscleService) {}

  exerciceInfo: any


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    let userId = +this.id!;

    this.exerciceService.getExerciceInfo(userId).subscribe(
      (data: Exercice) => {
        this.exerciceInfo = data;
        
      },
      error => {
        alert(error);
      }
    );
    this.groupeMuscleService.getMuscleGroupe().subscribe(
      (data: GroupeMuscle[]) => {
        this.groupeMuscle = data;
        
      },
      error => {
        console.error('Error fetching data: ', error);
      }
    );
  }

  onSelectionChange(option: any){
    option.selected = !option.selected;
  }

  submit(data: any) {
    data.id = this.exerciceInfo.id
    this.exerciceService.updateExercice(data).subscribe({
      next: (result: any) => {
        this.router.navigate(['/exercices']);
      },
      error: (error: any) => {
        alert('Update failed:');
      }
    })
  }

}
