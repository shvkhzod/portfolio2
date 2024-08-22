import type { Project } from '$lib/types'
import type { Post } from '$lib/types'
import type { Book } from '$lib/types' // You'll need to define this type

import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ fetch }) => {
    const [projectResponse, postResponse, bookResponse] = await Promise.all([
        fetch('/api/projects'),
        fetch('/api/posts'),
        fetch('/api/books')
    ])

    const projects: Project[] = await projectResponse.json()
    const posts: Post[] = await postResponse.json()
    const books: Book[] = await bookResponse.json()

    console.log('Projects:', projects)
    console.log('Posts:', posts)
    console.log('Books:', books)

    return { 
        projects: projects.slice(0, 3),
        posts: posts.slice(0, 3),
        books: books.slice(0, 3)
    }
}