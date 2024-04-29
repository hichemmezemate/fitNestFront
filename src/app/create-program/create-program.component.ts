import { Component } from '@angular/core';
import { ProgrammesService } from '../service/programmes/programmes.service';
import { ExercicesService } from '../service/exercices/exercices.service';
import { Exercice } from '../interface/exercice';

@Component({
  selector: 'app-create-program',
  templateUrl: './create-program.component.html',
  styleUrl: './create-program.component.css'
})
export class CreateProgramComponent {
  constructor(private programmeService: ProgrammesService, private exercicesService: ExercicesService) {}

  
  addedExercices: any[] = []
  exercices: any 

  onSelectionChange(option: any) {
    option.selected = !option.selected;
    if(option != undefined) {
      delete option.selected
      this.addedExercices.push(option)
    }
  }

  ngOnInit() {
    this.exercicesService.getExercices().subscribe(
      (data: Exercice[]) => {
        this.exercices = data; 
      },
      error => {
        console.error('Error fetching data: ', error);
      }
    );

  }

  submit(data: any) {
    try {
      data["exercices"] = this.addedExercices
      delete data.selected;
      this.programmeService.createProgramme(data);
      return true
    } catch (error) {
      return false
    }
  }
}
