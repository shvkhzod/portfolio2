<script lang='ts'>
    import { writable } from 'svelte/store';
	import ListItem from './listItem.svelte';

    const bookHover = writable(false);
    const noteHover = writable(false);
    const settingHover =  writable(false)
    const hi = writable(false)

</script>



<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="expandContainer">
        <div class="exChild" class:extended = {$bookHover}>

        </div>
</div>
<div class="tabContainer" >
   

    <div class="expand" class:expanded={$bookHover || $noteHover || $settingHover}>
     {#if bookHover}
     <ListItem imgUrl={"/images/1984.jpeg"} hasPdf={true} headline="1984" content="Big Brother is Watching"/>
     <ListItem imgUrl={"/images/noLogo.jpeg"} hasPdf={true} headline="No Logo" content="Brands control the culture"/>

     {/if}
       <div class="line"></div>
    </div>
   

   <div class="menuItems">
    <div class="smallContainer" class:activecont={$bookHover} on:click={() => $bookHover = !$bookHover}>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
            <path d="M11.5 11.5H3.25C2.00736 11.5 1 12.5074 1 13.75V13.75M11.5 11.5V16M11.5 11.5C12.3284 11.5 13 10.8284 13 10V2.5C13 1.67157 12.3284 1 11.5 1H3.25C2.00736 1 1 2.00736 1 3.25V13.75M13 16H11.5M11.5 16H3.25C2.00736 16 1 14.9926 1 13.75V13.75" stroke={$bookHover ? "white" : "black"} stroke-width="2.0" stroke-linecap="round"/>
          </svg>
        <p>Books</p>
    </div>

    <div class="smallContainer">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M11.1179 4.72139L12.4602 3.36469C13.6131 2.21177 15.4824 2.21177 16.6353 3.36469C17.7882 4.51762 17.7882 6.38687 16.6353 7.5398L12.4602 11.7149C11.3073 12.8678 9.43802 12.8678 8.2851 11.7149M9.14979 15.0542L7.5398 16.6353C6.38687 17.7882 4.51762 17.7882 3.36469 16.6353C2.21177 15.4824 2.21177 13.6131 3.36469 12.4602L7.5398 8.2851C8.69272 7.13218 10.562 7.13218 11.7149 8.2851" stroke={$noteHover ? "white" : "black"} stroke-width="2" stroke-linecap="round"/>
          </svg>
        <p>Notes</p>
    </div>

    <div class="smallContainer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19.87 10H19C18.8237 9.97923 18.656 9.91187 18.5144 9.80485C18.3727 9.69784 18.262 9.55503 18.1938 9.3911C18.1256 9.22717 18.1023 9.04803 18.1262 8.87209C18.1501 8.69615 18.2205 8.52976 18.33 8.39001L18.93 7.79001C19.0349 7.6859 19.1182 7.56205 19.175 7.42561C19.2318 7.28916 19.2611 7.14282 19.2611 6.99501C19.2611 6.84721 19.2318 6.70086 19.175 6.56442C19.1182 6.42797 19.0349 6.30412 18.93 6.20001L17.77 5.00001C17.6659 4.8951 17.542 4.81183 17.4056 4.755C17.2691 4.69818 17.1228 4.66892 16.975 4.66892C16.8272 4.66892 16.6808 4.69818 16.5444 4.755C16.408 4.81183 16.2841 4.8951 16.18 5.00001L15.58 5.60001C15.4451 5.70124 15.2868 5.7667 15.1198 5.79031C14.9528 5.81391 14.7825 5.79489 14.6248 5.73501C14.4671 5.67513 14.3272 5.57634 14.2179 5.44783C14.1087 5.31933 14.0337 5.16528 14 5.00001V4.12001C14.0001 3.9695 13.9699 3.82052 13.9111 3.68196C13.8523 3.5434 13.7662 3.41811 13.6579 3.31357C13.5497 3.20903 13.4214 3.12738 13.2809 3.07351C13.1404 3.01963 12.9904 2.99464 12.84 3.00001H11.16C11.0096 2.99464 10.8596 3.01963 10.7191 3.07351C10.5786 3.12738 10.4503 3.20903 10.3421 3.31357C10.2338 3.41811 10.1477 3.5434 10.0889 3.68196C10.0301 3.82052 9.99991 3.9695 10 4.12001V5.00001C9.97922 5.17635 9.91186 5.34397 9.80485 5.48566C9.69783 5.62734 9.55502 5.73798 9.39109 5.8062C9.22716 5.87442 9.04803 5.89776 8.87209 5.87382C8.69615 5.84989 8.52976 5.77954 8.39001 5.67001L7.82001 5.00001C7.7159 4.8951 7.59205 4.81183 7.4556 4.755C7.31916 4.69818 7.17281 4.66892 7.02501 4.66892C6.8772 4.66892 6.73086 4.69818 6.59441 4.755C6.45797 4.81183 6.33412 4.8951 6.23001 5.00001L5.00001 6.23001C4.89509 6.33412 4.81182 6.45797 4.755 6.59442C4.69817 6.73086 4.66892 6.87721 4.66892 7.02501C4.66892 7.17282 4.69817 7.31916 4.755 7.45561C4.81182 7.59205 4.89509 7.7159 5.00001 7.82001L5.60001 8.42001C5.70124 8.55492 5.7667 8.71325 5.7903 8.88025C5.81391 9.04726 5.79488 9.21752 5.735 9.3752C5.67513 9.53288 5.57634 9.67285 5.44783 9.7821C5.31932 9.89134 5.16527 9.9663 5.00001 10H4.13001C3.97866 9.99856 3.82859 10.0278 3.68886 10.086C3.54913 10.1441 3.42264 10.23 3.31703 10.3384C3.21141 10.4469 3.12887 10.5756 3.07439 10.7168C3.0199 10.858 2.9946 11.0088 3.00001 11.16V12.84C2.99463 12.9904 3.01963 13.1404 3.0735 13.2809C3.12738 13.4214 3.20902 13.5497 3.31357 13.658C3.41811 13.7662 3.5434 13.8523 3.68196 13.9111C3.82052 13.9699 3.9695 14.0001 4.12001 14H5.00001C5.17635 14.0208 5.34397 14.0882 5.48565 14.1952C5.62734 14.3022 5.73798 14.445 5.8062 14.6089C5.87441 14.7729 5.89776 14.952 5.87382 15.1279C5.84989 15.3039 5.77954 15.4703 5.67001 15.61L5.07001 16.21C4.96509 16.3141 4.88182 16.438 4.825 16.5744C4.76817 16.7109 4.73892 16.8572 4.73892 17.005C4.73892 17.1528 4.76817 17.2992 4.825 17.4356C4.88182 17.5721 4.96509 17.6959 5.07001 17.8L6.23001 19C6.33412 19.1049 6.45797 19.1882 6.59441 19.245C6.73086 19.3019 6.8772 19.3311 7.02501 19.3311C7.17281 19.3311 7.31916 19.3019 7.4556 19.245C7.59205 19.1882 7.7159 19.1049 7.82001 19L8.42001 18.4C8.55492 18.2988 8.71324 18.2333 8.88025 18.2097C9.04725 18.1861 9.21752 18.2051 9.3752 18.265C9.53288 18.3249 9.67285 18.4237 9.78209 18.5522C9.89133 18.6807 9.9663 18.8348 10 19V19.84C9.99441 19.9939 10.0206 20.1472 10.0769 20.2905C10.1332 20.4337 10.2184 20.5639 10.3273 20.6727C10.4362 20.7816 10.5663 20.8668 10.7095 20.9231C10.8528 20.9794 11.0062 21.0056 11.16 21H12.84C12.9904 21.0054 13.1404 20.9804 13.2809 20.9265C13.4214 20.8726 13.5497 20.791 13.6579 20.6865C13.7662 20.5819 13.8523 20.4566 13.9111 20.3181C13.9699 20.1795 14.0001 20.0305 14 19.88V19C14.0208 18.8237 14.0881 18.6561 14.1952 18.5144C14.3022 18.3727 14.445 18.262 14.6089 18.1938C14.7728 18.1256 14.952 18.1023 15.1279 18.1262C15.3039 18.1501 15.4702 18.2205 15.61 18.33L16.21 18.93C16.3141 19.0349 16.438 19.1182 16.5744 19.175C16.7109 19.2318 16.8572 19.2611 17.005 19.2611C17.1528 19.2611 17.2991 19.2318 17.4356 19.175C17.572 19.1182 17.6959 19.0349 17.8 18.93L19 17.77C19.1049 17.6659 19.1882 17.5421 19.245 17.4056C19.3018 17.2692 19.3311 17.1228 19.3311 16.975C19.3311 16.8272 19.3018 16.6809 19.245 16.5444C19.1882 16.408 19.1049 16.2841 19 16.18L18.4 15.58C18.2988 15.4451 18.2333 15.2868 18.2097 15.1198C18.1861 14.9528 18.2051 14.7825 18.265 14.6248C18.3249 14.4671 18.4237 14.3272 18.5522 14.2179C18.6807 14.1087 18.8347 14.0337 19 14H19.85C20.003 14.0042 20.1553 13.977 20.2973 13.9201C20.4394 13.8631 20.5683 13.7777 20.6761 13.669C20.7839 13.5603 20.8682 13.4306 20.9239 13.288C20.9796 13.1455 21.0055 12.993 21 12.84V11.16C21.0054 11.0088 20.9801 10.858 20.9256 10.7168C20.8711 10.5756 20.7886 10.4469 20.683 10.3384C20.5774 10.23 20.4509 10.1441 20.3111 10.086C20.1714 10.0278 20.0213 9.99856 19.87 10Z" stroke={$settingHover ? "white" : "black"} stroke-width="1.69" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 14.25C13.2426 14.25 14.25 13.2426 14.25 12C14.25 10.7574 13.2426 9.75 12 9.75C10.7574 9.75 9.75 10.7574 9.75 12C9.75 13.2426 10.7574 14.25 12 14.25Z" stroke={$noteHover ? "white": "black"} stroke-width="1.69" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        <p>Settings</p>
    </div>
   </div>
</div>


<style>
    .tabContainer {
        position: absolute;
        box-sizing: border-box;
        width: 360px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 106px;
        gap: 52px;
        border-radius: 20px;
        background-color: rgb(219, 219, 219);
        height: 64px;
        transition: 0.4s ease-in-out;
        anchor-name: --tabContainer;
    }

    .expandContainer {
        position: relative;
        box-sizing: border-box;
        width: max-content;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: -124px;
        width: 360px;
        height: 250px;
        gap: 52px;
        padding: 20px 42px;
        border-radius: 20px;
        background-color: rgb(228, 125, 125);
        transition: 0.4s ease-in-out;
        overflow: hidden;
    
    }

    .exChild {
        position: absolute;
        box-sizing: border-box;
        width: max-content;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 380px;
        margin-left: -42px;
        width: 360px;
        height: 250px;
        gap: 52px;
        padding: 20px 42px;
        border-radius: 20px 20px 0px 0px;
        background-color: rgb(219, 219, 219);
        transition: 0.4s ease-in-out;
        transition-delay: 0.16s;
    }

    .extended {
        transition: 0.4s ease-in-out;
        margin-top: -100px;
    }
    .expand {
        margin-top: -200px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        opacity: 0;
        max-height: 200px;
        padding: 20px 28px;
        transition: all 0.4s ease-in-out;
        
     
    }
    
 .expanded {
        margin-top: -280px;
        display: flex;
        flex-direction: column;
        max-height: 200px;
        padding: 20px 28px;
        gap: 12px;
        opacity: 1;
        transition: all 0.4s ease-in-out;
        transition-delay: 0.12s;
        
    }

    .menuItems {
        position: absolute;
        width: 360px;
        align-items: center;
        display: flex;
        justify-content: center;
        margin-top: 0px;
        gap: 12px;
     
    }

    .tabContainer p {
        font-size: 16px;
        font-weight: 600;
        color: rgb(0, 0, 0);
        opacity: 1;
        transition: 0.4s ease-in-out;
    }

    .line {
        position: absolute;
        margin-top: 150px;
        width: 300px;
        height: 1px;
        background-color: rgba(0, 0, 0, 0.371);
    }

    .smallContainer {
        display: flex;
        gap: 4px;
        padding: 12px;
        align-items: center;
        border-radius: 16px;
        transition: 0.1s ease-in-out;
        cursor: pointer;
    }

    .activecont {
        transition: 0.1s ease-in-out;
        background-color: rgb(0, 0, 0);
        border-radius: 16px;
        
    }

    .activecont p {
        color: white;
    }


</style>