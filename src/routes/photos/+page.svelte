<script lang="ts">
	import { onMount, onDestroy, tick } from 'svelte';
	import { browser } from '$app/environment';
	import { theme } from '../../utils/theme';

	interface Photo {
		id: string;
		src: string;
		alt: string;
		width: number;
		height: number;
		film?: string;
		camera?: string;
		location?: string;
		date?: string;
	}

		const allPhotos: Photo[] = [
		{ id: '1',  src: '/photos/opt/000035680004.webp',               alt: 'Gothic ruins overgrown with greenery',             width:  795, height: 1200, film: 'Kodak Gold 200', camera: 'Nikon FM2', location: 'London' },
		{ id: '2',  src: '/photos/opt/000035680014.webp',               alt: 'Two readers by stone columns',                     width:  796, height: 1200, film: 'Kodak Gold 200', camera: 'Nikon FM2', location: 'London' },
		{ id: '3',  src: '/photos/opt/000035680015.webp',               alt: 'Busy man with the phone',                          width: 1200, height:  795, film: 'Kodak Gold 200', camera: 'Nikon FM2', location: 'London' },
		{ id: '4',  src: '/photos/opt/000035680018.webp',               alt: 'St Paul\'s Cathedral at golden hour',              width:  796, height: 1200, film: 'Kodak Gold 200', camera: 'Nikon FM2', location: 'London' },
		{ id: '5',  src: '/photos/opt/000035680021-topaz-sharpen.webp', alt: 'Pedestrians crossing at sunset',                   width: 1200, height:  795, film: 'Kodak Gold 200', camera: 'Nikon FM2', location: 'London' },
		{ id: '6',  src: '/photos/opt/01-2.webp',                       alt: 'Man on Wassily chair, hand over face',             width:  800, height: 1200, camera: 'Sony A7CII' },
		{ id: '7',  src: '/photos/opt/4.webp',                          alt: 'Portrait in profile against red wall',             width:  800, height: 1200, camera: 'Sony A7CII' },
		{ id: '8',  src: '/photos/opt/DSC00123.webp',                   alt: 'Barbershop through the window',                    width:  800, height: 1200, camera: 'Sony A7CII', location: 'London' },
		{ id: '9',  src: '/photos/opt/DSC00138-2.webp',                 alt: 'Christmas wreath on iron gate',                    width:  800, height: 1200, camera: 'Sony A7CII', location: 'London' },
		{ id: '10', src: '/photos/opt/DSC00246.JPG',                    alt: 'Tim Pouring Gin',                                  width:  800, height: 1200, camera: 'Sony A7CII', location: 'London' },
		{ id: '11', src: '/photos/opt/DSC00778.webp',                   alt: 'Cool Santa',                                       width:  675, height: 1200, camera: 'Sony A7CII', location: 'London' },
		{ id: '12', src: '/photos/opt/DSC02029.webp',                   alt: 'Mr Paolo getting married',                         width:  800, height: 1200, camera: 'Sony A7CII' },
		{ id: '13', src: '/photos/opt/DSC02551.webp',                   alt: 'Hands writing on a gift tag',                      width: 1200, height:  800, camera: 'Sony A7CII' },
		{ id: '14', src: '/photos/opt/DSC02896.webp',                   alt: 'Guest writing at a dinner table',                  width:  800, height: 1200, camera: 'Sony A7CII' },
		{ id: '15', src: '/photos/opt/DSC04588.webp',                   alt: 'Victorian inn with hanging flower baskets',        width:  800, height: 1200, camera: 'Sony A7CII', location: 'London' },
		{ id: '16', src: '/photos/opt/DSC05482.webp',                   alt: 'Woman in purple beanie, Chinatown at night',       width:  800, height: 1200, camera: 'Sony A7CII', location: 'London' },
		{ id: '17', src: '/photos/opt/DSC05667.webp',                   alt: 'Gentleman with a pint at St Pancras',              width:  800, height: 1200, camera: 'Sony A7CII', location: 'London' },
		{ id: '18', src: '/photos/opt/DSC07948.webp',                   alt: 'Jim trying not to look at the camera',             width:  800, height: 1200, camera: 'Sony A7CII', location: 'London' },
		{ id: '19', src: '/photos/opt/DSC08415.webp',                   alt: 'Vintage bottles on a bar counter',                 width:  800, height: 1200, camera: 'Sony A7CII', location: 'London' },
		{ id: '20', src: '/photos/opt/DSC08667.webp',                   alt: 'Ida as always',                                    width:  800, height: 1200, camera: 'Sony A7CII' },
		{ id: '21', src: '/photos/opt/DSCF0841.webp',                   alt: 'Motorcyclist passing the Royal Academy',           width:  675, height: 1200, camera: 'Fujiflm X-M5', location: 'London' },
		{ id: '22', src: '/photos/opt/DSCF1422.webp',                   alt: 'No entry sign with graffiti sticker',              width:  800, height: 1200, camera: 'Fujiflm X-M5', location: 'London' },
		{ id: '23', src: '/photos/opt/DSCF1862-2.webp',                 alt: 'Man in varsity jacket, Tudor building',            width:  800, height: 1200, camera: 'Fujiflm X-M5', location: 'London' },
		{ id: '24', src: '/photos/opt/DSCF2808.webp',                   alt: 'Champagne toast in black and white',               width:  800, height: 1200, camera: 'Fujiflm X-M5' },
		{ id: '25', src: '/photos/opt/DSCF3726-Enhanced-NR.webp',       alt: 'Iraina posing for picture',                        width:  800, height: 1200, camera: 'Fujiflm X-M5' },
		{ id: '26', src: '/photos/opt/DSCF3931.webp',                   alt: 'Couple singing at a party',                        width:  800, height: 1200, camera: 'Fujiflm X-M5' },
		{ id: '27', src: '/photos/opt/DSCF4149-Enhanced-NR.webp',       alt: 'Birthday girl(Ale) having a good time',            width:  800, height: 1200, camera: 'Fujiflm X-M5' },
		{ id: '28', src: '/photos/opt/DSCF4489.webp',                   alt: 'Pink Nissan Figaro interior with bows',            width:  675, height: 1200, camera: 'Fujiflm X-M5', location: 'London' },
		{ id: '29', src: '/photos/opt/DSCF4660.webp',                   alt: 'Flowers on a green mosaic cafe table',             width:  675, height: 1200, camera: 'Fujiflm X-M5' },
		{ id: '30', src: '/photos/opt/DSCF5198.webp',                   alt: 'Nadira flexing her hair',                          width:  800, height: 1200, camera: 'Fujiflm X-M5' },
		{ id: '31', src: '/photos/opt/DSCF5712.webp',                   alt: 'Three friends overlooking Parliament and Big Ben', width: 1080, height:  720, camera: 'Fujiflm X-M5', location: 'London' },
		{ id: '32', src: '/photos/opt/DSCF5760.webp',                   alt: 'Dome interior with arched windows',                width:  675, height: 1200, camera: 'Fujiflm X-M5', location: 'London' },
		{ id: '33', src: '/photos/opt/DSCF7374.webp',                   alt: 'Two silhouettes under a golden archway',           width:  800, height: 1200, camera: 'Fujiflm X-M5', location: 'London' },
		{ id: '34', src: '/photos/opt/DSCF7406.webp',                   alt: 'Summer afternoon by the Thames, City skyline',     width:  675, height: 1200, camera: 'Fujiflm X-M5', location: 'London' },
		{ id: '35', src: '/photos/opt/DSCF7538.webp',                   alt: 'Smiling man by an ivy-covered building',           width:  675, height: 1200, camera: 'Fujiflm X-M5', location: 'London' },
		{ id: '36', src: '/photos/opt/DSCF7574.webp',                   alt: 'Cyclist passing The Plough Inn',                   width:  675, height: 1200, camera: 'Fujiflm X-M5', location: 'Oxford' },
		{ id: '37', src: '/photos/opt/DSCF7585.webp',                   alt: 'Bench in an Oxford college courtyard',             width:  675, height: 1200, camera: 'Fujiflm X-M5', location: 'Oxford' },
		{ id: '38', src: '/photos/opt/DSCF7737.webp',                   alt: 'Flower arrangement in a Gothic chapel',            width:  800, height: 1200, camera: 'Fujiflm X-M5', location: 'Oxford' },
		{ id: '39', src: '/photos/opt/DSCF7824.webp',                   alt: 'Green bicycle at Jesus College gate',              width:  675, height: 1200, camera: 'Fujiflm X-M5', location: 'Oxford' },
		{ id: '40', src: '/photos/opt/DSCF8057.webp',                   alt: 'Oxford Examination Schools facade',                width:  800, height: 1200, camera: 'Fujiflm X-M5', location: 'Oxford' },
		{ id: '41', src: '/photos/opt/DSCF8357.webp',                   alt: 'Parisian brasserie at golden hour',                width:  675, height: 1200, camera: 'Fujiflm X-M5', location: 'Paris' },
		{ id: '42', src: '/photos/opt/DSCF8363.webp',                   alt: 'Cyclist crossing a Parisian boulevard',            width:  675, height: 1200, camera: 'Fujiflm X-M5', location: 'Paris' },
		{ id: '43', src: '/photos/opt/DSCF8583.webp',                   alt: 'Visitors in a Versailles hallway',                 width:  675, height: 1200, camera: 'Fujiflm X-M5', location: 'Versailles' },
		{ id: '44', src: '/photos/opt/DSCF8607.webp',                   alt: 'Versailles gardens through a palace window',       width:  675, height: 1200, camera: 'Fujiflm X-M5', location: 'Versailles' },
		{ id: '45', src: '/photos/opt/DSCF8935.webp',                   alt: 'Parisan Tree',                                     width:  675, height: 1200, camera: 'Fujiflm X-M5', location: 'Versailles' },
		{ id: '46', src: '/photos/opt/DSCF8997.webp',                   alt: 'Cafe terrace with a passing cyclist',              width:  675, height: 1200, camera: 'Fujiflm X-M5', location: 'Paris' },
		{ id: '47', src: '/photos/opt/DSCF9334.webp',                   alt: 'London Eye capsules from below',                   width:  675, height: 1200, camera: 'Fujiflm X-M5', location: 'London' },
		{ id: '48', src: '/photos/opt/DSCF9580.webp',                   alt: 'Posing for a photo by Big Ben at sunset',          width: 1200, height:  800, camera: 'Fujiflm X-M5', location: 'London' },
		{ id: '49', src: '/photos/opt/daunt2.webp',                     alt: 'Browsing the Daunt Books window display',          width:  675, height: 1200, location: 'London' },
		{ id: '50', src: '/photos/opt/eye.webp',                        alt: 'London Eye soaring into blue sky',                 width:  675, height: 1200, location: 'London' },
		{ id: '51', src: '/photos/opt/reddit.webp',                     alt: 'Morgan car on Bond Street at dusk',                width: 1132, height: 1200, camera: 'Fujiflm X-M5', location: 'London' },
	];

	// --- Seeded PRNG ---
	function mulberry32(seed: number) {
		return function () {
			seed |= 0;
			seed = (seed + 0x6d2b79f5) | 0;
			let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
			t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
			return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
		};
	}

	interface PlacedPhoto extends Photo {
		worldX: number;
		worldY: number;
		displayWidth: number;
		displayHeight: number;
		rotation: number;
		chunkKey: string;
	}

	// --- Chunk system for infinite canvas ---
	const COLS = 4;
	const ROWS = 3;
	const GAP = 20;
	const FIXED_SIZE = 440;
	const CELL_W = FIXED_SIZE + GAP;
	const CELL_H = FIXED_SIZE + GAP;
	const CHUNK_W = COLS * CELL_W;
	const CHUNK_H = ROWS * CELL_H;

	const chunkCache = new Map<string, PlacedPhoto[]>();

	function hashSeed(cx: number, cy: number): number {
		let h = cx * 73856093 ^ cy * 19349663;
		h = ((h >> 16) ^ h) * 0x45d9f3b;
		h = ((h >> 16) ^ h) * 0x45d9f3b;
		return (h >> 16) ^ h;
	}

	// Use modular arithmetic to assign each cell a unique photo index
	// across a chunk and its neighbors. We tile in groups of ceil(51/12)=5 chunks
	// along each axis so that adjacent chunks always pick different slices.
	const CELLS_PER_CHUNK = COLS * ROWS; // 12
	const TILE_PERIOD = Math.ceil(allPhotos.length / CELLS_PER_CHUNK); // 5

	function generateChunk(cx: number, cy: number): PlacedPhoto[] {
		const key = `${cx},${cy}`;
		if (chunkCache.has(key)) return chunkCache.get(key)!;

		const rand = mulberry32(hashSeed(cx, cy));
		const ox = cx * CHUNK_W;
		const oy = cy * CHUNK_H;
		const result: PlacedPhoto[] = [];

		// Map chunk to a tile index (0..TILE_PERIOD-1) on each axis
		// Use modulo that handles negatives correctly
		const tileX = ((cx % TILE_PERIOD) + TILE_PERIOD) % TILE_PERIOD;
		const tileY = ((cy % TILE_PERIOD) + TILE_PERIOD) % TILE_PERIOD;
		// Base offset into allPhotos — each tile position gets a unique slice
		const baseOffset = (tileY * TILE_PERIOD + tileX) * CELLS_PER_CHUNK;

		// Create a shuffled order for cells within this chunk
		const cellOrder = Array.from({ length: CELLS_PER_CHUNK }, (_, i) => i);
		for (let i = cellOrder.length - 1; i > 0; i--) {
			const j = Math.floor(rand() * (i + 1));
			[cellOrder[i], cellOrder[j]] = [cellOrder[j], cellOrder[i]];
		}

		for (let row = 0; row < ROWS; row++) {
			for (let col = 0; col < COLS; col++) {
				const idx = row * COLS + col;
				const photoIdx = (baseOffset + cellOrder[idx]) % allPhotos.length;
				const photo = allPhotos[photoIdx];
				const aspect = photo.width / photo.height;

				let dw: number, dh: number;
				if (aspect >= 1) {
					dw = FIXED_SIZE;
					dh = dw / aspect;
				} else {
					dh = FIXED_SIZE;
					dw = dh * aspect;
				}

				// Center photo in cell
				const cellX = ox + col * CELL_W;
				const cellY = oy + row * CELL_H;
				const offsetX = (CELL_W - dw) / 2;
				const offsetY = (CELL_H - dh) / 2;

				result.push({
					...photo,
					id: `${key}-${idx}`,
					worldX: cellX + offsetX,
					worldY: cellY + offsetY,
					displayWidth: dw,
					displayHeight: dh,
					rotation: 0,
					chunkKey: key,
				});
			}
		}

		chunkCache.set(key, result);
		return result;
	}

	// --- Camera state (mutable, NOT reactive for perf) ---
	let camX = 0;
	let camY = 0;
	let velX = 0;
	let velY = 0;
	let vw = 0;
	let vh = 0;

	// Svelte-reactive snapshot for chunk loading (updated less often)
	let snapCamX = 0;
	let snapCamY = 0;

	// --- Interaction state ---
	let isDragging = false;
	let dragStartX = 0;
	let dragStartY = 0;
	let camStartX = 0;
	let camStartY = 0;
	let lastMoveX = 0;
	let lastMoveY = 0;
	let lastMoveTime = 0;
	let hoveredId: string | null = null;
	let lightboxPhoto: PlacedPhoto | null = null;
	let didDrag = false;
	let rafId = 0;
	let viewportEl: HTMLDivElement;
	let canvasEl: HTMLDivElement;

	// --- 3D concave effect: center recedes, sides come forward ---
	function getPhoto3D(worldX: number, displayWidth: number, cx: number): string {
		if (!browser) return '';
		const vpW = typeof window !== 'undefined' ? window.innerWidth : 1200;
		const screenX = worldX - cx + displayWidth / 2;
		const t = Math.max(-1, Math.min(1, (screenX / vpW) * 2 - 1));
		const rotY = t * -8;
		const tz = (1 - t * t) * -60;
		return `rotateY(${rotY.toFixed(2)}deg) translateZ(${tz.toFixed(1)}px)`;
	}

	// --- Gather visible photos from nearby chunks ---
	function getVisiblePhotos(cx: number, cy: number, w: number, h: number): PlacedPhoto[] {
		const buffer = 800;
		const minCX = Math.floor((cx - buffer) / CHUNK_W) - 1;
		const maxCX = Math.floor((cx + w + buffer) / CHUNK_W) + 1;
		const minCY = Math.floor((cy - buffer) / CHUNK_H) - 1;
		const maxCY = Math.floor((cy + h + buffer) / CHUNK_H) + 1;

		const result: PlacedPhoto[] = [];
		for (let ccx = minCX; ccx <= maxCX; ccx++) {
			for (let ccy = minCY; ccy <= maxCY; ccy++) {
				const chunk = generateChunk(ccx, ccy);
				for (const p of chunk) {
					const sx = p.worldX - cx;
					const sy = p.worldY - cy;
					if (
						sx + p.displayWidth > -buffer &&
						sx < w + buffer &&
						sy + p.displayHeight > -buffer &&
						sy < h + buffer
					) {
						result.push(p);
					}
				}
			}
		}
		return result;
	}

	// --- Render loop: moves canvas via transform, no Svelte reactivity ---
	function updateCanvas() {
		if (canvasEl) {
			canvasEl.style.transform = `translate3d(${-camX}px, ${-camY}px, 0)`;
		}
	}

	function scheduleSnap() {
		// Update Svelte state for chunk recalculation (throttled)
		snapCamX = camX;
		snapCamY = camY;
	}

	let lastSnapTime = 0;

	function maybeSnap() {
		const now = performance.now();
		if (now - lastSnapTime > 150) {
			lastSnapTime = now;
			scheduleSnap();
		}
	}

	// --- Physics loop ---
	function physicsLoop() {
		const moving = Math.abs(velX) > 0.1 || Math.abs(velY) > 0.1;
		if (moving) {
			camX += velX;
			camY += velY;
			// Friction: fast decay for snappy stop
			velX *= 0.92;
			velY *= 0.92;
			// Cut off tiny residual
			if (Math.abs(velX) < 0.1) velX = 0;
			if (Math.abs(velY) < 0.1) velY = 0;
			updateCanvas();
			maybeSnap();
			rafId = requestAnimationFrame(physicsLoop);
		} else {
			velX = 0;
			velY = 0;
			updateCanvas();
			scheduleSnap();
		}
	}

	// --- Pointer handlers ---
	function onPointerDown(e: PointerEvent) {
		if (lightboxPhoto) return;
		isDragging = true;
		didDrag = false;
		dragStartX = e.clientX;
		dragStartY = e.clientY;
		camStartX = camX;
		camStartY = camY;
		lastMoveX = e.clientX;
		lastMoveY = e.clientY;
		lastMoveTime = performance.now();
		velX = 0;
		velY = 0;
		cancelAnimationFrame(rafId);
	}

	function onPointerMove(e: PointerEvent) {
		if (!isDragging) return;
		const dx = e.clientX - dragStartX;
		const dy = e.clientY - dragStartY;

		if (Math.abs(dx) > 5 || Math.abs(dy) > 5) didDrag = true;

		camX = camStartX - dx;
		camY = camStartY - dy;
		updateCanvas();
		maybeSnap();

		// Track velocity for inertia (smoothed)
		const now = performance.now();
		const dt = now - lastMoveTime;
		if (dt > 0 && dt < 100) {
			const instantVX = -(e.clientX - lastMoveX) / dt * 16;
			const instantVY = -(e.clientY - lastMoveY) / dt * 16;
			// Exponential smoothing for less jitter
			velX = velX * 0.4 + instantVX * 0.6;
			velY = velY * 0.4 + instantVY * 0.6;
		}
		lastMoveX = e.clientX;
		lastMoveY = e.clientY;
		lastMoveTime = now;
	}

	function onPointerUp() {
		if (!isDragging) return;
		isDragging = false;
		// Boost velocity slightly for a snappier throw
		velX *= 1.2;
		velY *= 1.2;
		// Clamp max speed
		const maxVel = 60;
		velX = Math.max(-maxVel, Math.min(maxVel, velX));
		velY = Math.max(-maxVel, Math.min(maxVel, velY));
		if (Math.abs(velX) > 0.5 || Math.abs(velY) > 0.5) {
			rafId = requestAnimationFrame(physicsLoop);
		} else {
			scheduleSnap();
		}
	}

	// --- Wheel → pan with momentum ---
	function onWheel(e: WheelEvent) {
		e.preventDefault();
		cancelAnimationFrame(rafId);
		camX += e.deltaX * 1.2;
		camY += e.deltaY * 1.2;
		// Give wheel some momentum
		velX = e.deltaX * 0.5;
		velY = e.deltaY * 0.5;
		updateCanvas();
		rafId = requestAnimationFrame(physicsLoop);
	}

	// --- Lightbox ---
	function openLightbox(photo: PlacedPhoto) {
		if (didDrag) return;
		lightboxPhoto = photo;
	}

	function closeLightbox() {
		lightboxPhoto = null;
	}

	function onKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape' && lightboxPhoto) closeLightbox();
	}

	// --- Reactive: only recompute visible photos on snapshot updates ---
	$: visible = getVisiblePhotos(snapCamX, snapCamY, vw, vh);

	onMount(() => {
		camX = -vw / 2;
		camY = -vh / 2;
		updateCanvas();
		scheduleSnap();
	});

	onDestroy(() => {
		if (browser) cancelAnimationFrame(rafId);
	});
