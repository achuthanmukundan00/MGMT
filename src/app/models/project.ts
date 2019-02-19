export interface Project {
    id?: string;
    userID?: string;
    name: string;
    description: string;
    deadlines?: Deadline[];
}

export interface Deadline {
    id?: string;
    name: string;
    date: string;
    tasks?: string[];
}
