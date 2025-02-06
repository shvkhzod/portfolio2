<script lang="ts">
	import Ava from '$lib/images/newprofile.webp';
	import GitHub from '$lib/images/github.svg';
	import GitHubLight from '$lib/images/github-light.svg';
	import Instagram from '$lib/images/instagram.svg';
	import InstagramLight from '$lib/images/instagram-light.svg';
	import Mail from '$lib/images/mail.svg';
	import MailLight from '$lib/images/mail-light.svg';
	import TinyView from '../components/tinyView.svelte';
	import { theme } from '../utils/theme';
	import { writable, type Writable } from 'svelte/store';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let currentTheme: Writable<string> = writable('light');

	$: projects = data.projects;
	$: blogs = data.posts;
	$: books = data.books;
	console.log(projects, blogs)

	theme.subscribe((value) => {
		currentTheme.set(value);
	});
</script>

<svelte:head>
    <title>Shakhzod Sharifov</title>
    <meta name="description" content="Software engineer and designer from planet Earth">
    <meta name="keywords" content="software engineer, designer, Uzbekistan, technology, art, projects, books, thoughts">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://yourwebsite.com/">
    <meta property="og:title" content="Shakhzod - Software Engineer and Designer">
    <meta property="og:description" content="Software engineer and designer from the Heart of Silk Road">
    <meta property="og:image" content="/static/images/preview.png">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="/images/preview.png">
    <meta property="twitter:title" content="Shakhzod - Software Engineer and Designer">
    <meta property="twitter:description" content="Software engineer and designer from the Heart of Silk Road.">
    <meta property="twitter:image" content="/static/images/preview.png">

    <!-- Additional SEO tags -->
    <link rel="canonical" href="https://shakhzod.co/">
    <meta name="author" content="Shakhzod">
    <meta name="robots" content="index, follow">
</svelte:head>

