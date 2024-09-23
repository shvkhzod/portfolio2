<script lang="ts">
    import { quintOut } from 'svelte/easing';
    import { afterNavigate, beforeNavigate } from '$app/navigation';
    import { writable } from 'svelte/store';
    
    export let url: string;
    
    const isNewNavigation = writable(false);
    
    beforeNavigate(() => {
      isNewNavigation.set(true);
    });
    
    afterNavigate(() => {
      isNewNavigation.set(false);
    });
    
    function transition(node: Element, { isEntering }: { isEntering: boolean }) {
      return {
        duration: 800,
        css: (t: number) => {
          if (!$isNewNavigation) return '';
          
          const eased = quintOut(t);
          const opacity = isEntering ? eased : 1 - eased;
          const scale = isEntering ? 0.98 + 0.02 * eased : 1;
          const blur = isEntering ? 2 - 2 * eased : 0;
          
          return `
            opacity: ${opacity};
            transform: scale(${scale});
            filter: blur(${blur}px);
          `;
        }
      };
    }
    </script>
    
    {#key url}
      <div in:transition={{ isEntering: true }} out:transition={{ isEntering: false }}>
        <slot></slot>
      </div>
    {/key}
    
    <style>
      div {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        will-change: transform, opacity, filter;
      }
    </style>