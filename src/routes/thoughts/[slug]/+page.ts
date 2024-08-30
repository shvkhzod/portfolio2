	// src/routes/blog/[slug]/page.ts

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data, fetch }) => {
    // Prefetch next and previous posts
    const prefetchNextPost = fetch('/api/posts/next/' + data.post.slug).then(r => r.json());
    const prefetchPrevPost = fetch('/api/posts/prev/' + data.post.slug).then(r => r.json());

    return {
        post: data.post,
        layout: {
            fullWidth: true,
        },
        streamed: {
            nextPost: prefetchNextPost,
            prevPost: prefetchPrevPost
        }
    };
};
