import { posts } from '$lib/server/posts';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Post } from '$lib/types';

export const load: PageServerLoad = async ({ params }) => {
    const post = posts.find((post: Post) => params.slug === post.slug);

    if (!post) {
        throw error(404, 'Post not found');
    }
    
    // Return only necessary data
    return {
        post: {
            title: post.title,
            date: post.date,
            content: post.content,
            // Add other necessary fields
        }
    };
};