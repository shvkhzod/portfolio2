<svelte:head>
    <title>{data.title}</title>
    <meta name="description" content={`Explore over ${data.numberOfBooks} books Shakhzod has read, complete with ratings and personal insights.`} />
    <meta name="keywords" content="books, reading list, book ratings, book reviews, Shakhzod, literature, recommendations" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://shakhzod.co/books" />
    <meta property="og:title" content={data.title} />
    <meta property="og:description" content={`Explore over ${data.numberOfBooks} books Shakhzod has read, complete with ratings and personal insights.`} />
    <meta property="og:image" content="https://shakhzod.co/images/bookPreview.png" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://shakhzod.co/books" />
    <meta property="twitter:title" content={data.title} />
    <meta property="twitter:description" content={`Explore over ${data.numberOfBooks} books Shakhzod has read, complete with ratings and personal insights.`} />
    <meta property="twitter:image" content="https://shakhzod.co/images/bookPreview.png" />
    
    <!-- Additional SEO tags --> 
    <link rel="canonical" href="https://shakhzod.co/books" />
    <meta name="author" content="Shakhzod" />
    <meta name="robots" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>


<div class="bookContainer" class:dark={$currentTheme === 'dark'} class:light={$currentTheme === 'light'}>
    <div class="bookWrapper">
        <h1 class="title entrance" style="--delay: 0ms">{data.title}</h1>

        <div class="filters entrance" style="--delay: 120ms">
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
                <select bind:value={selectedYear} class={$currentTheme}>
                    <option value={0}>All Years</option>
                    {#each years as year}
                        <option value={year}>{year}</option>
                    {/each}
                </select>
            </div>
        </div>
        <p class="numberOfBooks entrance" style="--delay: 240ms">Number of books: {filteredYearGroups.reduce((sum, yg) => sum + yg.books.length, 0)}</p>

        {#each filteredYearGroups as yearGroup, i}
            <div class="bookHeader entrance" style="--delay: {360 + i * 200}ms">
                <h2>{yearGroup.year}</h2>
                <div class="line"></div>
            </div>
            {#each yearGroup.books as book, j}
                <div class="book entrance" style="--delay: {420 + i * 200 + (j + 1) * 80}ms">
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
    
    let categories: string[] = [...new Set(data.yearGroups.flatMap(yg => yg.books.map(b => b.category)))].sort();
    let years: number[] = data.yearGroups.map(yg => yg.year).sort((a, b) => b - a);
    let selectedCategory = '';
    let selectedRating = 0;
    let selectedYear = 0;

    $: filteredYearGroups = data.yearGroups
        .filter(yg => selectedYear === 0 || yg.year === selectedYear)
        .map(yg => ({
            ...yg,
            books: yg.books.filter(book =>
                (selectedCategory === '' || book.category === selectedCategory) &&
                (selectedRating === 0 || book.rating >= selectedRating)
            )
        })).filter(yg => yg.books.length > 0);

    theme.subscribe((value) => {
        currentTheme.set(value);
    });

    onMount(() => {
        if (typeof window !== 'undefined') {
            destroyScroll = () => {
                document.documentElement.style.scrollBehavior = 'auto';
            };
            document.documentElement.style.scrollBehavior = 'smooth';
        }
    });

    onDestroy(() => {
        if (destroyScroll) {
            destroyScroll();
        }
    });
</script>

<style>
    @keyframes entrance {
        0% {
            opacity: 0;
            filter: blur(4px);
            transform: translateY(40px) scale(0.98);
        }
        60% {
            filter: blur(0px);
        }
        100% {
            opacity: 1;
            filter: blur(0px);
            transform: translateY(0) scale(1);
        }
    }

    .entrance {
        opacity: 0;
        animation: entrance 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
        animation-delay: var(--delay, 0ms);
    }

    :global(html) {
        scroll-behavior: auto !important;
    }

    .bookContainer {
        width: 100%;
        display: flex;
        justify-content: center;
        min-height: 100vh;
        background-color: var(--bg-color);
        transition: background-color 0.4s ease-in-out;
    }

    .bookWrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 650px;
        padding: 60px 64px 120px 64px;
        transition: color 0.4s ease-in-out;
    }

    .title {
        color: var(--text-color);
        font-size: 20px;
        transition: color 0.4s ease-in-out;
    }

    h2 {
        color: var(--text-color);
        font-size: 16px;
        transition: color 0.4s ease-in-out;
    }

    a {
        text-decoration: none;
        color: var(--text-color);
        transition: color 0.4s ease-in-out;
    }

    .bookHeader {
        margin-top: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        transition: color 0.4s ease-in-out;
    }

    .line {
        flex: 1;
        height: 1px;
        background-color: var(--text-color);
        opacity: 0.3;
    }

    .book {
        margin-top: 36px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .book h3 {
        color: var(--text-color);
        font-weight: 600;
        font-size: 16px;
        transition: color 0.4s ease-in-out;
    }

    .book p {
        color: var(--text-color);
        font-size: 14px;
        opacity: 0.7;
        transition: color 0.4s ease-in-out;
    }

    .numberOfBooks {
        color: var(--text-color);
        font-size: 14px;
        opacity: 0.7;
        transition: color 0.4s ease-in-out;
    }

    .filters {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .selections {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
    }

    select {
        padding: 6px 10px;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 550;
        border: none;
        cursor: pointer;
        transition: background-color 0.4s ease-in-out, color 0.4s ease-in-out;
    }

    .dark select {
        color: black;
        background-color: white;
    }

    .light select {
        color: white;
        background-color: black;
    }

    @media (max-width: 768px) {
        .bookWrapper {
            padding: 40px 24px 80px 24px;
        }

        .selections {
            gap: 8px;
        }

        select {
            font-size: 13px;
            padding: 6px 8px;
        }

        .bookHeader {
            gap: 12px;
        }
    }
</style>

