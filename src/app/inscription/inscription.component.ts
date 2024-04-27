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
    data['roles'] = [
      {
        "id": 4,
        "nom": "Utilisateur"
      }
    ];
    data['programme'] = [];

    this.inscriptionService.createUser(data)
  }

  
}
