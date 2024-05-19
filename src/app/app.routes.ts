import {Routes} from '@angular/router';
import {MainPageComponent} from "./comps/__pages/main-page/main-page.component";
import {LoginPageComponent} from "./comps/__pages/_PROFILE/login-page/login-page.component";
import {TournamentsPageComponent} from "./comps/__pages/tournaments-page/tournaments-page.component";
import {SandboxPageComponent} from "./comps/__pages/sandbox-page/sandbox-page.component";
import {RegisterPageComponent} from "./comps/__pages/_PROFILE/register-page/register-page.component";
import {ProfilePageComponent} from "./comps/__pages/_PROFILE/profile-page/profile-page.component";
import {CreatePageComponent} from "./comps/__pages/_CREATE/create-page/create-page.component";
import {
  TournamentMainPageComponent
} from "./comps/__pages/_TOURNAMENT/tournament-main-page/tournament-main-page.component";
import {TournamentUploadComponent} from "./comps/__pages/_TOURNAMENT/tournament-upload/tournament-upload.component";
import {TournamentAboutComponent} from "./comps/__pages/_TOURNAMENT/tournament-about/tournament-about.component";

export const routes: Routes = [
  {path: '', component: MainPageComponent},

  {path: 'sandboxes', component: SandboxPageComponent},

  {path: 'tournaments', component: TournamentsPageComponent},
  {
    path: 'tournament/:id', component: TournamentMainPageComponent,
    children: [
      {path: '', redirectTo: 'about', pathMatch: 'prefix'},
      {path: 'about', component: TournamentAboutComponent},
      {path: 'upload', component: TournamentUploadComponent},
      {path: '**', redirectTo: 'about', pathMatch: 'full'},
    ]
  },

  {path: 'create', component: CreatePageComponent},
  {path: 'create/game', component: CreatePageComponent},
  {path: 'create/tournament', component: CreatePageComponent},

  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'profile', component: ProfilePageComponent},
];
