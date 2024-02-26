<div class={`blogsWrap ${$currentTheme}`}>
  <div class={`blogsContainer ${$currentTheme}`}>
    <div class={`blogList ${$currentTheme}`}>
      {#if blogs}
        {#each blogs as blog }
        <a href={`/blogs/${blog.url}`}>
          <BlogItem blogTitle={blog.title} date={blog.date} />
          </a>
        {/each}
      {/if}
    </div>
  </div>
</div>

<script lang='ts'>
  import BlogItem from '../../components/blogItem.svelte';
  import { writable, type Writable } from "svelte/store";
	import { theme } from "../../utils/theme";
	import { blogsData, type BlogData } from './blogsData';

  let currentTheme:Writable<string> = writable($theme)
  let blogs: BlogData[] = blogsData
  theme.subscribe(value => {
    currentTheme.set(value);
    console.log("changed in component")
    })
</script>

<style>
  .dark.blogsWrap {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-height: 100vh;
    background-color: black;
    transition: 0.4s ease-in-out;
  }

  .dark .blogsContainer {
    display: flex;
    flex-direction: column;
    width: 640px;
    padding: 20px;
    transition: 0.4s ease-in-out;
  }

  .dark .blogList {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    transition: 0.4s ease-in-out;
  }

  .dark a {
    text-decoration: none;
    transition: 0.4s ease-in-out;
  }

  /*LIght */

  .light.blogsWrap {
     width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-height: 100vh;
    background-color: white;
    transition: 0.4s ease-in-out;
  }

  .light .blogsContainer {
    display: flex;
    flex-direction: column;
    width: 640px;
    padding: 20px;
    transition: 0.4s ease-in-out;
  }

  .light .blogList {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    transition: 0.4s ease-in-out;
  }

  .light a {
    text-decoration: none;
    transition: 0.4s ease-in-out;
  }
</style>  
