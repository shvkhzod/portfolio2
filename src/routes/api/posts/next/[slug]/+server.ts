import { json } from '@sveltejs/kit';
import { posts } from '$lib/server/posts';

export async function GET({ params }) {
    const currentIndex = posts.findIndex(post => post.slug === params.slug);
    const nextPost = posts[currentIndex + 1];

    if (nextPost) {
        return json({
            slug: nextPost.slug,
            title: nextPost.title
        });
    }

    return json(null);
}