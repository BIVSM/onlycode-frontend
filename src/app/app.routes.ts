import {Routes} from '@angular/router';
import {MainPageComponent} from "./comps/__pages/main-page/main-page.component";
import {LoginPageComponent} from "./comps/__pages/_PROFILE/login-page/login-page.component";
import {TournamentsPageComponent} from "./comps/__pages/tournaments-page/tournaments-page.component";
import {SandboxPageComponent} from "./comps/__pages/sandbox-page/sandbox-page.component";
import {RegisterPageComponent} from "./comps/__pages/_PROFILE/register-page/register-page.component";
import {ProfilePageComponent} from "./comps/__pages/_PROFILE/profile-page/profile-page.component";
import {SolutionPageComponent} from "./comps/__pages/solution-page/solution-page.component";
import {CreatePageComponent} from "./comps/__pages/_CREATE/create-page/create-page.component";

export const routes: Routes = [
  {path: '', component: MainPageComponent},

  {path: 'sandboxes', component: SandboxPageComponent},
  {path: 'tournaments', component: TournamentsPageComponent},
  {path: 'tournament/upload/:id', component: SolutionPageComponent},

  {path: 'create', component: CreatePageComponent},
  {path: 'create/game', component: CreatePageComponent},
  {path: 'create/tournament', component: CreatePageComponent},

  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'profile', component: ProfilePageComponent},
];
