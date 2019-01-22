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
  // {
  //   path: '',
  //   component: LandingPageComponent
  // },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: '',
    component: UserProfileComponent
  }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
