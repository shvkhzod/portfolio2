import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import type { Project } from '$lib/types'

async function getProjects(): Promise<Project[]> {
    let projects: Project[] = [];

    const paths = import.meta.glob('/src/lib/projects/*.md', { eager: true })

    for (const path in paths) {
        const file = paths[path]
        const url = path.split('/').at(-1)?.replace('.md', '')

        if (file && typeof file === 'object' && 'metadata' in file && url) {
            const metadata = file.metadata as Omit<Project, 'url' | 'content'>
            const project = { ...metadata, url } as Project
            projects.push(project)
        }
    }

    projects = projects.sort((first, second) =>
        new Date(second.date).getTime() - new Date(first.date).getTime()
    )

    return projects
}

export const GET: RequestHandler = async () => {
    const projects = await getProjects()
    return json(projects)
}