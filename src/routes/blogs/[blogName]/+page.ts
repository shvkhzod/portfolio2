import {blogsData} from "../blogsData"

interface LoadParams {
    params: {
        blogName: string;
    };
}

export function load({ params }: LoadParams) {
    const { blogName } = params;
    console.log(blogName)

    /**
     * Finds the blog data based on the given blog name.
     * @param {string} blogName - The name of the blog.
     * @returns {BlogData | undefined} - The blog data if found, otherwise undefined.
     */
    const blogData = blogsData.find(blog => blog.url === blogName);
    console.log(blogData)
    
    return {
        props: {
            blogData
        }
    }
}