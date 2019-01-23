import { AuthGuard } from './core/auth.guard';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*Import Components*/
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TeamComponent } from './pages/team/team.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'profile',
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
