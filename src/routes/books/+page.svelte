<div class={`bookContainer ${$currentTheme}`}> 
    <div class={`bookWrapper ${$currentTheme}`}>
        <h1 class={`title ${$currentTheme}`}>{data.title}</h1>
        
        <div class={`filters ${$currentTheme}`}>
           <div class="selections">
            <select bind:value={selectedCategory} class={$currentTheme}>
                <option value="">All Categories</option>
                {#each categories as category}
                    <option value={category}>{category}</option>
                {/each}
            </select>
            <select bind:value={selectedRating} class={$currentTheme}>
                <option value={0}>All Ratings</option>
                {#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as rating}
                    <option value={rating}>{rating}+ Stars</option>
                {/each}
            </select>
           </div>

            <p class="numberOfBooks">Number of books: {data.numberOfBooks}</p>
        </div>

        {#each filteredYearGroups as yearGroup}
            <div class={`bookHeader ${$currentTheme}`}>
                <h2>{yearGroup.year}</h2>
                <div class={`line ${$currentTheme}`}></div>
            </div>
            {#each yearGroup.books as book}
                <div class={`book ${$currentTheme}`}>
                    <h3>{book.title}</h3>
                    <p>{book.subtitle}</p>
                    <p>Category: {book.category}</p>
                    <p>Rating: {book.rating}/10</p>
                </div>
            {/each}
        {/each}
    </div>
</div>

<script lang="ts">
    import { theme } from '../../utils/theme';
    import { writable, type Writable } from 'svelte/store';
    import type { PageData } from './$types';
	import { onDestroy, onMount } from 'svelte';

    export let data: PageData;

    let currentTheme: Writable<string> = writable('light');
    let destroyScroll: (() => void) | undefined;
    
    let categories: string[] = [...new Set(data.yearGroups.flatMap(yg => yg.books.map(b => b.category)))];
    let selectedCategory = '';
    let selectedRating = 0;

    $: filteredYearGroups = data.yearGroups.map(yg => ({
        ...yg,
        books: yg.books.filter(book => 
            (selectedCategory === '' || book.category === selectedCategory) &&
            (selectedRating === 0 || book.rating >= selectedRating)
        )
    })).filter(yg => yg.books.length > 0);

    theme.subscribe((value) => {
        currentTheme.set(value);
    });

</script>

<style>

:global(html) {
        scroll-behavior: auto !important;
    }
    .dark.bookContainer {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      min-height: 100vh;
      background-color: black;
      transition: 0.4s ease-in-out;
    }
  
    .dark.bookWrapper {
      display: flex;
      flex-direction: column;
      width: 650px;
      padding: 24px 64px 120px 64px;
      transition: 0.4s ease-in-out;
    }

    .dark.filters {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .dark.filters .selections {
        display: flex;
        gap: 20px;
    }
   
  
    .dark .title {
        color: white;
        font-size: 20px;
        transition: 0.4s ease-in-out;   
    } 

    .dark h2 {
        color: white;
        font-size: 16px;
        transition: 0.4s ease-in-out;
    }
    .dark a {
      text-decoration: none;
      transition: 0.4s ease-in-out;
    }

    .dark.line {
        width: 86%;
        height: 1px;
        background-color: black;
    }

    .dark .book h3 {
        color: white;
        font-weight: 600;
        font-size: 16px;
        transition: 0.4s ease-in-out;
    }

    .dark .book p {
        color: white;
        font-size: 14px;
        opacity: 0.7;
        transition: 0.4s ease-in-out;
    }

    .dark .book {
        margin-top: 36px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    

    .dark.bookHeader {
        margin-top: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        transition: 0.4s ease-in-out;
    }

    .dark .line {
        width: 86%;
        height: 1px;
        background-color: rgba(255, 255, 255, 0.553);
    }


  
    /* Light */
  
    .light.bookContainer {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      min-height: 100vh;
      background-color: white;
      transition: 0.4s ease-in-out;
    }
    

    .light.bookWrapper {
      display: flex;
      flex-direction: column;
      width: 650px;
      padding: 24px 64px 120px 64px;
      transition: 0.4s ease-in-out;
    }
  
    .light.book {
        margin-top: 36px;
        display: flex;
        flex-direction: column;
        gap: 8px;

        
    }

    .light.line {
        width: 86%;
        height: 1px;
        background-color: black;
    }

    .light.bookHeader {
        margin-top: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        transition: 0.4s ease-in-out;
    }

    .light .book h3 {
        color: black;
        font-weight: 600;
        font-size: 16px;
        transition: 0.4s ease-in-out;
    }

    .light .book p {
        color: black;
        font-size: 14px;
        opacity: 0.7;
        transition: 0.4s ease-in-out;
    }

    .light.title {
        color: black;
        font-size: 20px;
        transition: 0.4s ease-in-out;
    }

    .light h2 {
        color: black;
        font-size: 16px;
        transition: 0.4s ease-in-out;
    }
    .light a {
      text-decoration: none;
      transition: 0.4s ease-in-out;
    }

    .light .numberOfBooks {
        color: black;
        opacity: 0.7;
        transition: 0.4s ease-in-out;
    }

    .dark .numberOfBooks {
        color: white;
        opacity: 0.7;
        transition: 0.4s ease-in-out;
    }

    .filters {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .filters .selections {
        display: flex;
        gap: 20px;
    }

    select {
        padding: 4px 8px;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 550;
        transition: 0.4s ease-in-out;
    }

    .dark select {
        color: black;
        background-color: white;
        border: none;
    }

    .light select {
        color: white;
        background-color: black;
        border: none;
    }

  </style>

