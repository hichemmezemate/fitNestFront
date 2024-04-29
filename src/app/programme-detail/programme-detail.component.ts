import { Component } from '@angular/core';
import { Programme } from '../interface/programme';
import { ProgrammesService } from '../service/programmes/programmes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-programme-detail',
  templateUrl: './programme-detail.component.html',
  styleUrl: './programme-detail.component.css'
})
export class ProgrammeDetailComponent {
  id: string | null = null;

  constructor(private route: ActivatedRoute, private programmeService: ProgrammesService, private  router: Router) {}

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

}
