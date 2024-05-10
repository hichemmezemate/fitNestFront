import { Component } from '@angular/core';
import { Programme } from '../interface/programme';
import { ProgrammesService } from '../service/programmes/programmes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnexionService } from '../service/connexion/connexion.service';

@Component({
  selector: 'app-programme-detail',
  templateUrl: './programme-detail.component.html',
  styleUrl: './programme-detail.component.css'
})
export class ProgrammeDetailComponent {
  id: string | null = null;

  constructor(private route: ActivatedRoute, private programmeService: ProgrammesService, private  router: Router, public connexionService: ConnexionService) {}

  exercices: any

  programme: any

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    let programmeId = +this.id!;

    this.programmeService.getProgrammeInfo(programmeId).subscribe(
      (data: Programme) => {
        this.programme = data;
        this.exercices = this.programme.exercices
        
      },
      error => {
        console.error('Error fetching data: ', error);
      }
    );

  }
  
  navigateToDetail(exercice: any) {
    this.router.navigate(['/exerciceDetail', exercice.id]);
  }

  navigateToDashboard(programme: any) {
    this.router.navigate(['/programmeDashboard', programme.id]);
  }

  updateProgramme(exercice: any) {
    this.router.navigate(['/exerciceDetail', exercice.id]);
  }

  deleteProgramme(program: any) {
    console.log(program)
    if(confirm("Voulez vous supprimer le programme " + "'" +program.nom_programme + "'")) {
      this.programmeService.deleteProgramme(program.id).subscribe({
        next: (result: any) => {
          alert('Suppression Reussie');
          this.router.navigate(['/programmes']);
        },
        error: (error: any) => {
          alert('Suppression Echouée');
        }
      })
    }
  }

}
