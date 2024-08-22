<script lang="ts">
    import BlogItem from '../../components/blogItem.svelte';
    import { writable, type Writable } from "svelte/store";
    import { theme } from "../../utils/theme";
    import type { PageData } from './$types';
    import { formatDate } from '$lib/utils';

    export let data: PageData;

    $: currentTheme = $theme;
</script>

<svelte:head>
    <title>Blog Posts</title>
</svelte:head>

<div class={`blogsWrap ${currentTheme}`}>
    <div class={`blogsContainer ${currentTheme}`}>
        <div class={`blogList ${currentTheme}`}>
            {#each data.posts as post}
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
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        transition: 0.4s ease-in-out;
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
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        transition: 0.4s ease-in-out;
    }

    .light a {
        text-decoration: none;
        transition: 0.4s ease-in-out;
    }
</style>