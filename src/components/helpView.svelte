<div class='helpWrapper'>
  <img src={`images/${helpThumbnail}.png`} alt='help'/>
  <h1 class='helpTitle'>{helpTitle}</h1>
  <p class='helpSubtitle'>{helpSubtitle}</p>
</div>

<script lang='ts'>
  export let helpThumbnail: string;
  export let helpTitle: string;
  export let helpSubtitle: string;
</script>
<style>
.helpWrapper{
    width: max-content;
      background: 
    linear-gradient(#1D1D1D 0 0) padding-box, /*this is your grey background*/
    linear-gradient(185deg, rgba(180,180,180,0.85) 0%, rgba(71,70,70,0) 100%) border-box;
    padding: 18px;
    border: 1px solid transparent;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .helpTitle {
    text-align: left;
    font-size:20px;
    color: white;
  }

  .helpSubtitle {
    color: white;
    opacity: 0.55;
    font-size: 16px;
  }

  img {
  width: 120px;
  }
</style>  

