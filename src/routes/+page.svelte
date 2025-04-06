<script lang="ts">
	import Ava from '$lib/images/ava.svg';
	import TinyView from '../components/tinyView.svelte';
	import { theme } from '../utils/theme';
	import { writable, type Writable } from 'svelte/store';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import WithImage from '../components/withImage.svelte';

	export let data: PageData;

	let currentTheme: Writable<string> = writable('light');

	$: projects = data.projects;
	$: blogs = data.posts;
	$: books = data.books;


	theme.subscribe((value) => {
		currentTheme.set(value);
	});
</script>

<svelte:head>
	<title>Shakhzod Sharifov</title>
	<meta name="description" content="Crafting digital tools for human needs" />
	<meta
		name="keywords"
		content="software engineer, designer, Uzbekistan, technology, art, projects, books, thoughts"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://shakhzod.co/" />
	<meta property="og:title" content="Shakhzod - Software Engineer and Designer" />
	<meta
		property="og:description"
		content="Software engineer and designer from the Heart of Silk Road"
	/>
	<meta property="og:image" content="https://shakhzod.co/images/preview.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://shakhzod.co/" />
	<meta property="twitter:title" content="Shakhzod - Software Engineer and Designer" />
	<meta
		property="twitter:description"
		content="Software engineer and designer from the Heart of Silk Road."
	/>
	<meta property="twitter:image" content="https://shakhzod.co/images/preview.png" />

	<!-- Additional SEO tags -->
	<link rel="canonical" href="https://shakhzod.co/" />
	<meta name="author" content="Shakhzod" />
	<meta name="robots" content="index, follow" />
</svelte:head>

