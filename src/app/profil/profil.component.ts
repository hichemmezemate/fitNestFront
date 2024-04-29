import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../service/connexion/connexion.service';
import { ProfilService } from '../service/profil/profil.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  userToken: any;
  userInfo: any;

  constructor(private connexionService: ConnexionService, private profilService: ProfilService) {}

  ngOnInit() {
    console.log("here" ,this.connexionService.userInfo);
    
    this.userInfo = this.connexionService.userInfo
  }
}
