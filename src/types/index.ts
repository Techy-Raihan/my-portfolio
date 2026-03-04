// Portfolio TypeScript types

export interface Skill {
    name: string;
    level: number;
}

export interface SkillCategory {
    category: string;
    icon: string;
    color: string;
    skills: Skill[];
}

export interface ExperienceNode {
    label: string;
    type: string;
    icon: string;
}

export interface Experience {
    id: string;
    company: string;
    role: string;
    duration: string;
    location: string;
    client: string;
    clientDesc: string;
    color: string;
    problem: string;
    solution: string[];
    impact: string[];
    techStack: string[];
}

export interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    features: string[];
    github: string;
    color: string;
    icon: string;
    category: string;
}

export interface Metric {
    value: number;
    suffix: string;
    label: string;
    description: string;
}

export interface SystemDesignBlock {
    id: string;
    title: string;
    description: string;
    color: string;
    nodes: ExperienceNode[];
}

export type NavItem = {
    label: string;
    href: string;
};
