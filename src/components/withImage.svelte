<!-- ProjectCard.svelte -->
<script>
    export let imageUrl = '';
    export let title = '';
    export let altText = '';
    export let subtitle = '';
 
  </script>
  <div class="card">
    <div class="image-container">
      <img
        src={imageUrl}
        alt={altText}
        class="project-image"
      />
      <div class="gradient-overlay" />
    </div>
    <h3 class="title">{title}</h3>
    <p class="subtitle">{subtitle}</p>
  </div>
  
  <style>
    .card {
      max-width: 245px;
      transition: transform 0.2s ease;
      cursor: pointer;
      background: transparent;
    }
  
    .card:hover {
      transform: translateY(-4px);
    }
  
    .image-container {
      border-radius: 12px;
      position: relative;
      width: 245px;
      height: 200px;
    }
  
    .project-image {
      border-radius: 12px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  
    .gradient-overlay {
      border-radius: 12px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 40%;
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
    }
  
    .title {
     margin-top: 12px;
      z-index: 2;
      font-size: 14px;
      font-weight: 600;
      line-height: 1.3;
      text-decoration: underline;
      text-underline-offset: 4px;
    }

    .subtitle {
        margin-top: 8px;
        font-size: 13px;
        font-weight: 400;
        opacity: 65%;
    }

    @media (max-width: 768px) {
      .card {
        margin-top: 40px;
        max-width: 100%;
      }
  
      .image-container {
        width: 100%;
        height:250px;
      }

      
    }
  </style>