import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/header/navbar/navbar.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthService } from './core/authentication/auth.service';
import { CardTasksComponent } from './components/card-components/card-tasks/card-tasks.component';
import { CardDeadlinesComponent } from './components/card-components/card-deadlines/card-deadlines.component';
import { CardTeamComponent } from './components/card-components/card-team/card-team.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectService } from './core/services/project.service';
import { ProjectCreatorComponent } from './components/project-creator/project-creator.component';
import { NgAisModule } from 'angular-instantsearch';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './core/footer/footer.component';
import { PublicProfileComponent } from './pages/public-profile/public-profile.component';
import { DeadlineCreatorComponent } from './components/deadline-creator/deadline-creator.component';
import { TaskCreatorComponent } from './components/task-creator/task-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    CardTasksComponent,
    CardDeadlinesComponent,
    CardTeamComponent,
    ProjectsComponent,
    ProjectCreatorComponent,
    FooterComponent,
    PublicProfileComponent,
    DeadlineCreatorComponent,
    TaskCreatorComponent,
  ],
  providers: [AuthGuard, AuthService, ProjectService],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    CoreModule,
    NgAisModule.forRoot(),
    CommonModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
