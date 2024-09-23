<div class="navContainer">
  <div class="navWrapper">
    <a href="/">
      <p class="logo">
      shakhzod
    </p>
    </a>

    <div class="list">
      <button 
        class="toggle"
        on:click={toggleTheme}
      >
        {#if $currentTheme === 'light'}
          <img src={Sun} alt="sun" width="24px" height="24px"/>
        {:else}
          <img src={Moon} alt="moon" width="24px" height="24px"/>
        {/if}
      </button>
      <a href="/projects">
        <p>Projects</p>
      </a>
      <a href="/thoughts">
        <p>Thoughts</p>
      </a>
    </div>
  </div>
</div>

<div class="appContainer">
  <PageTransition url={$page.url.pathname}>
    <main>
      <slot />
    </main>
  </PageTransition>
</div>

<script lang="ts">
import "../app.css";
import { theme, toggleTheme } from '../utils/theme';
import { onMount } from 'svelte';
import Sun from '$lib/images/sun.svg'
import Moon from '$lib/images/moon.svg'
import { writable, type Writable } from "svelte/store";
import { inject } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
import { preloadData } from '$app/navigation';
import PageTransition from "$lib/PageTransition.svelte";
import { page } from "$app/stores";


inject({ mode: 'production' });
injectSpeedInsights();
let currentTheme: Writable<string> = writable($theme)

theme.subscribe(value => {
  currentTheme.set(value);
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', value);
  }
})

// function preloadRoute(event: MouseEvent, href: string) {
//   if (!event.ctrlKey && !event.metaKey) {
//     event.preventDefault();
//     preloadData(href).then(() => {
//       window.location.href = href;
//     });
//   }
// }

onMount(() => {
  // Preload data for common routes
  preloadData('/thoughts');
  preloadData('/projects');
});
</script>

<style>
  /* Use CSS variables for theming */
  :root {
    --bg-color: white;
    --text-color: black;
    --hover-bg-color: rgb(229, 229, 229);
  }

  :root[data-theme="dark"] {
    --bg-color: black;
    --text-color: white;
    --hover-bg-color: rgb(43, 43, 43);
  }

  .appContainer {
    background-color: var(--bg-color);
    color: var(--text-color);
    overflow-x: hidden;
    position: relative;
    transition: background-color 0.4s ease-in-out, color 0.4s ease-in-out;
    min-height: calc(100vh - 60px); /* Adjust based on your navbar height */
  }

  .navContainer {
    padding-top: 24px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    transition: background-color 0.4s ease-in-out;
    background-color: var(--bg-color);
  }

  .navWrapper {
    width: 100%;
    max-width: 652px;
    padding: 0px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: var(--bg-color);
    transition: background-color 0.4s ease-in-out;
  }

  .logo {
    font-weight: 550;
    transition: color 0.4s ease-in-out;
    color: var(--text-color);
  }

  .list {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    transition: color 0.4s ease-in-out;
  }

  p {
    font-weight: 500;
    transition: background-color 0.4s ease-in-out, color 0.4s ease-in-out;
    padding: 8px;
    border-radius: 8px;
    color: var(--text-color);
  }

  a {
    text-decoration: none;
    transition: color 0.4s ease-in-out;
    color: var(--text-color);
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border-radius: 20px;
    font-size: 16px;
    padding: 8px 12px;
    border: none;
    transition: background-color 0.4s ease-in-out;
  }

  button:hover,
  p:hover {
    background-color: var(--hover-bg-color);
  }

  @media (max-width: 768px) {
    .list {
      gap: 8px;
    }
  }
</style>
