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
import { ExerciceDetailComponent } from './exercice-detail/exercice-detail.component';
import { ProgrammeDetailComponent } from './programme-detail/programme-detail.component';
import { GestionUtilisateursComponent } from './gestion-utilisateurs/gestion-utilisateurs.component';
import { AdminGuard } from './admin.guard';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ExerciceDashboardComponent } from './exercice-dashboard/exercice-dashboard.component';
import { ProgrammeDashboardComponent } from './programme-dashboard/programme-dashboard.component';

const routes: Routes = [
  {path: "", component: AccueilComponent},
  {path: "home", component: AccueilComponent},
  {path: "exercices", component: ExercicesComponent},
  {path: "programmes", component: ProgrammesComponent},
  {path: "connexion", component: ConnexionComponent},
  {path: "inscription", component: InscriptionComponent},
  {path: "profil", component: ProfilComponent, canActivate: [AuthGuard]},
  {path: "creer-programme", component: CreateProgramComponent},
  {path: "mes-programmes", component: MesProgrammesComponent, canActivate: [AuthGuard]},
  {path: "addExercice", component: AddExerciceComponent, canActivate: [AuthGuard]},
  {path: "gestionUtilisateurs", component: GestionUtilisateursComponent, canActivate: [AdminGuard]},
  {path: "exerciceDetail/:id", component: ExerciceDetailComponent},
  {path: "programmeDetail/:id", component: ProgrammeDetailComponent},
  {path: "userDashboard/:id", component: UserDashboardComponent, canActivate: [AdminGuard]},
  {path: "exerciceDashboard/:id", component: ExerciceDashboardComponent, canActivate: [AdminGuard]},
  {path: "programmeDashboard/:id", component: ProgrammeDashboardComponent, canActivate: [AdminGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
