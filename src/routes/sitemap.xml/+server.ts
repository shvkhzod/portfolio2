import { posts } from '$lib/server/posts';
import { projects } from '$lib/server/projects';


export async function GET() {
    const pages = [
        '',
        ...posts.map(post => `blog/${post.slug}`),
        ...projects.map(project => `projects/${project.url}`),
        'books'
    ];

    const sitemap = `
        <?xml version="1.0" encoding="UTF-8" ?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
                .map(
                    page => `
                        <url>
                            <loc>https://shakhzod.co/${page}</loc>
                            <changefreq>daily</changefreq>
                            <priority>0.7</priority>
                        </url>
                    `
                )
                .join('')}
        </urlset>`.trim();

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml'
        }
    });
}