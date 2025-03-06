<div class={`itemWrap ${$currentTheme}`}>
  <p class={`itemTitle ${$currentTheme}`}>{blogTitle}</p>
  <div class={`line ${$currentTheme}`}/>
  <p class={`itemDate ${$currentTheme}`}>{date}</p>
</div>

<script lang='ts'>
  export let blogTitle: string;
  export let date: string;
  
  import { writable, type Writable } from "svelte/store";
	import { theme } from "../utils/theme";

    let currentTheme:Writable<string> = writable($theme)

    theme.subscribe(value => {
        currentTheme.set(value);
        console.log("changed in component")
    })

</script>

<style>
.dark .itemDate {
  color: white;
  margin-left: auto; /* Push the date to the right */
  transition: 0.4s ease-in-out;
  font-weight: 500; /* Push the date to the right */
}
.dark.itemWrap {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 0px;
  gap: 20px;
  transition: 0.4s ease-in-out;
}

.dark .itemTitle {
  font-size: 14px;
  font-weight: 500;
  color: rgb(255, 255, 255);
  width: max-content; /* Let the title take its natural width */
  transition: 0.4s ease-in-out;
}

.dark .line {
  flex-grow: 1;
  height: 1px;
  background-color:rgba(255, 255, 255, 0.386);
  transition: 0.4s ease-in-out;
  }
 .dark .itemDate {
    font-size: 14px;
    color: white;
    font-weight: 500;
    margin-left: auto;
    transition: 0.4s ease-in-out;
  } 

  /** Light */

  .light .itemDate {
  color: black;
  margin-left: auto;
  font-weight: 500; /* Push the date to the right */
  transition: 0.4s ease-in-out;
}
.light.itemWrap {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 0px;
  gap: 20px;
  transition: 0.4s ease-in-out;
}

.light.itemWrap:hover {
  background-color: #06060617;
  transition: 0.4s ease-in-out;
}

.light .itemTitle {
  font-size: 14px;
  font-weight: 500;
  color:black;
  width: max-content; /* Let the title take its natural width */
  transition: 0.4s ease-in-out;
}

.light .line {
  flex-grow: 1;
  height: 1px;
  opacity: 12%;
  background-color: black;
  transition: 0.4s ease-in-out;
  }
 .light .itemDate {
    font-size: 14px;
    color: rgb(0, 0, 0);
    font-weight: 500;
    margin-left: auto;
    transition: 0.4s ease-in-out;
  } 
</style>
