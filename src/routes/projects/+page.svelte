<script lang="ts">
  import TinyView from "../../components/tinyView.svelte"
  import { theme } from "../../utils/theme";
  import type { PageData } from './$types';

  export let data: PageData;

  $: currentTheme = $theme;
  $: projects = data.projects;

  console.log(data)
</script>

<div class={`projectsContainer ${currentTheme}`}>
  <div class={`projectWrapper ${currentTheme}`}>
    <h2 class={`projectH ${currentTheme}`}>The things I've done</h2>
    <div class={`projectList ${currentTheme}`}>
      {#if projects}
        {#each projects as project}
          <a href={`/projects/${project.url}`}>
            <TinyView title={project.title} subtitle={project.subtitle}/>
          </a>
        {/each}
      {/if}
    </div>
  </div>
</div>

<style>
 /** Desktop and Mobile*/

 @media (min-width: 768px) {
  .dark.projectsContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    transition: 0.4s ease-in-out;
    min-height: 100vh;
  }
  .dark .projectWrapper {
    display: flex;
    width: 640px;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    transition: 0.4s ease-in-out;
  }

  .dark .projectList {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    transition: 0.4s ease-in-out;
  }

  .dark .projectH {
    text-align: left;
    color: white;
    margin-top: 40px;
    transition: 0.4s ease-in-out;
    font-size: 20px;
  }

  .dark a {
    text-decoration: none;
    transition: 0.4s ease-in-out;
  }

  /** Light */

  .light.projectsContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.4s ease-in-out;
    min-height: 100vh;
    background-color: white;
  }
  .light .projectWrapper {
    display: flex;
    width: 640px;
    flex-direction: column;
    justify-content: center;
    transition: 0.4s ease-in-out;
    padding: 20px;
  }

  .light .projectList {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    transition: 0.4s ease-in-out;
    gap: 24px;
  }

  .light .projectH {
    text-align: left;
    color: black;
    margin-top: 40px;
    font-size: 20px;
    transition: 0.4s ease-in-out;
  }

  .light a {
    text-decoration: none;
    transition: 0.4s ease-in-out;
  }
 }

  /**Mobile */

  @media (max-width:768px) {
    .dark.projectsContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    transition: 0.4s ease-in-out;
    min-height: 100vh;
  }
  .dark .projectWrapper {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    transition: 0.4s ease-in-out;
  }

  .dark .projectList {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    transition: 0.4s ease-in-out;
  }

  .dark .projectH {
    color: white;
    margin-top: 40px;
    transition: 0.4s ease-in-out;
    font-size: 20px;
  }

  .dark a {
    text-decoration: none;
    transition: 0.4s ease-in-out;
  }

  /** Light */

  .light.projectsContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.4s ease-in-out;
    min-height: 100vh;
    background-color: white;
  }
  .light .projectWrapper {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    transition: 0.4s ease-in-out;
    padding: 20px;
  }

  .light .projectList {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    transition: 0.4s ease-in-out;
    gap: 24px;
  }

  .light .projectH { 
    color: black;
    margin-top: 40px;
    font-size: 20px;
    transition: 0.4s ease-in-out;
  }

  .light a {
    text-decoration: none;
    transition: 0.4s ease-in-out;
  }
  }
</style>