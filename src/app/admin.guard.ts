import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ConnexionService } from './service/connexion/connexion.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {

  constructor(private connexionService: ConnexionService) {}

  canActivate(): boolean {
    if(this.connexionService.isConnected() && this.connexionService.isAdmin()) {
      return true;
    } else {
      return false
    }
  }
}
