<div class="item">
    <img src={imgUrl} alt=""/>
    <div class="itemContent">
     <p class="itemHeadline">{headline}</p>
     <p class="itemDesc">{content}</p>
    </div>
   {#if hasPdf}
   <p class="pdf">PDF</p>
   {/if}
   
</div>

<script lang='ts'>
    
    export let imgUrl='';
    export let headline='';
    export let content='';
    export let hasPdf = true;

</script>


<style>
    .item {
        width: 280px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    img {
        width: 50px;
        height: 50px;
        border-radius: 12px;
        
    }

  .itemHeadline {
    font-size: 24px;
  }

  .itemContent .itemHeadline {
    font-size: 16px;
    font-weight: 600;
    color: black
  }

  .item .pdf {
    font-size: 12px;
    font-weight: 600;
    color: rgb(122, 122, 122);
    border: 1px solid rgb(122, 122, 122);
    padding:  6px 8px;
    border-radius: 12px;
  }
   
</style>
