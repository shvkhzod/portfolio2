<script lang="ts">
	import Ava from '$lib/images/ava.svg';
	import GitHub from '$lib/images/github.svg';
	import GitHubLight from '$lib/images/github-light.svg';
	import Instagram from '$lib/images/instagram.svg';
	import InstagramLight from '$lib/images/instagram-light.svg';
	import Mail from '$lib/images/mail.svg';
	import MailLight from '$lib/images/mail-light.svg';
	import TinyView from '../components/tinyView.svelte';
	import { theme } from '../utils/theme';
	import { writable, type Writable } from 'svelte/store';
	import { type ProjectData, projectsData } from '../routes/projects/projectsData';
	import { type BlogData, blogsData } from './blogs/blogsData';
	import { onMount } from 'svelte';
	import { booksData, type BooksData } from './books/booksData';
	let currentTheme: Writable<string>;
	let projects: ProjectData[];
	let ideas: BlogData[];
	let books: BooksData[]

	currentTheme = writable('light');

	theme.subscribe((value) => {
		currentTheme.set(value);
	});

	onMount(() => {
		projects = projectsData;
		ideas = [blogsData[0], blogsData[1], blogsData[2]];
		books = [booksData[0], booksData[6], booksData[11]];
		
	});
</script>

<div class={`mainContainer ${$currentTheme}`}>
	<div class={`mainWrapper ${$currentTheme}`}>
		<img src={Ava} alt="avatar" class="ava" />
		<h1>Hello, I'm Shakhzod, a software engineer and designer from Uzbekistan.</h1>
		<p class="subtitle">I love exploring what technology and art can bring together</p>

		<div class={`links ${$currentTheme}`}>
			<a href="https://github.com/shvkhzod">
				<img src={$currentTheme == 'dark' ? GitHub : GitHubLight} alt="github" />
			</a>
			<a href="mailto:thedigitaluzb@gmail.com?subject=Work">
				<img src={$currentTheme == 'dark' ? Mail : MailLight} alt="gmail" />
			</a>
			<a href="https://www.instagram.com/shvkhzood/">
				<img src={$currentTheme == 'dark' ? Instagram : InstagramLight} alt="Instagram" />
			</a>
		</div>

		<div class={`newSectionHeader ${$currentTheme}`}>
			<h2 class={`headerSec ${$currentTheme}`}>Projects</h2>
			<a href="projects" class={`seeAll ${$currentTheme}`}>See All</a>
		</div>

		<div class={`list ${$currentTheme}`}>
			{#if projects}
				{#each projects as project}
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
			{#if books}
				{#each books as book}
					<a href={`books}`}>
						<TinyView title={book.title} subtitle={book.subtitle} />
					</a>
				{/each}
			{/if}
		</div>

		<div class={`newSectionHeader ${$currentTheme}`}>
			<h2 class={`headerSec ${$currentTheme}`}>Thoughts</h2>
			<a href="blogs" class={`seeAll ${$currentTheme}`}>See All</a>
		</div>

	
		<div class={`list ${$currentTheme}`}>
			{#if ideas}
				{#each ideas as idea}
					<a href={`blogs/${idea.url}`}>
						<TinyView title={idea.title} subtitle={idea.subtitle} />
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
			width: 68px;
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
			width: 68px;
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
			width: 68px;
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
			width: 68px;
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
