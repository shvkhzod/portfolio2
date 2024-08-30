import { json } from '@sveltejs/kit';
import { posts } from '$lib/server/posts';

export async function GET({ params }) {
    const currentIndex = posts.findIndex(post => post.slug === params.slug);
    const prevPost = posts[currentIndex - 1];

    if (prevPost) {
        return json({
            slug: prevPost.slug,
            title: prevPost.title
        });
    }

    return json(null);
}