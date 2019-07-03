export interface Project {
    id?: string;
    userID?: string;
    name: string;
    description: string;
    tasks?: string[];
    deadlines?: Deadline[];
    members?: string[];
}

export interface Deadline {
    name: string;
    date: string;
}
