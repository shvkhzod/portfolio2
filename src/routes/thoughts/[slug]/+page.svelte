<script lang="ts">
    import { onMount } from 'svelte';
    import type { PageData } from './$types';
    import { theme } from "../../../utils/theme";
    import type { Post } from '$lib/types';
    import { browser } from '$app/environment';

    export let data: PageData;

    $: currentTheme = $theme;
    $: post = data.post as Post;

    let content: string;
    console.log(data)


    onMount(() => {
        if (browser) {
            content = post.content;
        }
    });
</script>

<svelte:head>
    <!-- Title and Basic Meta Tags -->
    <title>{post.title}</title>
    <meta name="description" content={post.subtitle}>
    <meta name="keywords" content={post.keywords}>
    <meta name="author" content={post.author}>

    <!-- Viewport for Responsive Design -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Robots Meta Tag -->
    <meta name="robots" content="index, follow">

    <!-- Canonical URL -->
    <link rel="canonical" href={`https://shakhzod.co/thoughts/${post.slug}`}>

    <!-- Open Graph Tags -->
    <meta property="og:title" content={post.title}>
    <meta property="og:description" content={post.subtitle}>
    <meta property="og:type" content="article">
    <meta property="og:url" content={`https://shakhzod.co/thoughts/${post.slug}`}>
    <meta property="og:image" content={post.thumbnail}>
    <meta property="article:published_time" content={post.date}>

    <!-- Twitter Card Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content={post.title}>
    <meta name="twitter:description" content={post.subtitle}>
    <meta name="twitter:image"content={post.thumbnail}>
</svelte:head>
<p>{post.thumbnail}</p>
<div class={`blogContainer ${currentTheme}`}>
    <div class={`blogWrapper ${currentTheme}`}>
        {#if post}
            <h1 class={`title ${currentTheme}`}>{post.title}</h1>
            <p class={`date ${currentTheme}`}>{post.date}</p>
            <div class="blogContent">
                {#if browser}
                    {@html content}
                {:else}
                    <p>Loading...</p>
                {/if}
            </div>
        {/if}
    </div>
</div>

<style>
    .dark.blogContainer {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: black;
        min-height: 100vh;
        transition: 0.4s ease-in-out;
        padding-bottom: 120px;
    }

    .dark .blogWrapper {
        margin-top: 100px;
        display: flex;
        width: 650px;
        padding: 20px 64px;
        flex-direction: column;
        transition: 0.4s ease-in-out;
    }

    .dark .title {
        color: white;
        font-size: 18px;
        font-weight: 500;
        transition: 0.4s ease-in-out;
    }

    .dark .date {
        color: white;
        opacity: 0.55;
        font-size: 14px;
        font-weight: 500;
        transition: 0.4s ease-in-out;
        margin-bottom: 20px;
        margin-top: 4px;
    }

    .dark :global(.blogContent ) {
        display: flex;
        flex-direction: column;
        gap: 20px
    }

    .dark :global(.blogContent h2) {
        color: white;
        font-weight: 500;
        font-size: 20px;
        transition: 0.4s ease-in-out;
    }

    .dark :global(.blogContent p) {
        color: #d8d8d8;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        transition: 0.4s ease-in-out;
    }

    .dark :global(.blogContent img) {
        width: 100%;
        margin-top: 20px;
        transition: 0.4s ease-in-out;
        border-radius: 16px;
    }

    /* Light */
    .light.blogContainer {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        min-height: 100vh;
        transition: 0.4s ease-in-out;
        padding-bottom: 120px;
    }

    .light .blogWrapper {
        margin-top: 100px;
        display: flex;
        width: 650px;
        padding: 20px 64px; 
        flex-direction: column;
        transition: 0.4s ease-in-out;
    }

    .light .title {
        color: black;
        font-size: 18px;
        font-weight: 500;
        transition: 0.4s ease-in-out;
    }

    .light .date {
        color: black;
        font-weight: 500;
        opacity: 0.55;
        font-size: 14px;
        transition: 0.4s ease-in-out;
        margin-top: 4px;
        margin-bottom: 20px;
    }

    .light :global(.blogContent h2) {
        color: black;
        font-weight: 500;
        font-size: 20px;
        transition: 0.4s ease-in-out;
    }

    .light :global(.blogContent) {
        display:flex;
        flex-direction: column;
        gap: 20px;
    }

    .light :global(.blogContent p) {
        color: #808080;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        transition: 0.4s ease-in-out;
    }

    .light :global(.blogContent img) {
        width: 100%;
        margin-top: 20px;
        transition: 0.4s ease-in-out;
        border-radius: 16px;
    }

    @media (max-width: 768px) {
        .light .blogWrapper {
            width: 100%;
            padding: 20px;
            margin-top: 20px;
        }

   

        .dark .blogWrapper {
            margin-top: 20px;
            width: 100%;
            padding: 20px;
        }
        .light :global(.blogContent p) {
            line-height: 24px;
    }

    .dark :global(.blogContent p) {
        line-height: 24px;
    }

     
    }
</style>