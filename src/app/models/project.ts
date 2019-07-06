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
    usersAssigned?: string[]; 
}
