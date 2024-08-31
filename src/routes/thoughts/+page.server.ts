import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

interface Post {
    title: string;
    slug: string;
    subtitle: string;
    category: string;
    date: string;
    // Add other properties as needed
}

export const load: PageServerLoad = async ({ fetch }) => {
    try {
        const response = await fetch('/api/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        const posts: Post[] = await response.json();

        // Extract unique categories
        const categories = [...new Set(posts.map(post => post.category))];

        return {
            posts,
            categories
        };
    } catch (e) {
        console.error("Error loading posts:", e);
        throw error(500, "Error loading posts");
    }
};