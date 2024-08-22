import type { Post } from "$lib/types";


type GlobEntry = {
    metadata: Omit<Post, 'slug'>;
    default: { render: () => { html: string } };
};

// Function to generate slug from filepath
function generateSlug(filepath: string): string {
    const filename = filepath.split('/').pop() || '';
    return filename.replace(/\.[^/.]+$/, "");
}

// Get all posts and add metadata
export const posts: Post[] = Object.entries(
    import.meta.glob<GlobEntry>('/src/lib/posts/**/*.md', { eager: true })
)
.map(([filepath, { metadata, default: component }]) => ({
    ...metadata,
    slug: generateSlug(filepath),
    content: component.render().html,
    categories: metadata.categories || [],
    published: metadata.published !== false,
    keywords: metadata.keywords || "",
}))
.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

console.log("Posts loaded:", posts.length);