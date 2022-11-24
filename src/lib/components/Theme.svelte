<script lang="ts">
  import type { Config } from "../types";
  import Blog from "$lib/styles/blog.pcss?inline";
  import News from "$lib/styles/news.pcss?inline";
  import { onDestroy } from "svelte";

  export let config: Config;

  const Themes: any = { Blog, News };
  let node: HTMLDivElement;
  $: styleApiAvailable = node && node.style;
  let style: string = "display: contents;";
  $: {
    for (const [key, value] of Object.entries(config)) {
      const kebab =
        "--" + key.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      if (key.endsWith("Color")) {
        setProperty(kebab, value);
      } else if (key.endsWith("Font") || key.endsWith("Url")) {
        setProperty(kebab, `'${value}'`);
      }
    }
  }

  function setProperty(name: string, value: string) {
    if (styleApiAvailable) {
      node.style.setProperty(name, value);
    } else {
      style += `${name}:${value};`;
    }
  }

  onDestroy(() => {
    if (typeof document !== "undefined") {
      document.querySelector("#stylesheet-theme")?.remove();
    }
  });

  $: theme = `<style\ id="stylesheet-theme"\>${Themes[config.style]}\<\/style>`;
</script>

<svelte:head>
  {@html theme}
</svelte:head>

<div bind:this={node} {style}>
  <slot />
</div>
