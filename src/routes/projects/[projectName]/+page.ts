import type { ProjectData } from "../projectsData";
import  {projectsData}  from "../projectsData";

interface LoadParams {
    params: {
        projectName: string;
    };

}


export function load({params}: LoadParams) {
    const {projectName} = params;
    console.log(projectName)

    const projectData: ProjectData | undefined = projectsData.find(project => project.url === projectName);

    if(projectData === undefined) {
        return {
            status: 404
        }
    } else {
        return {
            props: {
                projectData
            }
        }
    }
}