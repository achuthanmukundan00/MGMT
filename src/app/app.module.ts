import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardTasksComponent } from './card-tasks/card-tasks.component';
import { CardTeamComponent } from './card-team/card-team.component';
import { TeamComponent } from './team/team.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EmptyHeaderComponent } from './empty-header/empty-header.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    CardTasksComponent,
    CardTeamComponent,
    TeamComponent,
    SignInComponent,
    SignUpComponent,
    LandingPageComponent,
    EmptyHeaderComponent,
    UserProfileComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