</script>

<svelte:head>
	<title>Photos — Shakhzod</title>
</svelte:head>

<svelte:window
	on:keydown={onKeydown}
	on:pointermove={onPointerMove}
	on:pointerup={onPointerUp}
	bind:innerWidth={vw}
	bind:innerHeight={vh}
/>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="viewport"
	class:dark={$theme === 'dark'}
	class:light={$theme === 'light'}
	class:dragging={isDragging}
	bind:this={viewportEl}
	on:pointerdown={onPointerDown}
	on:wheel|preventDefault={onWheel}
>
	<div class="canvas" bind:this={canvasEl}>
		{#each visible as photo (photo.id)}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class="photo-item"
				class:hovered={hoveredId === photo.id}
				style="
					transform: translate3d({photo.worldX}px, {photo.worldY}px, 0) {getPhoto3D(photo.worldX, photo.displayWidth, snapCamX)};
					width: {photo.displayWidth}px;
					height: {photo.displayHeight}px;
					z-index: {hoveredId === photo.id ? 100 : 1};
				"
				on:mouseenter={() => (hoveredId = photo.id)}
				on:mouseleave={() => (hoveredId = null)}
				on:click={() => openLightbox(photo)}
			>
				<img
					src={photo.src}
					alt={photo.alt}
					loading="lazy"
					draggable="false"
					width={Math.round(photo.displayWidth)}
					height={Math.round(photo.displayHeight)}
				/>
			</div>
		{/each}
	</div>

	<p class="page-label">Photos</p>
</div>

{#if lightboxPhoto}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="lightbox" on:click={closeLightbox}>
		<button class="lightbox-close" on:click={closeLightbox} aria-label="Close">&times;</button>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="lightbox-content" on:click|stopPropagation>
			<img
				src={lightboxPhoto.src}
				alt={lightboxPhoto.alt}
				class="lightbox-img"
			/>
			<div class="lightbox-info">
				<span class="info-title">{lightboxPhoto.alt}</span>
				{#if lightboxPhoto.camera}
					<span class="info-item">{lightboxPhoto.camera}</span>
				{/if}
				{#if lightboxPhoto.film}
					<span class="info-item">{lightboxPhoto.film}</span>
				{/if}
				{#if lightboxPhoto.location}
					<span class="info-item">{lightboxPhoto.location}</span>
				{/if}
				{#if lightboxPhoto.date}
					<span class="info-item">{lightboxPhoto.date}</span>
				{/if}
			</div>
		</div>
	</div>
{/if}

<style>
	.viewport {
		width: 100%;
		height: calc(100vh - 60px);
		overflow: hidden;
		cursor: grab;
		user-select: none;
		-webkit-user-select: none;
		touch-action: none;
		position: relative;
		transition: background-color 0.4s ease-in-out;
		perspective: 1200px;
		perspective-origin: 50% 50%;
	}

	.canvas {
		position: absolute;
		top: 0;
		left: 0;
		will-change: transform;
		transform-style: preserve-3d;
	}

	.viewport.dark {
		background-color: #000;
	}

	.viewport.light {
		background-color: #f5f5f5;
	}

	.viewport.dragging {
		cursor: grabbing;
	}

	.page-label {
		position: absolute;
		bottom: 24px;
		left: 28px;
		font-size: 13px;
		font-family: 'Geist Sans', sans-serif;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		pointer-events: none;
		user-select: none;
		z-index: 50;
		transition: color 0.4s ease-in-out;
		background: none !important;
		padding: 0 !important;
		margin: 0;
	}

	.dark .page-label {
		color: rgba(255, 255, 255, 0.25);
	}

	.light .page-label {
		color: rgba(0, 0, 0, 0.2);
	}

	.photo-item {
		position: absolute;
		top: 0;
		left: 0;
		will-change: transform;
		transition: box-shadow 0.3s ease;
	}

	.photo-item img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		border-radius: 2px;
		pointer-events: none;
	}

	.photo-item.hovered {
		z-index: 100 !important;
	}

	.dark .photo-item.hovered {
		box-shadow: 0 6px 28px rgba(0, 0, 0, 0.5);
	}

	.light .photo-item.hovered {
		box-shadow: 0 6px 28px rgba(0, 0, 0, 0.12);
	}

	/* Lightbox */
	.lightbox {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.9);
		backdrop-filter: blur(12px);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		cursor: pointer;
		animation: lbIn 0.2s ease;
	}

	@keyframes lbIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	.lightbox-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
		cursor: default;
		animation: lbScale 0.25s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.lightbox-img {
		max-width: 90vw;
		max-height: 80vh;
		object-fit: contain;
		border-radius: 2px;
	}

	.lightbox-info {
		display: flex;
		flex-direction: row;
		gap: 20px;
		align-items: center;
		font-family: 'Geist Sans', sans-serif;
		font-size: 13px;
		color: rgba(255, 255, 255, 0.5);
		letter-spacing: 0.02em;
	}

	.info-item {
		white-space: nowrap;
	}

	.info-title {
		color: rgba(255, 255, 255, 0.8);
		font-weight: 500;
	}

	@keyframes lbScale {
		from { transform: scale(0.96); opacity: 0; }
		to { transform: scale(1); opacity: 1; }
	}

	.lightbox-close {
		position: absolute;
		top: 20px;
		right: 24px;
		background: none !important;
		border: none;
		color: rgba(255, 255, 255, 0.5);
		font-size: 28px;
		cursor: pointer;
		line-height: 1;
		padding: 8px;
		font-family: 'Geist Sans', sans-serif;
		transition: color 0.2s;
	}

	.lightbox-close:hover {
		color: white;
		background: none !important;
	}

	/* Mobile — smaller photos, same panning */
	@media (max-width: 768px) {
		.page-label {
			bottom: 16px;
			left: 16px;
			font-size: 12px;
		}
	}
</style>
