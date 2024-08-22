export interface Post {
    title: string;
    description: string;
    date: string;
    slug: string;
    published: boolean;
    next?: Post | null;
    previous?: Post | null;
}

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
    content: component.render().html
}))
.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
.map((post, index, allPosts) => ({
    ...post,
    next: index > 0 ? allPosts[index - 1] : null,
    previous: index < allPosts.length - 1 ? allPosts[index + 1] : null,
}));

console.log("Posts loaded:", posts.length);