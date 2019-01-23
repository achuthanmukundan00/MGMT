import { AuthGuard } from './core/auth.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*Import Components*/
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamComponent } from './team/team.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignInComponent } from './login/sign-in/sign-in.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'login',
    component: UserProfileComponent
  },
  {
    path: 'team',
    component: TeamComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  LandingPageComponent,
  UserProfileComponent,
  TeamComponent,
  DashboardComponent
];
