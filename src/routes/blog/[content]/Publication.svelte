<script lang="ts">
  import "$lib/reset.css";
  import type { Config } from "$lib/types";

  export let config: Config;
  export let serialized: string;
</script>

<header
  style="--theme-color: {config.themeColor}; font-family: var(--{config.navFont})"
>
  <h1>{config.siteName}</h1>
  <span>{config.siteDescription}</span>
  <nav>
    <a href={`/?config=${serialized}`}>Home</a>
    <a href="/blog">Blog</a>
    <a href="/about">About</a>
  </nav>
</header>
<main style="--background-color: {config.backgroundColor}">
  <slot />
</main>
<footer style="--theme-color: {config.themeColor}" />

<style>
  header {
    padding: 15px 35px;
    top: 0;
    position: sticky;
    display: flex;
    justify-content: space-between;
  }

  header,
  footer {
    background-color: var(--theme-color);
    color: black;
  }

  footer {
    height: 20px;
  }

  a {
    color: black;
  }

  nav a::before {
    content: "|";
  }

  main {
    padding-block: 15px;
    padding-inline: 15px;
    background-color: var(--background-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
  }
</style>
