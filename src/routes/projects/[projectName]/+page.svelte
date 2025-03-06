<svelte:head>
    {#if project}
        <title>{project.title}</title>
    {/if}
</svelte:head>

<div class={`projectContainer ${currentTheme}`}>
    <div class={`projectWrapper ${currentTheme}`}>
       {#if project} 
       <h1 class={`title ${currentTheme}`}>{project.title}</h1>
       <p class={`date ${currentTheme}`}>{project.date}</p>
       <div class={`projectContent ${currentTheme}`}>
            {@html project.content}
       </div>
       {/if}
    </div>
</div>

<script lang='ts'>
    import { onMount } from 'svelte';
    import { writable, type Writable } from "svelte/store";
	import { theme } from "../../../utils/theme";
	import type { PageData } from '../[projectName]/$types';


    export let data: PageData;
    $: currentTheme = $theme;
    $: project = data.project;

    console.log(data)

    onMount(async () => {
        console.log(data, 'no')
        var projectName = window.location.pathname.split('/')[2];
    });
</script>

<style>
    .dark.projectContainer {
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: black;
        transition: 0.4s ease-in-out;

    }

    .dark.projectContent p {
        color: white;
        opacity: 0.75;
        font-size: 16px;
        margin-top: 8px;
        transition: 0.4s ease-in-out;
    }

    .dark .projectWrapper {
        margin-top: 40px;
        display: flex;
        width: 640px;
        padding: 20px 64px 120px 64px;
        flex-direction: column;
        transition: 0.4s ease-in-out;
    }

    .dark .title {
        color: white;
        font-size: 18px;
        font-weight: 600;
        transition: 0.4s ease-in-out;
    }

    .dark:global( h2) {
        color: white;
        font-size: 18px;
        font-weight: 500;
        transition: 0.4s ease-in-out;
    }

    .dark .date {
        color: white;
        font-size: 14px;
        opacity: 0.65;
        transition: 0.4s ease-in-out;
    }

    .dark .projectContent {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        transition: 0.4s ease-in-out;
    }

 

    .dark :global(p) {
        color: rgb(184, 184, 184);
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        transition: 0.4s ease-in-out;
    }
    .dark :global(.projectContent > p > img ){
        margin-top: 16px;
        width: 100%;
        border-radius: 28px;
        height: auto;
        transition: 0.4s ease-in-out;
    }

    /**Light*/
    .light.projectContainer {
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        transition: 0.4s ease-in-out;

    }

    .light .projectWrapper {
        margin-top: 40px;
        display: flex;
        width: 650px;
        padding: 20px 64px 120px 64px;
        flex-direction: column;
        transition: 0.4s ease-in-out;
    }

    .light .title {
        color: black;
        font-size: 18px;
        font-weight: 600;
        transition: 0.4s ease-in-out;
    }

    .light .headline {
        color: black;
        font-size: 18px;
        font-weight: 500;
        transition: 0.4s ease-in-out;
    }

    .light .date {
        color: black;
        font-size: 14px;
        opacity: 0.65;
        transition: 0.4s ease-in-out;
    }

    .light .projectContent {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        transition: 0.4s ease-in-out;
    }

 

    .light :global(p){
        font-weight: 400;
        color: #595959;
        font-size: 14px;
        line-height: 22px;
        transition: 0.4s ease-in-out;
    }
    .light :global(.projectContent > p > img ){
        margin-top: 16px;
        width: 100%;
        border-radius: 28px;
        height: auto;
        transition: 0.4s ease-in-out;
    }

    .light :global( h2) {
        font-size: 18px;
        color: #000000;
        font-weight: 500;
    }

    @media (max-width: 768px) {
        .light .projectWrapper {
            display: flex;
            flex-direction: column;
            width: 100%;
            padding: 20px;
            transition: 0.4s ease-in-out;
        }

        .dark .projectWrapper {
            display: flex;
            flex-direction: column;
            width: 100%;
            padding: 20px;
            transition: 0.4s ease-in-out;
        }

        .light :global(p) {
            line-height: 24px;
        }

        .dark :global(p) {
            line-height: 24px;
        }
    }
</style>