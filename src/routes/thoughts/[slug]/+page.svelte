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

    onMount(() => {
        if (browser) {
            content = post.content;
        }
    });
</script>

<svelte:head>
    <title>{post.title}</title>
    <meta name="description" content={post.subtitle}>
    <meta name="keywords" content={post.keywords}>
    <meta name="author" content={post.author}>
    <meta property="og:title" content={post.title}>
    <meta property="og:description" content={post.subtitle}>
    <meta property="og:type" content="article">
    <meta property="article:published_time" content={post.date}>
</svelte:head>

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
        width: 640px;
        padding: 20px 28px;
        flex-direction: column;
        transition: 0.4s ease-in-out;
    }

    .dark .title {
        color: white;
        font-size: 24px;
        transition: 0.4s ease-in-out;
    }

    .dark .date {
        color: white;
        opacity: 0.55;
        font-size: 16px;
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
        font-weight: 550;
        font-size: 24px;
        transition: 0.4s ease-in-out;
    }

    .dark :global(.blogContent p) {
        color: #d8d8d8;
        font-size: 16px;
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
        width: 640px;
        padding: 20px 28px;
        flex-direction: column;
        transition: 0.4s ease-in-out;
    }

    .light .title {
        color: black;
        font-size: 24px;
        transition: 0.4s ease-in-out;
    }

    .light .date {
        color: black;
        opacity: 0.55;
        font-size: 16px;
        transition: 0.4s ease-in-out;
        margin-top: 4px;
        margin-bottom: 20px;
    }

    .light :global(.blogContent h2) {
        color: black;
        font-weight: 550;
        font-size: 24px;
        transition: 0.4s ease-in-out;
    }

    .light :global(.blogContent) {
        display:flex;
        flex-direction: column;
        gap: 20px;
    }

    .light :global(.blogContent p) {
        color: #555555;
        font-size: 16px;
        transition: 0.4s ease-in-out;
    }

    .light :global(.blogContent img) {
        width: 100%;
        margin-top: 20px;
        transition: 0.4s ease-in-out;
        border-radius: 16px;
    }
</style>