<div class={`tinyView ${$currentTheme}`}>
    <h2 class={`title ${$currentTheme}`}>{title}</h2>
    <p class={`subtitle ${$currentTheme}`}>{subtitle}</p>
</div>


<script lang='ts'>
    export let title: string;
    export let subtitle: string;

    import { writable, type Writable } from "svelte/store";
	import { theme } from "../utils/theme";

    let currentTheme:Writable<string> = writable($theme)

    theme.subscribe(value => {
        currentTheme.set(value);
        console.log("changed in component")
    })
</script>
<style>
    .tinyView {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

      /** Dark */

   .dark .title {
        color: white;
        font-size: 18px;
        font-weight: 550;
        font-size: 18px;
        transition: 0.4s ease-in-out;
    }

    .dark .subtitle {
        color: white;
        opacity: 50%;
        font-size: 16px;
        transition: 0.4s ease-in-out;
    }
    /** Light */

    .light .title {
        color: black;
        font-size: 18px;
        font-weight: 550;
        font-size: 18px;
        transition: 0.4s ease-in-out;
    }

    .light .subtitle {
        color: black;
        opacity: 50%;
        font-size: 16px;
        transition: 0.4s ease-in-out;
    }


  
    
</style>