import { Component } from '@angular/core';
import { ConnexionService } from '../service/connexion/connexion.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {

  constructor(private connexionService: ConnexionService) {}

  response: any

  submit(data: any) {
    this.connexionService.login(data).subscribe({
      next: (result: any) => {
        this.response = result;
        this.connexionService.isLog = true;
        this.connexionService.router.navigate(['/home']);
      },
      error: (error: any) => {
        console.error('Login failed:', error);
      }
    });
    this.connexionService.setUserInfo()
  }



}
