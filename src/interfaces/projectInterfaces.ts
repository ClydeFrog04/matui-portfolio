export interface IProject {
    images: IImage[];
    name: string;
    timeSpent: string;
    numContributors: number;
    role: string;
    description: string;
    stack: string;
    route?: string;
    learnMore?: string;
}

export interface IImage {
    src: string;
    alt: string;
}
