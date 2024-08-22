<script lang="ts">
    import { onMount } from 'svelte';
    import type { PageData } from './$types';
    import { theme } from "../../../utils/theme";

    export let data: PageData;

    $: currentTheme = $theme;
    $: post = data.post;
</script>

<svelte:head>
    <title>{post.title}</title>
</svelte:head>

<div class={`blogContainer ${currentTheme}`}>
    <div class={`blogWrapper ${currentTheme}`}>
        {#if post}
            <h1 class={`title ${currentTheme}`}>{post.title}</h1>
            <p class={`date ${currentTheme}`}>{post.date}</p>
            <div class="blogContent">
                {@html post.content}
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
        padding: 20px;
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
        color: white;
        opacity: 0.75;
        font-size: 16px;

        transition: 0.4s ease-in-out;
    }

    .dark :global(.blogContent img) {
        width: 100%;
        margin-top: 20px;
        transition: 0.4s ease-in-out;
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
        padding: 20px;
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
        color: black;
        opacity: 0.75;
        font-size: 16px;
        transition: 0.4s ease-in-out;
    }

    .light :global(.blogContent img) {
        width: 100%;
        margin-top: 20px;
        transition: 0.4s ease-in-out;
    }
</style>