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

	// --- Name scramble ---
	const originalName = 'Shakhzod Sharifov';
	let displayName = originalName;
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&';
	let scrambleRaf: number;
	let isHoveringProfile = false;

	const hoverName = 'The Prince';

	let scrambleTarget = originalName;

	let scrambleInterval: ReturnType<typeof setInterval>;

	function runScramble() {
		clearInterval(scrambleInterval);
		let iteration = 0;
		const to = scrambleTarget;
		const maxLen = Math.max(originalName.length, hoverName.length);
		const totalFrames = to.length * 5;

		scrambleInterval = setInterval(() => {
			if (to !== scrambleTarget) { runScramble(); return; }

			displayName = Array.from({ length: maxLen }, (_, i) => {
				if (i >= to.length) return '';
				if (to[i] === ' ') return ' ';
				if (i < iteration / 2) return to[i];
				return chars[Math.floor(Math.random() * chars.length)];
			}).join('');

			iteration++;
			if (iteration >= totalFrames) {
				clearInterval(scrambleInterval);
				displayName = to;
			}
		}, 40);
	}

	function scrambleName() {
		isHoveringProfile = true;
		scrambleTarget = hoverName;
		runScramble();
	}

	function unscrambleName() {
		isHoveringProfile = false;
		scrambleTarget = originalName;
		runScramble();
	}

	// --- Subtitle identity cycle (iOS drum roll) ---
	const defaultJob = 'Software Engineer/Designer';
	const hoverJob = 'Human';
	let jobScrolledUp = false;

	function cycleJobIn() {
		jobScrolledUp = true;
	}

	function cycleJobOut() {
		jobScrolledUp = false;
	}

	// --- "technology" → binary ---
	const techWord = 'technology';
	const techBinary = '0101010101';
	let displayTech = techWord;
	let techRaf: number;

	function techToBinary() {
		let iteration = 0;
		const totalFrames = techWord.length * 2;
		cancelAnimationFrame(techRaf);
		function step() {
			displayTech = Array.from({ length: techWord.length }, (_, i) => {
				if (i < iteration / 2) return techBinary[i];
				return Math.random() > 0.5 ? '1' : '0';
			}).join('');
			iteration++;
			if (iteration < totalFrames) {
				techRaf = requestAnimationFrame(step);
			} else {
				displayTech = techBinary;
			}
		}
		step();
	}

	function techFromBinary() {
		let iteration = 0;
		const totalFrames = techWord.length * 2;
		cancelAnimationFrame(techRaf);
		function step() {
			displayTech = Array.from({ length: techWord.length }, (_, i) => {
				if (i < iteration / 2) return techWord[i];
				return Math.random() > 0.5 ? '1' : '0';
			}).join('');
			iteration++;
			if (iteration < totalFrames) {
				techRaf = requestAnimationFrame(step);
			} else {
				displayTech = techWord;
			}
		}
		step();
	}

	// --- "art" colors + scribbles ---
	let artHovered = false;
	const artColors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#A78BFA', '#F472B6', '#34D399'];

	interface Scribble {
		path: string;
		color: string;
		x: number;
		y: number;
		w: number;
		h: number;
		rot: number;
		delay: number;
		dur: number;
		sw: number;
	}

	let scribbles: Scribble[] = [];

	function generateScribbles() {
		const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#A78BFA', '#F472B6', '#34D399', '#FB923C'];
		const count = 12 + Math.floor(Math.random() * 6);
		const vw = typeof window !== 'undefined' ? window.innerWidth : 1200;
		const vh = typeof window !== 'undefined' ? window.innerHeight : 800;
		scribbles = Array.from({ length: count }, () => {
			const w = 150 + Math.random() * 300;
			const h = 40 + Math.random() * 80;
			// Random brush stroke path
			const pts = 4 + Math.floor(Math.random() * 4);
			let d = `M${Math.random() * 10},${Math.random() * h}`;
			for (let j = 1; j < pts; j++) {
				const cx1 = (w / pts) * j - 20 + Math.random() * 40;
				const cy1 = Math.random() * h;
				const ex = (w / pts) * j + Math.random() * 20;
				const ey = Math.random() * h;
				d += ` Q${cx1},${cy1} ${ex},${ey}`;
			}
			return {
				path: d,
				color: colors[Math.floor(Math.random() * colors.length)],
				x: Math.random() * vw - w / 2,
				y: Math.random() * vh - h / 2,
				w,
				h,
				rot: -30 + Math.random() * 60,
				delay: Math.random() * 400,
				dur: 400 + Math.random() * 600,
				sw: 2 + Math.random() * 5,
			};
		});
	}

	onMount(() => { generateScribbles(); });

	// --- "artist" strikethrough ---
	let artistHovered = false;

	// --- "Mere mortal" pulse ---
	let mortalPulsing = false;
