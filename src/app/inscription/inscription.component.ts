import { Component } from '@angular/core';
import { InscriptionService } from '../service/inscription/inscription.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {

  constructor(private inscriptionService: InscriptionService) {}

  submit(data: any) {
    data['role'] = [
      {
        "id": 2,
        "nom": "User"
      }
    ];
    data['programme'] = [];

    this.inscriptionService.createUser(data)
  }

  
}
