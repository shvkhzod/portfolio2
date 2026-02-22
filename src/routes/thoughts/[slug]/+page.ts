import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data, fetch }) => {
    // Await the data before returning
    const [nextPost, prevPost] = await Promise.all([
        fetch(`/api/posts/next/${data.post.slug}`).then(r => r.json()).catch(() => null),
        fetch(`/api/posts/prev/${data.post.slug}`).then(r => r.json()).catch(() => null)
    ]);

    return {
        post: data.post,
        layout: {
            fullWidth: true,
        },
        nextPost,  // ✅ Return the actual data, not promises
        prevPost
    };
};