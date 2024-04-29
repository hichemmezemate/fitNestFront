import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HttpClientModule } from '@angular/common/http';
import { ExercicesComponent } from './exercices/exercices.component';
import { ProgrammesComponent } from './programmes/programmes.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { FormsModule } from '@angular/forms';
import { ProfilComponent } from './profil/profil.component';
import { CreateProgramComponent } from './create-program/create-program.component';
import { MesProgrammesComponent } from './mes-programmes/mes-programmes.component';
import { AddExerciceComponent } from './add-exercice/add-exercice.component';
import { ExerciceDetailComponent } from './exercice-detail/exercice-detail.component';
import { BsDropdownDirective, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgrammeDetailComponent } from './programme-detail/programme-detail.component';
import { GestionUtilisateursComponent } from './gestion-utilisateurs/gestion-utilisateurs.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ExercicesComponent,
    ProgrammesComponent,
    ConnexionComponent,
    InscriptionComponent,
    ProfilComponent,
    CreateProgramComponent,
    MesProgrammesComponent,
    AddExerciceComponent,
    ExerciceDetailComponent,
    ProgrammeDetailComponent,
    GestionUtilisateursComponent,
    UserDashboardComponent,
  ],
  imports: [
    BsDropdownModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BsDropdownDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
