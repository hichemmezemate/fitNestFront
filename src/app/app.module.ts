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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
