import { User } from './user';


export interface Project {
    id?: string;
    userID?: string;
    name: string;
    description: string;
    deadlines?: Deadline[];
    members?: string[];
}

export interface Deadline {
    name: string;
    date: string;
    tasks: Task[];
}

export interface Task {
    name: string;
    completed?: boolean;
    userAssigned: string; 
}

export interface MemberProgress {
    member: User;
    completedTasks: Task[];
    pendingTasks: Task[];
}





