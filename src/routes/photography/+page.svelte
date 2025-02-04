<script lang="ts">
  import {fly, fade, scale} from 'svelte/transition';
  export let data;
  
  let selectedPhoto: { imagePath: string; caption: string } | null = null;
  let isModalOpen = false;

  function openModal(photo: any) {
    selectedPhoto = photo;
    isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    isModalOpen = false;
    document.body.style.overflow = 'auto';
    setTimeout(() => (selectedPhoto = null), 300);
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div class="photo-grid">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  {#each data.photos as photo}
    <article
      class="photo-card"
      on:click={() => openModal(photo)}
      in:fly={{ y: 20, duration: 300 }}
      out:fade
    >
      <img
        src={photo.imagePath}
        alt={photo.caption}
        loading="lazy"
        class="thumbnail"
      />
    </article>
  {/each}
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
{#if isModalOpen}
  <div
    class="modal-backdrop"
    on:click={closeModal}
    transition:fade={{ duration: 300 }}
  >
    <div class="modal-content" on:click|stopPropagation>
      {#if selectedPhoto}
        <img
          src={selectedPhoto.imagePath}
          alt={selectedPhoto.caption}
          class="enlarged-photo"
          transition:scale={{ duration: 300 }}
        />
        <div class="caption" transition:fade={{ delay: 200 }}>
          {selectedPhoto.caption}
        </div>
      {/if}
    </div>
  </div>
{/if}

<style>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.scale-enter-active,
.scale-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.scale-enter-from,
.scale-leave-to {
  transform: scale(0.95);
}
  .photo-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 8px;
    padding: 100px 400px;
  }

  .photo-card {
    cursor: pointer;
    transition: transform 0.3s ease;
    aspect-ratio: 1;
    overflow: hidden;
  }

  .thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .modal-backdrop {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: grid;
    place-items: center;
    backdrop-filter: blur(5px);

  }

  .modal-content {
    max-width: 90vw;
    max-height: 90vh;
    position: relative;
    
  }

  .enlarged-photo {
    max-width: 100%;
    max-height: 80vh;
    object-fit: contain;
    border-radius: 8px;
  }

  .caption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
    color: white;
    padding: 2rem 1rem 1rem;
    text-align: center;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    .photo-grid {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      padding: 1rem;
    }
  }
</style>