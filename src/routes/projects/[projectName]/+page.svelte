<div class={`projectContainer ${$currentTheme}`}>
    <div class={`projectWrapper ${$currentTheme}`}>
        {#if projectData}
            <h1 class={`title ${$currentTheme}`}>{projectData.title}</h1>
            <p class={`date ${$currentTheme}`}>{projectData.date}</p>
            <div class={`projectContent ${$currentTheme}`}>
                {#each projectData.content as block}
                    <div class={`block ${$currentTheme}`}>
                        {#if block.headline}
                        <h1 class="headline">{block.headline}</h1>
                        {/if}

                        {#if block.paragraph}
                        <p>{block.paragraph}</p>
                        {/if}

                        
                        {#if block.image}
                            <img src={`/images/${block.image}.webp`} alt="content image"/>
                        {/if}
                    
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</div>

<script lang='ts'>
    import { onMount } from 'svelte';
    import type {ProjectData} from '../projectsData';
    import {projectsData} from '../projectsData';
    let projectData: ProjectData | undefined;

    import { writable, type Writable } from "svelte/store";
	import { theme } from "../../../utils/theme";

    let currentTheme:Writable<string> = writable($theme)

    theme.subscribe(value => {
        currentTheme.set(value);
        console.log("changed in component")
    })

    onMount(async () => {
        var projectName = window.location.pathname.split('/')[2];
        projectData = projectsData.find(project => project.url === projectName);
        console.log(projectData);
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

    .dark .projectWrapper {
        margin-top: 40px;
        display: flex;
        width: 640px;
        padding: 20px;
        flex-direction: column;
        transition: 0.4s ease-in-out;
    }

    .dark .title {
        color: white;
        font-size: 20px;
        font-weight: 600;
        transition: 0.4s ease-in-out;
    }

    .dark .headline {
        color: white;
        font-size: 18px;
        font-weight: 500;
        transition: 0.4s ease-in-out;
    }

    .dark .date {
        color: white;
        font-size: 16px;
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

 

    .dark .block p {
        margin-top: 8px;
        color: white;
        opacity: 0.65;
        font-size: 16px;
        transition: 0.4s ease-in-out;
    }
    .dark img {
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
        width: 640px;
        padding: 20px;
        flex-direction: column;
        transition: 0.4s ease-in-out;
    }

    .light .title {
        color: black;
        font-size: 20px;
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
        font-size: 16px;
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

 

    .light .block p {
        margin-top: 8px;
        color: black;
        opacity: 0.65;
        font-size: 16px;
        transition: 0.4s ease-in-out;
    }
    .light img {
        margin-top: 16px;
        width: 100%;
        border-radius: 28px;
        height: auto;
        transition: 0.4s ease-in-out;
    }
</style>