<div class={`mainContainer ${$currentTheme}`}>
	<div class={`mainWrapper ${$currentTheme}`}>
		<div class="profile">
			<img src={Ava} alt="avatar" class="ava" loading="lazy" />
			<div>
				<p class="fullName">Shakhzod Sharifov</p>
			<p class="job">Software Engineer/Designer</p>
			</div>
		</div>
		<p class="subtitle">
			Hello, I like to build cool stuff, take pictures, 
			and read books when I'm not coding. I would love to call myself an artist, but I am not. Mere mortal exploring the world of technology and art.
		</p>
		<p class="subtitle2">If you have any questions or just want to say hi, feel free to email me. See you around</p>

		<div class={`links ${$currentTheme}`}>
			<a href="https://github.com/shvkhzod">
				<!-- <img src={$currentTheme == 'dark' ? GitHub : GitHubLight} alt="github" loading="lazy" /> -->
				Github
			</a>
			<a href="mailto:thedigitaluzb@gmail.com?subject=Work">
				<!-- <img src={$currentTheme == 'dark' ? Mail : MailLight} alt="gmail" loading="lazy" /> -->
				 Email
			</a>
			<a href="https://www.instagram.com/shvkhzood/">
				<!-- <img
					src={$currentTheme == 'dark' ? Instagram : InstagramLight}
					alt="Instagram"
					loading="lazy"
				/> -->
				Instagram
			</a>
		</div>

		<div class={`newSectionHeader ${$currentTheme}`}>
			<h2 class={`headerSec ${$currentTheme}`}>Projects</h2>
			<a href="projects" class={`seeAll ${$currentTheme}`}>See All</a>
		</div>
	
		<div class={`${$currentTheme} prolist`}>
			{#if projects}
			
				{#each projects.slice(0, 3) as project}
					<!-- <a href={`projects/${project.url}`}>
						<TinyView title={project.title} subtitle={project.subtitle} />
					</a> -->

					<a href={`projects/${project.url}`}>
						<WithImage
							title={project.title}
							imageUrl={project.thumbnail}
							subtitle={project.subtitle}
							/>
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
			width: 650px;
			padding: 0px 64px;
			justify-content: center;
			background-color: black;
			transition: 0.4s ease-in-out;
			padding-bottom: 60px;
		}

		.dark .profile {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap:20px;
			transition: 0.4s ease-in-out;
		}

		.dark .fullName {
			font-size: 14px;
			font-weight: 600;
			color: #ededed;
			transition: 0.4s ease-in-out;
		
		}

		.dark .job {
			margin-top: 2px;
			font-size: 14px;
			color: rgb(168, 168, 168);
			font-weight: 400;
			transition: 0.4s ease-in-out;
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
			margin-top: 40px;
			text-align: left;
			color: #ededed;
			font-weight: 400;
			line-height: 21px;
			font-size: 14px;
			transition: 0.4s ease-in-out;
		}
		.dark .subtitle2 {
			margin-top: 20px;
			text-align: left;
			color: #ededed;
			line-height: 21px;
			font-size: 14px;
			font-weight: 400;
			transition: 0.4s ease-in-out;
		}

		.dark .links a {
			color: #ededed;
			text-decoration: underline;
			text-underline-offset: 4px;
			font-size: 14px;
			transition: 0.1s ease-in-out;
		}

		.dark .links a:hover {
			color: white;
			opacity: 100%;
			text-decoration: underline;
			font-size: 14px;
			transition: ease-in-out;
		}
		.dark .ava {
			width: 32px;
			height: 32px;
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
			font-weight: 600;
			font-size: 14px;
			padding: 4px 12px;
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
			width: 650px;
			padding: 0px 64px;
			justify-content: center;
			background-color: white;
			transition: 0.4s ease-in-out;
			padding-bottom: 60px;
		}

		.light .profile {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap:20px;
			
		}

		.light .fullName {
			font-size: 14px;
			font-weight: 600;
			color: black;
			transition: 0.4s ease-in-out;
		
		}

		.light .job {
			margin-top: 2px;
			font-size: 14px;
			font-weight: 400;
			color: #626161;
			transition: 0.4s ease-in-out;
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
			margin-top: 40px;
			text-align: left;
			color: #626161;
			font-weight: 400;
			line-height: 21px;
			font-size: 14px;
			transition: 0.4s ease-in-out;
		}

		.light .links a {
			color: #626161;
			text-decoration: underline;
			text-underline-offset: 4px;
			font-size: 14px;
			transition: 0.1s ease-in-out;
		}

		.light .links a:hover {
			color: black;
			opacity: 100%;
			text-decoration: underline;
			text-underline-offset: 4px;
			font-size: 14px;
			transition: ease-in-out;
		}

		.light .subtitle2 {
			margin-top: 20px;
			line-height: 21px;
			text-align: left;
			font-weight: 400;
			color: #626161;
			font-size: 14px;
			transition: 0.4s ease-in-out;
		}
		.light .ava {
			width: 32px;
			height: 32px;
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
			font-weight: 600;
			font-size: 14px;
			padding: 4px 12px;
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

		.light .prolist {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			gap: 20px;
			flex-wrap: wrap;
		}

		.dark .prolist {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			gap: 20px;
			flex-wrap: wrap;
			
		}

		.dark .prolist a {
			color:white;
			
		}
		.light .prolist a {
			color:black;
			
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
			padding: 24px;
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
			margin-top: 32px;
			text-align: left;
			color: white;
			font-weight: 400;
			line-height: 24px;
			opacity: 100%;
			transition: 0.4s ease-in-out;
		}

		
		.dark .links a {
			color: white;
			opacity: 50%;
			text-decoration: underline;
			text-underline-offset: 4px;
			font-size: 14px;
			transition: 0.1s ease-in-out;
		}

		.dark .links a:hover {
			color: white;
			opacity: 100%;
			text-decoration: underline;
			font-size: 14px;
			transition: ease-in-out;
		}

		.dark .subtitle2 {
			margin-top: 20px;
			text-align: left;
			color: white;
			font-weight: 400;
			line-height: 24px;
			opacity: 100%;
			transition: 0.4s ease-in-out;
		}

		.dark .profile {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap:20px;
			transition: 0.4s ease-in-out;
		}

		.dark .fullName {
			font-size: 14px;
			font-weight: 600;
			color: white;
			transition: 0.4s ease-in-out;
		
		}

		.dark .job {
			margin-top: 4px;
			font-size: 14px;
			color: white;
			font-weight: 400;
			opacity: 50%;
			transition: 0.4s ease-in-out;
		}
		.dark .ava {
			width: 32px;
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


		.dark .prolist {
			display: flex;
			flex-direction: column;
			gap: 20px;
			flex-wrap: wrap;
			
		}

		.dark .prolist a {
			color:white;
			
		}
		.light .mainWrapper {
			margin-top: 60px;
			display: flex;
			flex-direction: column;
			width: 100%;
			padding: 24px;
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

		.light .profile {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap:20px;
			
		}

		.light .fullName {
			font-size: 14px;
			font-weight: 600;
			color: black;
			transition: 0.4s ease-in-out;
		
		}

		.light .job {
			margin-top: 4px;
			font-size: 14px;
			font-weight: 400;
			opacity: 50%;
			color: black;
			transition: 0.4s ease-in-out;
		}

		.light .subtitle {
			margin-top: 32px;
			text-align: left;
			font-weight: 400;
			line-height: 24px;
			color: black;
			opacity: 50%;
			transition: 0.4s ease-in-out;
		}
		.light .subtitle2 {
			line-height: 24px;
			margin-top: 20px;
			text-align: left;
			font-weight: 400;
			color: black;
			opacity: 50%;
			transition: 0.4s ease-in-out;
		}

		.light .links a {
			color: black;
			opacity: 50%;
			text-decoration: underline;
			text-underline-offset: 4px;
			font-size: 14px;
			transition: 0.1s ease-in-out;
		}

		.light .links a:hover {
			color: black;
			opacity: 100%;
			text-decoration: underline;
			text-underline-offset: 4px;
			font-size: 14px;
			transition: ease-in-out;
		}
		.light .ava {
			width: 32px;
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

		.light .prolist a {
			color: #000000;
		}

		.dark .prolist a {
			color: #ffffff;
		}
	}
</style>
