import { AuthGuard } from './core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*Import Components*/
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TeamComponent } from './pages/team/team.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { PublicProfileComponent } from './pages/public-profile/public-profile.component';



const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'my-profile',
    component: UserProfileComponent,
    canActivate: [AuthGuard]
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
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users/:uid',
    component: PublicProfileComponent,
    canActivate: [AuthGuard]
  },

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
  DashboardComponent,
  PublicProfileComponent
];
