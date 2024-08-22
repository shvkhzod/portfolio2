import type { PageServerLoad } from './$types';
import { projects } from '$lib/server/projects';

export const load: PageServerLoad = async ({ params }) => {
    const { projectName } = params;
    console.log("Projects:", projects);
    console.log("Searching for project:", projectName);
    console.log("Available projects:", projects.map(p => p.url));
    
    const project = projects.find(p => p.url === projectName);

    ;
    return { project };
};