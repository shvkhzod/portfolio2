<script lang="ts">
    import { theme } from '../../utils/theme';
    import { writable, type Writable } from 'svelte/store';
    import type { PageData } from './$types';
    import BlogItem from '../../components/BlogItem.svelte'; // Make sure this import is correct

    export let data: PageData;

    let currentTheme: Writable<string> = writable('light');
    let selectedCategory = '';

    $: filteredPosts = selectedCategory 
        ? data.posts.filter(post => post.category === selectedCategory)
        : data.posts;
        
    theme.subscribe((value) => {
        currentTheme.set(value);
    });

    function formatDate(date: string) {
        // Implement your date formatting logic here
        return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }
</script>

<svelte:head>
    <title>Blog Posts</title>
</svelte:head>

<div class={`blogsWrap ${$currentTheme}`}>
    <div class={`blogsContainer ${$currentTheme}`}>
        <div class={`filters ${$currentTheme}`}>
            <select bind:value={selectedCategory} class={$currentTheme}>
                <option value="">All Categories</option>
                {#each data.categories as category}
                    <option value={category}>{category}</option>
                {/each}
            </select>
        </div>
        <div class={`blogList ${$currentTheme}`}>
            {#each filteredPosts as post}
                <a href={`/thoughts/${post.slug}`}>
                    <BlogItem blogTitle={post.title} date={formatDate(post.date)} />
                </a>
            {/each}
        </div>
    </div>
</div>

<style>
    .dark.blogsWrap {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        min-height: 100vh;
        background-color: black;
        transition: 0.4s ease-in-out;
    }

    .dark .blogsContainer {
        display: flex;
        flex-direction: column;
        width: 640px;
        padding: 20px;
        transition: 0.4s ease-in-out;
    }

    .dark .blogList {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 20px;
    }

    .dark a {
        text-decoration: none;
        transition: 0.4s ease-in-out;
    }

    /* Light */
    .light.blogsWrap {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        min-height: 100vh;
        background-color: white;
        transition: 0.4s ease-in-out;
    }

    .light .blogsContainer {
        display: flex;
        flex-direction: column;
        width: 640px;
        padding: 20px;
        transition: 0.4s ease-in-out;
    }

    .light .blogList {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        transition: 0.4s ease-in-out;
    }

    .light a {
        text-decoration: none;
        transition: 0.4s ease-in-out;
    }

    /* Filters styles */
    .filters {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    select {
        padding: 4px 8px;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 550;
        transition: 0.4s ease-in-out;
    }

    .dark select {
        color: black;
        background-color: white;
        border: none;
    }

    .light select {
        color: white;
        background-color: black;
        border: none;
    }
</style>