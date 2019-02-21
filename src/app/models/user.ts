import { Project } from './project';

// Users Collection
export interface User {
    uid: string;
    email: string;
    photoURL: string;
    displayName: string;
    projects?: string[];
}
