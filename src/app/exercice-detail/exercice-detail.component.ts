import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExercicesService } from '../service/exercices/exercices.service';
import { Exercice } from '../interface/exercice';
import { ConnexionService } from '../service/connexion/connexion.service';

@Component({
  selector: 'app-exercice-detail',
  templateUrl: './exercice-detail.component.html',
  styleUrl: './exercice-detail.component.css'
})
export class ExerciceDetailComponent {
  id: string | null = null;

  constructor(private route: ActivatedRoute, public exerciceService: ExercicesService, public connexionService: ConnexionService, private router: Router) {}

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

  deleteExercice(exercice: any) {
    if(confirm("Voulez vous supprimer l'utilisateur " + exercice.nom_exercice)) {
      this.exerciceService.deleteExercice(exercice.id).subscribe({
        next: (result: any) => {
          alert('Suppression Reussie');
          this.router.navigate(['/exercices'])
        },
        error: (error: any) => {
          alert('Suppression Echouée');
        }
      })
    }
  }

  navigateToDetail(exercice: any) {
    this.router.navigate(['/exerciceDashboard', exercice.id]);
  }



}
