import { Component } from '@angular/core';
import { ConnexionService } from './service/connexion/connexion.service';
import { AuthService } from './auth.service';
import { ProfilService } from './service/profil/profil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fitNest';

  


  constructor(private connexionService: ConnexionService, public authService: AuthService, private profilService: ProfilService) {}

  ngOnInit(){
    document.addEventListener('DOMContentLoaded', function() {
      var navLinks = document.querySelectorAll('.nav-link');
  
      navLinks.forEach(function(navLink) {
          navLink.addEventListener('click', function(event) {
              event.preventDefault(); 
              
              navLinks.forEach(n => n.classList.remove('active'));
              console.log("clicked")
              navLink.classList.add('active');
          });
      });
    });
  }


  isConnected (){
    if(this.connexionService.isConnected()) {
      return true
    } else {
      return false
    }
  }

  isAdmin() {
    if (this.connexionService.isAdmin()) {
      return true
    } else {
      return false
    } 
  }

}

