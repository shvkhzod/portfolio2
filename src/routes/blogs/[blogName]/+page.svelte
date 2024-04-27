<div class={`blogContainer ${$currentTheme}`}>
  <div class={`blogWrapper ${$currentTheme}`}>
    {#if blogData}
      <h1 class={`title ${$currentTheme}`}>{blogData.title}</h1>
      <p class={`date ${$currentTheme}`}>{blogData.date}</p>
      <div class="blogContent">
        {#each blogData.content as block}
            <div class="block">
                {#if block.headline}
                <h1>{block.headline}</h1>
            {/if}
            {#if block.paragraph}
                <p>{block.paragraph}</p>
            {/if}
            {#if block.image}
                <img src={`images/${block.image}.png`} alt={block.image}/>
            {/if}
            </div>
        {/each}
      </div>
    {/if}
  </div>
</div>

<script lang='ts'>
	import { onMount } from 'svelte';
    import type {BlogData} from '../blogsData';
    import {blogsData} from '../blogsData';
    import { writable, type Writable } from "svelte/store";
	import { theme } from "../../../utils/theme";

    let currentTheme:Writable<string> = writable($theme)

    theme.subscribe(value => {
        currentTheme.set(value);
    })


    let blogData: BlogData | undefined;



    onMount(async () => {
        var blogName = window.location.pathname.split('/')[2];
        blogData = blogsData.find(blog => blog.url === blogName);
    });
</script>

<svelte:head>
    <title>{blogData?.title}</title>
</svelte:head>

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
    }
    .dark .block h1 {
        color: white;
        font-size: 18px;
        transition: 0.4s ease-in-out;
        
    }

    .dark .block p {
    color: white;
    opacity: 0.75;
    font-size: 16px;
    margin-top: 8px;
    transition: 0.4s ease-in-out;
}

    .dark .block img {
        width: 100%;
        margin-top: 20px;
        transition: 0.4s ease-in-out;
}

    .dark .block {
        margin-top: 20px;
        transition: 0.4s ease-in-out;
    }

    /*Light */

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
    }
    .light .block h1 {
        color: black;
        font-size: 18px;
        transition: 0.4s ease-in-out;
        
    }

    .light .block p {
    color: black;
    opacity: 0.75;
    font-size: 16px;
    margin-top: 8px;
    transition: 0.4s ease-in-out;
}

    .light .block img {
        width: 100%;
        margin-top: 20px;
        transition: 0.4s ease-in-out;
}

    .light .block {
        margin-top: 20px;
        transition: 0.4s ease-in-out;
    }

    
</style>