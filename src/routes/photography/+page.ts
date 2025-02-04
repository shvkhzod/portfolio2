import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  const posts = import.meta.glob('/src/routes/photography/_posts/*.md');
  const photos = [];

  for (const path in posts) {
    const post = await posts[path]() as { metadata: { [key: string]: any } };
    photos.push({
      ...post.metadata,
      slug: path.split('/').pop()?.replace('.md', ''),
      date: post.metadata.date // Ensure date is included
    });
  }

  return {
    photos: photos.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  };
};