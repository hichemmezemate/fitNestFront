import { Component } from '@angular/core';
import { ConnexionService } from '../service/connexion/connexion.service';
import { ProfilService } from '../service/profil/profil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mes-programmes',
  templateUrl: './mes-programmes.component.html',
  styleUrl: './mes-programmes.component.css'
})
export class MesProgrammesComponent {

  userToken: any;
  userProgram: any;

  constructor(private connexionService: ConnexionService, private router: Router) {}

  ngOnInit() {
    this.connexionService.setResponse().subscribe({
      next: (result: any) => {
        this.userToken = result;

        this.connexionService.getUserInfo(this.userToken.user_id, this.userToken.access_token).subscribe({
          next: (userInfoResult: any) => {
            this.userProgram = userInfoResult.programme;
          },
          error: (error: any) => {
            console.error('Error fetching user info:', error);
          }
        });

      },
      error: (error: any) => {
        console.error('Error fetching user token:', error);
      }
    });
  }

  isConnected(){
    if(this.connexionService.isConnected()) {
      return true
    } else {
      return false
    }
  }

  navigateToDetail(program: any) {
    this.router.navigate(['/programmeDetail', program.id]);
  }

}
