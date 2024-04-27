// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ConnexionService } from './service/connexion/connexion.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private connexionService: ConnexionService, private router: Router) {}

  canActivate(): boolean {
    if(this.connexionService.isConnected()) {
      return true;
    } else {
      return false
    }
  }
}
