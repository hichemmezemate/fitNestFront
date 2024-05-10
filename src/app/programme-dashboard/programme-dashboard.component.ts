import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgrammesService } from '../service/programmes/programmes.service';
import { Programme } from '../interface/programme';
import { ExercicesService } from '../service/exercices/exercices.service';
import { Exercice } from '../interface/exercice';

@Component({
  selector: 'app-programme-dashboard',
  templateUrl: './programme-dashboard.component.html',
  styleUrl: './programme-dashboard.component.css'
})
export class ProgrammeDashboardComponent {
  id: string | null = null;

  addedExercices: any[] = []

  exercices: any

  constructor(private route: ActivatedRoute, private programmeService: ProgrammesService, private router: Router, private exerciceService: ExercicesService) {}

  programmeInfo: any


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    let userId = +this.id!;

    console.log(this.id)

    this.programmeService.getProgrammeInfo(userId).subscribe(
      (data: Programme) => {
        this.programmeInfo = data;
        console.log("here")
        
      },
      error => {
        alert(error);
      }
    );
    this.exerciceService.getExercices().subscribe(
      (data: Exercice[]) => {
        this.exercices = data;
        
      },
      error => {
        console.error('Error fetching data: ', error);
      }
    );
  }

  onSelectionChange(option: any){
    option.selected = !option.selected;
    if(option != undefined) {
      delete option.selected
      this.addedExercices.push(option)
    }
  }

  submit(data: any) {
    data.id = this.programmeInfo.id
    data["exercices"] = this.addedExercices
    delete data.selected;
    this.programmeService.updateProgramme(data).subscribe({
      next: (result: any) => {
        this.router.navigate(['/programmeDetail/'+data.id]);
      },
      error: (error: any) => {
        alert('Update failed:');
      }
    })
  }

}