<div class={`mainContainer ${$currentTheme}`}>
	<div class={`mainWrapper ${$currentTheme}`}>
		<img src={Ava} alt="avatar" class="ava" loading="lazy" />
		<h1>Hello, I'm Shakhzod, a software engineer and designer from the planet Earth.</h1>
		<p class="subtitle">Exploring and observing what technology with art can bring together</p>

		<div class={`links ${$currentTheme}`}>
			<a href="https://github.com/shvkhzod">
				<img src={$currentTheme == 'dark' ? GitHub : GitHubLight} alt="github" loading="lazy" />
			</a>
			<a href="mailto:thedigitaluzb@gmail.com?subject=Work">
				<img src={$currentTheme == 'dark' ? Mail : MailLight} alt="gmail"loading="lazy" />
			</a>
			<a href="https://www.instagram.com/shvkhzood/">
				<img src={$currentTheme == 'dark' ? Instagram : InstagramLight} alt="Instagram" loading="lazy" />
			</a>
		</div>

		<div class={`newSectionHeader ${$currentTheme}`}>
			<h2 class={`headerSec ${$currentTheme}`}>Projects</h2>
			<a href="projects" class={`seeAll ${$currentTheme}`}>See All</a>
		</div>

		<div class={`list ${$currentTheme}`}>
			{#if projects}
				{#each projects.slice(0, 3) as project}
					<a href={`projects/${project.url}`}>
						<TinyView title={project.title} subtitle={project.subtitle} />
					</a>
				{/each}
			{/if}
		</div>

		<div class={`newSectionHeader ${$currentTheme}`}>
			<h2 class={`headerSec ${$currentTheme}`}>Books</h2>
			<a href="books" class={`seeAll ${$currentTheme}`}>See All</a>
		</div>
		
		<div class={`list ${$currentTheme}`}>
			<div class={`list ${currentTheme}`}>
				{#each books as book}
					<a href={`/books#${book.title.replace(/\s+/g, '-').toLowerCase()}`}>
						<TinyView title={book.title} subtitle={book.subtitle} />
					</a>
				{/each}
			</div>
		</div>

		<div class={`newSectionHeader ${$currentTheme}`}>
			<h2 class={`headerSec ${$currentTheme}`}>Thoughts</h2>
			<a href="thoughts" class={`seeAll ${$currentTheme}`}>See All</a>
		</div>

		<div class={`list ${$currentTheme}`}>
			{#if blogs}
				{#each blogs.slice(0, 3) as blog}
					<a href={`thoughts/${blog.slug}`}>
						<TinyView title={blog.title} subtitle={blog.subtitle} />
					</a>
				{/each}
			{/if}
		</div>
	</div>
</div>
<style>
	/*Desktop and laptop */
	@media (min-width: 768px) {
		.mainContainer {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: center; 
			align-items: center;
		}

		.dark.mainContainer {
			background-color: black;
			transition: 0.4s ease-in-out;
		}

		.light.mainContainer {
			background-color: white;
			transition: 0.4s ease-in-out;
		}

		.dark .mainWrapper {
			margin-top: 60px;
			display: flex;
			flex-direction: column;
			width: 640px;
			padding: 20px;
			justify-content: center;
			background-color: black;
			transition: 0.4s ease-in-out;
			padding-bottom: 60px;
		}

		.dark h1 {
			margin-top: 12px;
			font-size: 24px;
			line-height: 104%;
			font-weight: 550;
			color: white;
			text-align: left;
			transition: 0.4s ease-in-out;
		}

		.dark .subtitle {
			margin-top: 8px;
			text-align: left;
			color: white;
			opacity: 50%;
			transition: 0.4s ease-in-out;
		}
		.dark .ava {
			width: 132px;
			transition: 0.4s ease-in-out;
		}

		.dark .links {
			margin-top: 20px;
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 20px;
			width: 100%;
			transition: 0.4s ease-in-out;
		}

		.dark .newSectionHeader {
			width: 100%;
			margin-top: 56px;
			margin-bottom: 24px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			transition: 0.4s ease-in-out;
		}

		.dark .headerSec {
			color: black;
			background-color: white;
			font-weight: 550;
			font-size: 14px;
			padding: 4px 8px;
			border-radius: 6px;
			transition: 0.4s ease-in-out;
		}

		.dark .seeAll {
			color: white;
			font-size: 14px;
			transition: 0.4s ease-in-out;
			text-decoration: none;
		}

		.dark .list {
			display: flex;
			flex-direction: column;
			transition: 0.4s ease-in-out;
			gap: 24px;
		}

		a {
			text-decoration: none;
		}

		.light .mainWrapper {
			margin-top: 60px;
			display: flex;
			flex-direction: column;
			width: 640px;
			padding: 20px;
			justify-content: center;
			background-color: white;
			transition: 0.4s ease-in-out;
			padding-bottom: 60px;
		}

		.light h1 {
			margin-top: 12px;
			font-size: 24px;
			line-height: 104%;
			font-weight: 550;
			color: black;
			text-align: left;
			transition: 0.4s ease-in-out;
		}

		.light .subtitle {
			margin-top: 8px;
			text-align: left;
			color: black;
			opacity: 50%;
			transition: 0.4s ease-in-out;
		}
		.light .ava {
			width: 132px;
			transition: 0.4s ease-in-out;
		}

		.light .links {
			margin-top: 20px;
			display: flex;
			flex-direction: row;
			transition: 0.4s ease-in-out;
			gap: 20px;
			align-items: center;
			width: 100%;
		}

		.light .newSectionHeader {
			width: 100%;
			margin-top: 56px;
			margin-bottom: 24px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			transition: 0.4s ease-in-out;
		}

		.light .headerSec {
			color: white;
			background-color: black;
			font-weight: 550;
			font-size: 14px;
			padding: 4px 8px;
			border-radius: 6px;
			transition: 0.4s ease-in-out;
		}

		.light .seeAll {
			color: black;
			font-size: 14px;
			transition: 0.4s ease-in-out;
			text-decoration: none;
		}

		.light .list {
			display: flex;
			flex-direction: column;
			gap: 24px;
			transition: 0.4s ease-in-out;
		}
	}

	/*Mobile */

	@media (max-width: 768px) {
		a {
			text-decoration: none;
		}
		.mainContainer {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;

		}

		.dark.mainContainer {
			background-color: black;
			transition: 0.4s ease-in-out;
		}

		.light.mainContainer {
			background-color: white;
			transition: 0.4s ease-in-out;
		}

		.dark .mainWrapper {
			margin-top: 60px;
			display: flex;
			flex-direction: column;
			width: 100%;
			padding: 20px;
			justify-content: center;
			background-color: black;
			transition: 0.4s ease-in-out;
			padding-bottom: 60px;
		}

		.dark h1 {
			margin-top: 12px;
			font-size: 24px;
			line-height: 104%;
			font-weight: 550;
			color: white;
			text-align: left;
			transition: 0.4s ease-in-out;
		}

		.dark .subtitle {
			margin-top: 8px;
			text-align: left;
			color: white;
			opacity: 50%;
			transition: 0.4s ease-in-out;
		}
		.dark .ava {
			width: 110px;
			transition: 0.4s ease-in-out;
		}

		.dark .links {
			margin-top: 20px;
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 20px;
			width: 100%;
			transition: 0.4s ease-in-out;
		}

		.dark .newSectionHeader {
			width: 100%;
			margin-top: 56px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			transition: 0.4s ease-in-out;
		}

		.dark .headerSec {
			color: black;
			background-color: white;
			font-weight: 550;
			font-size: 14px;
			padding: 4px 8px;
			border-radius: 6px;
			transition: 0.4s ease-in-out;
		}

		.dark .seeAll {
			color: white;
			font-size: 14px;
			transition: 0.4s ease-in-out;
			text-decoration: none;
		}

		.dark .list {
			margin-top: 24px;
			display: flex;
			flex-direction: column;
			transition: 0.4s ease-in-out;
			gap: 24px;
		}

		.light .mainWrapper {
			margin-top: 60px;
			display: flex;
			flex-direction: column;
			width: 640px;
			padding: 20px;
			justify-content: center;
			background-color: white;
			transition: 0.4s ease-in-out;
			padding-bottom: 60px;
		}

		.light h1 {
			margin-top: 12px;
			font-size: 24px;
			line-height: 104%;
			font-weight: 550;
			color: black;
			text-align: left;
			transition: 0.4s ease-in-out;
		}

		.light .subtitle {
			margin-top: 8px;
			text-align: left;
			color: black;
			opacity: 50%;
			transition: 0.4s ease-in-out;
		}
		.light .ava {
			width: 110px;
			transition: 0.4s ease-in-out;
		}

		.light .links {
			margin-top: 20px;
			display: flex;
			flex-direction: row;
			transition: 0.4s ease-in-out;
			gap: 20px;
			align-items: center;
			width: 100%;
		}

		.light .newSectionHeader {
			width: 100%;
			margin-top: 56px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			transition: 0.4s ease-in-out;
		}

		.light .headerSec {
			color: white;
			background-color: black;
			font-weight: 550;
			font-size: 14px;
			padding: 4px 8px;
			border-radius: 6px;
			transition: 0.4s ease-in-out;
		}

		.light .seeAll {
			color: black;
			font-size: 14px;
			transition: 0.4s ease-in-out;
			text-decoration: none;
		}

		.light .list {
			margin-top: 24px;
			display: flex;
			flex-direction: column;
			gap: 24px;
			transition: 0.4s ease-in-out;
		}
	}
</style>
