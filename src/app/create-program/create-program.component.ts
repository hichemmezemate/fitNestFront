import { Component } from '@angular/core';
import { ProgrammesService } from '../service/programmes/programmes.service';

@Component({
  selector: 'app-create-program',
  templateUrl: './create-program.component.html',
  styleUrl: './create-program.component.css'
})
export class CreateProgramComponent {
  constructor(private programmeService: ProgrammesService) {}

  submit(data: any) {
    try {
      this.programmeService.createProgramme(data);
      return true
    } catch (error) {
      return false
    }
  }
}
