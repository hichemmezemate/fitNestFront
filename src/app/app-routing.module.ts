import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { ProgrammesComponent } from './programmes/programmes.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ProfilComponent } from './profil/profil.component';
import { AuthGuard } from './auth.guard';
import { CreateProgramComponent } from './create-program/create-program.component';
import { MesProgrammesComponent } from './mes-programmes/mes-programmes.component';
import { AddExerciceComponent } from './add-exercice/add-exercice.component';

const routes: Routes = [
  {path: "home", component: AccueilComponent},
  {path: "", component: AccueilComponent},
  {path: "exercices", component: ExercicesComponent},
  {path: "programmes", component: ProgrammesComponent},
  {path: "connexion", component: ConnexionComponent},
  {path: "inscription", component: InscriptionComponent},
  {path: "profil", component: ProfilComponent, canActivate: [AuthGuard]},
  {path: "creer-programme", component: CreateProgramComponent, canActivate: [AuthGuard]},
  {path: "mes-programmes", component: MesProgrammesComponent, canActivate: [AuthGuard]},
  {path: "addExercice", component: AddExerciceComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
