import { Injectable } from '@angular/core';
import { ConnexionService } from './service/connexion/connexion.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInStatus = false;

  constructor(private connexionService: ConnexionService) { }

  login(): void {
    this.isLoggedInStatus = true;
  }

  logout(): void {
    this.isLoggedInStatus = false;
  }

  isLoggedIn(): boolean {
    return this.connexionService.isConnected();
  }
}
