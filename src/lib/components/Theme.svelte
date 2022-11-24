<script lang="ts">
  import type { Config } from "../types";
  import Blog from "$lib/styles/blog.pcss?inline";
  import News from "$lib/styles/news.pcss?inline";
  import Aggregator from "$lib/styles/aggregator.pcss?inline";
  import { hexToRgb, rgbToHsl } from "$lib/conversions";
  import { onDestroy } from "svelte";

  export let config: Config;

  const Themes: any = { Blog, News, Aggregator };
  let node: HTMLDivElement;
  let style: string = "display: contents;";
  let pastAnimationFrame: any;
  $: {
    if (typeof requestAnimationFrame === "function") {
      if (pastAnimationFrame) {
        cancelAnimationFrame(pastAnimationFrame);
      }
      pastAnimationFrame = requestAnimationFrame(() => {
        updateStyle(config);
      });
    } else {
      updateStyle(config);
    }
  }

  function updateStyle(config: Config) {
    for (const [key, value] of Object.entries(config)) {
      const kebab =
        "--" + key.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      if (key.endsWith("Color")) {
        setProperty(kebab, value);
        if (value.startsWith("#")) {
          let rgb = hexToRgb(value);
          if (rgb === null) {
            rgb = { r: 0, g: 0, b: 0 };
          }
          const hsl = rgbToHsl(rgb);
          setProperty(kebab + "-h", hsl.h.toString(10) + "deg");
          setProperty(kebab + "-s", hsl.s.toString(10) + "%");
          setProperty(kebab + "-l", hsl.l.toString(10) + "%");
        }
      } else if (key.endsWith("Font") || key.endsWith("Url")) {
        setProperty(kebab, `'${value}'`);
      }
    }
  }

  function setProperty(name: string, value: string) {
    if (node && node.style) {
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
