	// src/routes/blog/[slug]/page.ts

import type { Load } from "@sveltejs/kit";

    export const load:Load = async ({data}) => {
        // load the markdown file based on slug
       if(data) {
        const component = await import(`../../../lib/posts/${data.post.slug}.md`);

        return {
            post: data.post,
            component: component.default,
            layout: {
            fullWidth: true,
            },
        };
       }
    };
