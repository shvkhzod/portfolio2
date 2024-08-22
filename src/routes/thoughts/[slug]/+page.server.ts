import { posts } from '$lib/server/posts';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    console.log(posts, " posts")
    const post = posts.find((post) => params.slug === post.slug);

    if (!post) {
        throw error(404, 'Post not found');
    }

    return { post };
};