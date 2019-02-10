import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AuthGuard } from './core/auth.guard';
import { AuthService } from './core/auth.service';
import { EmptyNavbarComponent } from './empty-navbar/empty-navbar.component';
import { CardTasksComponent } from './card-components/card-tasks/card-tasks.component';
import { CardDeadlinesComponent } from './card-components/card-deadlines/card-deadlines.component';
import { CardTeamComponent } from './card-components/card-team/card-team.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectService } from './core/project.service';
import { ProjectCreatorComponent } from './pages/projects/project-creator/project-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    EmptyNavbarComponent,
    CardTasksComponent,
    CardDeadlinesComponent,
    CardTeamComponent,
    ProjectsComponent,
    ProjectCreatorComponent,
  ],
  providers: [AuthGuard, AuthService, ProjectService],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    CoreModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
