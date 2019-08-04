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
  currentProject: Project = this.projectService.currentProject;
  currentProjectSelected: Boolean;
  membersProgress: MemberProgress[] = [];
  tasks: Task[];

  memberProgress: MemberProgress = {
    member: null,
    completedTasks: [],
    pendingTasks: []
  };

  constructor(
    public auth: AuthService,
    public projectService: ProjectService,
    public afs: AngularFirestore
  ) {}

  ngOnInit() {
    if (this.currentProject) {
      this.currentProjectSelected = true;
      this.projectService.getMembers();
      this.members = this.projectService.membersUserArray;
      this.projectService.getTasks();
      this.tasks = this.projectService.tasks;
      this.getMemberProgress();
    } else {
      this.currentProjectSelected = false;
    }
  }

  removeMember(i) {
    this.members.splice(i, 1);
    this.projectService.currentProject.members.splice(i, 1);
    this.projectService.updateProject(this.projectService.currentProject);
  }

  getMemberProgress() {
    completed: false;

    for(let i = 0; i < this.members.length; i++) {
      this.memberProgress.member = this.members[i];
      console.log(this.memberProgress.member);

      for(let j = 0; j < this.tasks.length; j++) {
        if(this.tasks[i].userAssigned == this.memberProgress.member.displayName) {
          if(this.tasks[i].completed == true) {
            this.memberProgress.completedTasks.push(this.tasks[i]);
          }else if(this.tasks[i].completed == false) {
            this.memberProgress.completedTasks.push(this.tasks[i]);
          }
        }
      }
    }

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
