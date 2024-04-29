import { Component } from '@angular/core';
import { GestionUtilisateursService } from '../service/gestionUtilisateurs/gestion-utilisateurs.service';
import { User } from '../interface/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-utilisateurs',
  templateUrl: './gestion-utilisateurs.component.html',
  styleUrl: './gestion-utilisateurs.component.css'
})
export class GestionUtilisateursComponent {

  constructor(private  gestionUtilisateurService : GestionUtilisateursService, private router: Router) {}

  users: any

  ngOnInit() {
    this.gestionUtilisateurService.getUsers().subscribe(
      (data: User[]) => {
        this.users = data;
      },
      error => {
        console.error('Error fetching data: ', error);
      }
    );
  }

  navigateToDetail(user: any) {
    this.router.navigate(['/userDashboard', user.id]);
  }

}
