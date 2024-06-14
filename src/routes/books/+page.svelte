<div class={`bookContainer ${$currentTheme}`}>
    <div class={`bookWrapper ${$currentTheme}`}>
        <h1 class={`title ${$currentTheme}`}>Books I have read so far</h1>
        {#each sortedYears as year}
           <div class={`bookHeader ${$currentTheme}`}>
                <h2>{year}</h2>
                <div class={`line ${$currentTheme}`}></div>
            </div>
            {#each groupedBooks[year] as book}
            <div class={`book ${$currentTheme}`}>
                <h3>{book.title}</h3>
                <p>{book.subtitle}</p>
                <p>Category: {book.category}</p>
            </div>
            {/each}
      {/each}
    </div>
</div>

<script lang="ts">
	import { writable, type Writable } from "svelte/store";
    import {booksData} from "./booksData";
    import type {BooksData} from "./booksData";
	import { theme } from "../../utils/theme";

    const groupedBooks = booksData.reduce((acc: Record<number, BooksData[]>, book) => {
    const year = book.date;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(book);
    return acc;
  }, {});

  const sortedYears = Object.keys(groupedBooks)
    .map(Number)
    .sort((a, b) => b - a);

  //theme
  let currentTheme:Writable<string> = writable($theme);
    theme.subscribe(value => {
    currentTheme.set(value);
    console.log("changed in component")
    })
</script>


<style>
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
      width: 640px;
      padding: 20px;
      transition: 0.4s ease-in-out;
    }
  
   
  
    .dark .title {
        color: white;
        font-size: 20px;
        transition: 0.4s ease-in-out;   
    } 

    .dark h2 {
        color: white;
        font-size: 18px;
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
        font-weight: 550;
        font-size: 18px;
        transition: 0.4s ease-in-out;
    }

    .dark .book p {
        color: white;
        font-size: 16px;
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
        background-color: white;
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
      width: 640px;
      padding: 20px;
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
        font-weight: 550;
        font-size: 18px;
        transition: 0.4s ease-in-out;
    }

    .light .book p {
        color: black;
        font-size: 16px;
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
        font-size: 18px;
        transition: 0.4s ease-in-out;
    }
    .light a {
      text-decoration: none;
      transition: 0.4s ease-in-out;
    }
  </style>