import { Component, OnInit } from "@angular/core";
import { ProjectService } from "../../core/services/project.service";
import { Project, Task, MemberProgress } from "src/app/models/project";
import { AuthService } from "../../core/authentication/auth.service";
import { User } from "src/app/models/user";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.scss"]
})
export class TeamComponent implements OnInit {
  members: User[];
  currentProject: Project;
  currentProjectSelected?: Boolean;
  memberProgressArray: MemberProgress[] = [];

  constructor(
    public auth: AuthService,
    public projectService: ProjectService,
    public afs: AngularFirestore
  ) {}

  ngOnInit() {
    this.currentProject = this.projectService.getCurrentProject();
    console.log(this.currentProject);
    if (this.currentProject) {
      this.currentProjectSelected = true;
      this.projectService.getMembers();
      this.members = this.projectService.membersUserArray;
      this.projectService.getMemberProgress();
      this.memberProgressArray = this.projectService.memberProgressArray;
      console.log(this.memberProgressArray);
    } else {
      this.currentProjectSelected = false;
    }
  }

  removeMember(i) {
    this.members.splice(i, 1);
    this.projectService.currentProject.members.splice(i, 1);
    this.projectService.updateProject(this.projectService.currentProject);
  }

}

/**
 * The current task state should be a way to represent which users have completed and pending tasks so that this
 * may be displayed on the team screen.
 *
 * ngFor let member of membersUserArray, sure. that works. Now i need an algorithm to figure out how many completed tasks and/or
 * pending tasks each user has.
 *
 * loop through member user array and make a new array of memberprogress.
 * and take info from the task list.
 */
