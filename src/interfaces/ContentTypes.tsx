
export enum Page {
    HOME = "home",
    ABOUT = "about",
    PROJECTS = "projects",
    CONTACT = "contact"
}
export interface Details {
    title: string;
    role?: string;
    duration?: string;
    description: string;
};

export interface Content {
    title: string;
    content?: Content [],
    details?: Details[],
}