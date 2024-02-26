<div class={`navContainer ${$currentTheme}`}>
  <div class={`navWrapper ${$currentTheme}`}  >
    <p class ={`logo ${$currentTheme}`} >
      <a href="/" >shakhzod</a>
    </p>

    

    <div class="list" >
      <button 
      class={`toggle ${$currentTheme}`}
      on:click={toggleTheme}
      >
      {#if $currentTheme === 'light'}
        <img src={Sun} alt="moon" width="24px" height="24px"/>
      {:else}
        <img src={Moon} alt="moon" width="24px" height="24px"/>
      {/if}
      </button>
      <a href="/projects" >
        <p>Projects</p>
      </a>
      <a href="/blogs" >
        <p  >Thoughts</p>
      </a>
    
    </div>
  </div>
</div>

<div class="appContainer">
  <slot/>
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


inject({ mode:'production' });
injectSpeedInsights();
let currentTheme:Writable<string> = writable($theme)

theme.subscribe(value => {
  currentTheme.set(value);
  console.log("changed")

})
</script>


<style>
  /*Desktop and laptop */

  @media (min-width: 768px) {
    .dark .appContainer {
    background-color: black;
    transition: 0.4s ease-in-out;

  }

  a {
    text-decoration: none;
    color: white;
    font-weight: 550;
  }

  .dark .navWrapper {
    width: 652px;
    padding: 0px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    transition: 0.4s ease-in-out;
  }

  .dark .logo {
    color: white;
    font-weight: 550;
    transition: 0.4s ease-in-out;
  }

  .dark .list {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    transition: 0.4s ease-in-out;
  }
  .dark p {
  color: white;
  font-weight: 500;
  transition: 0.4s ease-in-out;
  padding: 8px;
  border-radius: 8px;
  }
  .dark a {
    text-decoration: none;
    transition: 0.4s ease-in-out;
  }

  button {
    cursor: pointer;
  }
  .dark button {
    background-color: transparent;
    color: white;
    border-radius: 20px;
    font-size: 16px;
    padding: 8px 12px;
    transition: 0.4s ease-in-out;
    border: none;
  }

  .dark button:hover {
    background-color: rgb(43, 43, 43);
  }

  .dark p:hover {
    padding: 8px;
    border-radius: 8px;
    background-color: #2d2d2d;
  }



  /* Light Mode */

  .light .appContainer {
    background-color: white;
  }

.navContainer {
    padding-top: 24px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    transition: 0.4s ease-in-out;

    
  }

  .navContainer.dark {
  background-color: black;
  transition: 0.4s ease-in-out;
}

.navContainer.light {
  background-color: white;
  transition: 0.4s ease-in-out;
}
  .light .navWrapper {
    width: 652px;
    padding: 0px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    transition: 0.4s ease-in-out;
  }

  .logo.light {
    color: black;
    font-weight: 550;
    transition: 0.4s ease-in-out;
  }

  .light .list {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    transition: 0.4s ease-in-out;
  }
  .light p {
  color: black;
  font-weight: 500;
  padding: 8px;
  border-radius: 8px;
  transition: 0.4s ease-in-out;
  }
  .light a {
    text-decoration: none;
    transition: 0.4s ease-in-out;
    color: black;
  }

  .light button {
    background-color: transparent;
    color: black;
    border-radius: 20px;
    font-size: 16px;
    padding: 8px 12px;
    border: none;
    transition: 0.4s ease-in-out;
  }

  .light button:hover {
    background-color: rgb(229, 229, 229);
  }

  .light p:hover {
    background-color: rgb(222, 222, 222);
    padding: 8px;
    border-radius: 8px;
  }
  }






  /* Mobile */
  @media (max-width: 768px) {
    .dark .appContainer {
    background-color: black;
    transition: 0.4s ease-in-out;

  }

  a {
    text-decoration: none;
    color: white;
    font-weight: 550;
  }

  .dark .navWrapper {
    width: 100%;
    padding: 0px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    transition: 0.4s ease-in-out;
  }

  .dark .logo {
    color: white;
    font-weight: 550;
    transition: 0.4s ease-in-out;
  }

  .dark .list {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    transition: 0.4s ease-in-out;
  }
  .dark p {
  color: white;
  font-weight: 500;
  transition: 0.4s ease-in-out;
  padding: 8px;
  border-radius: 8px;
  }
  .dark a {
    text-decoration: none;
    transition: 0.4s ease-in-out;
  }

  button {
    cursor: pointer;
  }
  .dark button {
    background-color: transparent;
    color: white;
    border-radius: 20px;
    font-size: 16px;
    padding: 8px 12px;
    transition: 0.4s ease-in-out;
    border: none;
  }

  .dark button:hover {
    background-color: rgb(43, 43, 43);
  }

  .dark p:hover {
    padding: 8px;
    border-radius: 8px;
    background-color: #2d2d2d;
  }



  /* Light Mode */

  .light .appContainer {
    background-color: white;
  }

.navContainer {
    padding-top: 24px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    transition: 0.4s ease-in-out;

    
  }

  .navContainer.dark {
  background-color: black;
  transition: 0.4s ease-in-out;
}

.navContainer.light {
  background-color: white;
  transition: 0.4s ease-in-out;
}
  .light .navWrapper {
    width: 100%;
    padding: 0px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    transition: 0.4s ease-in-out;
  }

  .logo.light {
    color: black;
    font-weight: 550;
    transition: 0.4s ease-in-out;
  }

  .light .list {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    transition: 0.4s ease-in-out;
  }
  .light p {
  color: black;
  font-weight: 500;
  padding: 8px;
  border-radius: 8px;
  transition: 0.4s ease-in-out;
  }
  .light a {
    text-decoration: none;
    transition: 0.4s ease-in-out;
    color: black;
  }

  .light button {
    background-color: transparent;
    color: black;
    border-radius: 20px;
    font-size: 16px;
    padding: 8px 12px;
    border: none;
    transition: 0.4s ease-in-out;
  }

  .light button:hover {
    background-color: rgb(229, 229, 229);
  }

  .light p:hover {
    background-color: rgb(222, 222, 222);
    padding: 8px;
    border-radius: 8px;
  }
  }
</style>  
