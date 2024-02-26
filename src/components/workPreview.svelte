<div class='workWrapper'>
  <h2>{workTitle}</h2>
  <img src={`images/${workThumbnail}.webp`} alt='work thumbnail'/>
</div>

<script lang='ts'>
  export let workTitle: string;
  export let workThumbnail: string;
</script> 
<style>
.workWrapper {
  width: 280px;
  display: flex;
  flex-direction: column;
  overflow:hidden;
  border-radius: 48px;
  justify-content: center;
  }

  h2 {
  position: absolute;
  color: black;
  margin-bottom: 200px;
  margin-left: 20px;

  }

</style>  