</script>

<svelte:head>
	<title>Shakhzod Sharifov</title>
	<meta name="description" content="Crafting digital tools for human needs" />
	<meta name="keywords" content="software engineer, designer, Uzbekistan, technology, art, projects, books, thoughts"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://shakhzod.co/" />
	<meta property="og:title" content="Shakhzod - Software Engineer and Designer" />
	<meta property="og:description" content="Crafting digital tools for human needs"/>
	<meta property="og:image" content="https://shakhzod.co/images/preview.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://shakhzod.co/" />
	<meta property="twitter:title" content="Shakhzod - Software Engineer and Designer" />
	<meta property="twitter:description" content="Crafting digital tools for human needs"/>
	<meta property="twitter:image" content="https://shakhzod.co/images/preview.png" />

	<!-- Additional SEO tags -->
	<link rel="canonical" href="https://shakhzod.co/" />
	<meta name="author" content="Shakhzod" />
	<meta name="robots" content="index, follow" />
</svelte:head>

<div class={`mainContainer ${$currentTheme}`}>
	<div class={`mainWrapper ${$currentTheme}`}>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="profile entrance"
			style="--delay: 0ms"
			on:mouseenter={() => { scrambleName(); cycleJobIn(); }}
			on:mouseleave={() => { unscrambleName(); cycleJobOut(); }}
		>
			<img src={Ava} alt="avatar" class="ava" loading="lazy" />
			<div>
				<p class="fullName"><span class="scramble-text">{displayName}</span></p>
				<div class="job-roller" style="--job-bg: {$currentTheme === 'dark' ? 'black' : 'white'}">
					<div class="job-track" class:scrolled={jobScrolledUp}>
						<p class="job">{defaultJob}</p>
						<p class="job">{hoverJob}</p>
					</div>
				</div>
			</div>
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<p class="subtitle entrance" style="--delay: 60ms">
			Hello, I like to build cool stuff, take pictures,
			and read books when I'm not coding. I would love to call myself an <span
				class="bio-word artist-word"
				class:artist-struck={artistHovered}
				on:mouseenter={() => artistHovered = true}
				on:mouseleave={() => artistHovered = false}
			>artist</span>, but I am not. <span
				class="bio-word mortal-word"
				class:mortal-pulse={mortalPulsing}
				on:mouseenter={() => mortalPulsing = true}
				on:mouseleave={() => mortalPulsing = false}
			>Mere mortal</span> exploring the world of <span
				class="bio-word tech-word"
				on:mouseenter={techToBinary}
				on:mouseleave={techFromBinary}
			>{displayTech}</span> and <span
				class="bio-word art-word"
				class:art-colored={artHovered}
				on:mouseenter={() => { generateScribbles(); requestAnimationFrame(() => requestAnimationFrame(() => { artHovered = true; })); }}
				on:mouseleave={() => { artHovered = false; }}
			><span style="--c: {artColors[0]}">a</span><span style="--c: {artColors[1]}">r</span><span style="--c: {artColors[2]}">t</span></span>.
		</p>
		<p class="subtitle2 entrance" style="--delay: 100ms">If you have any questions or just want to say hi, feel free to email me. See you around</p>

		<div class={`links ${$currentTheme} entrance`} style="--delay: 140ms">
			<a href="https://github.com/shvkhzod">
				Github
			</a>
			<a href="mailto:thedigitaluzb@gmail.com?subject=Work">
				 Email
			</a>
			<a href="https://www.instagram.com/shvkhzood/">
				Instagram
			</a>
		</div>

		<div class={`newSectionHeader ${$currentTheme} entrance`} style="--delay: 200ms">
			<h2 class={`headerSec ${$currentTheme}`}>Projects</h2>
			<a href="projects" class={`seeAll ${$currentTheme}`}>See All</a>
		</div>

		<div class={`${$currentTheme} prolist entrance`} style="--delay: 260ms">
			{#if projects}
				{#each projects.slice(0, 3) as project}
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

		<div class={`newSectionHeader ${$currentTheme} entrance`} style="--delay: 340ms">
			<h2 class={`headerSec ${$currentTheme}`}>Books</h2>
			<a href="books" class={`seeAll ${$currentTheme}`}>See All</a>
		</div>

		<div class={`list ${$currentTheme} entrance`} style="--delay: 400ms">
			<div class={`list ${currentTheme}`}>
				{#each books as book}
					<a href={`/books`}>
						<TinyView title={book.title} subtitle={book.subtitle} />
					</a>
				{/each}
			</div>
		</div>

		<div class={`newSectionHeader ${$currentTheme} entrance`} style="--delay: 460ms">
			<h2 class={`headerSec ${$currentTheme}`}>Thoughts</h2>
			<a href="thoughts" class={`seeAll ${$currentTheme}`}>See All</a>
		</div>

		<div class={`list ${$currentTheme} entrance`} style="--delay: 520ms">
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

<div class="scribble-overlay" class:scribble-visible={artHovered}>
	{#each scribbles as s}
		<svg
			style="position:absolute; left:{s.x}px; top:{s.y}px; transform:rotate({s.rot}deg); --delay:{s.delay}ms; --dur:{s.dur}ms;"
			width={s.w} height={s.h} viewBox="0 0 {s.w} {s.h}" fill="none"
			class="scribble-stroke"
		>
			<path d={s.path} stroke={s.color} stroke-width={s.sw} stroke-linecap="butt" pathLength="1" />
		</svg>
	{/each}
</div>

<style>
	/* --- Entrance animation --- */
	@keyframes enterUp {
		from {
			opacity: 0;
			transform: translateY(16px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.entrance {
		opacity: 0;
		animation: enterUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
		animation-delay: var(--delay, 0ms);
		will-change: transform, opacity;
		backface-visibility: hidden;
	}

	/* --- Bio word interactions --- */
	.bio-word {
		cursor: default;
		position: relative;
		display: inline;
	}

	.tech-word {
		font-variant-numeric: tabular-nums;
		font-family: 'Geist Sans', sans-serif;
	}
	.tech-word:hover {
		font-family: 'Geist Mono Variable', monospace;
	}

	/* "art" each letter gets a color on hover */
	.art-word {
		position: relative;
	}
	.art-word > span {
		transition: color 0.3s ease;
	}
	.art-colored > span {
		color: var(--c);
	}

	/* Scribbles overlay */
	.scribble-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		pointer-events: none;
		z-index: 999;
	}
	.scribble-stroke path {
		stroke-dasharray: 1;
		stroke-dashoffset: 1;
		opacity: 0;
		transition: stroke-dashoffset var(--dur, 500ms) cubic-bezier(0.23, 1, 0.32, 1),
					opacity 0.3s ease calc(var(--dur, 500ms) * 0.7);
	}
	.scribble-visible .scribble-stroke path {
		stroke-dashoffset: 0;
		opacity: 1;
		transition: stroke-dashoffset var(--dur, 500ms) cubic-bezier(0.23, 1, 0.32, 1) var(--delay, 0ms),
					opacity 0s var(--delay, 0ms);
	}

	/* "artist" strikethrough draws across on hover */
	.artist-word {
		text-decoration: none;
		background-image: linear-gradient(currentColor, currentColor);
		background-position: 0% 55%;
		background-repeat: no-repeat;
		background-size: 0% 1.5px;
		transition: background-size 0.4s cubic-bezier(0.16, 1, 0.3, 1);
	}
	.artist-struck {
		background-size: 100% 1.5px;
	}

	/* "Mere mortal" heartbeat pulse */
	@keyframes mortalPulse {
		0%, 100% { font-weight: 400; }
		15% { font-weight: 700; }
		30% { font-weight: 400; }
		45% { font-weight: 600; }
		55% { font-weight: 400; }
	}
	.mortal-word {
		font-weight: 400;
	}
	.mortal-pulse {
		animation: mortalPulse 1.2s ease-in-out infinite;
	}

	/* --- Micro-interactions --- */
	.profile {
		cursor: default;
		width: fit-content;
	}

	.scramble-text {
		display: inline-block;
		font-variant-numeric: tabular-nums;
		min-width: 140px;
	}

	.job-roller {
		height: 1.4em;
		overflow: hidden;
		position: relative;
	}
	.job-roller::before,
	.job-roller::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		height: 4px;
		z-index: 1;
		pointer-events: none;
	}
	.job-roller::before {
		top: 0;
		background: linear-gradient(to bottom, var(--job-bg, white), transparent);
	}
	.job-roller::after {
		bottom: 0;
		background: linear-gradient(to top, var(--job-bg, white), transparent);
	}
	.job-track {
		transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
	}
	.job-track.scrolled {
		transform: translateY(-1.4em);
	}
	.job-track .job {
		height: 1.4em;
		line-height: 1.4em;
	}

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
			letter-spacing: -0.2px;
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
			letter-spacing: -0.2px;
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
			font-weight: 500;
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
			font-weight: 500;
			letter-spacing: -0.2px;
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
			font-weight: 500;
			letter-spacing: -0.6px;
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
			font-weight: 500;
			line-height: 24px;
			letter-spacing: -0.2px;
			color: black;
			opacity: 50%;
			transition: 0.4s ease-in-out;
		}
		.light .subtitle2 {
			line-height: 24px;
			margin-top: 20px;
			text-align: left;
			font-weight: 500;
			letter-spacing: -0.6px;
			color: black;
			opacity: 50%;
			transition: 0.4s ease-in-out;
		}

		.light .links a {
			color: black;
			font-weight: 600;
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
