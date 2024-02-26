<div class='blogPreviewWrap'>
  <p class='blogCategory'>{blogCategory}</p>
  <h1 class='blogTitle'>{blogTitle}</h1>
</div>

<script lang='ts'>
  export let blogCategory: string;
  export let blogTitle: string;
</script>
<style>
  .blogPreviewWrap{
    width: 300px;
      background: 
    linear-gradient(#1D1D1D 0 0) padding-box, /*this is your grey background*/
    linear-gradient(185deg, rgba(180,180,180,0.85) 0%, rgba(71,70,70,0) 100%) border-box;
    padding: 18px;
    border: 1px solid transparent;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
  }

  .blogCategory {
    color: #47E398;
  }
  .blogTitle {
    color: white;
    font-size: 20px;
  }


</style>
