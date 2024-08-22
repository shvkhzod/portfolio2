export interface Project {
    title: string;
    subtitle: string;
    date: string;
    url: string;
    content: string;
    next?: Project | null;
    previous?: Project | null;
}

type GlobEntry = {
    metadata: Omit<Project, 'url' | 'content'>;
    default: { render: () => { html: string } };
};

// Function to generate url from filepath
function generateUrl(filepath: string): string {
    const filename = filepath.split('/').pop() || '';
    return filename.replace(/\.[^/.]+$/, "");
}

// Get all projects and add metadata
export const projects: Project[] = Object.entries(
    import.meta.glob<GlobEntry>('/src/lib/projects/**/*.md', { eager: true })
)
.map(([filepath, { metadata, default: component }]) => ({
    ...metadata,
    url: generateUrl(filepath),
    content: component.render().html
}))
.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
.map((project, index, allProjects) => ({
    ...project,
    next: index > 0 ? allProjects[index - 1] : null,
    previous: index < allProjects.length - 1 ? allProjects[index + 1] : null,
}));

console.log("Projects loaded:", projects.length);
console.log("Project URLs:", projects.map(p => p.url));