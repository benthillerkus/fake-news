<script lang="ts">
  import "$lib/reset.css";
  import type { Config } from "$lib/types";

  export let config: Config;
  export let serialized: string;
</script>

<header
  style="--theme-color: {config.themeColor}; font-family: var(--{config.navFont})"
>
  {#if config.siteName}
    <h1>{config.siteName}</h1>
  {/if}
  {#if config.siteDescription}
    <span>{config.siteDescription}</span>
  {/if}
  <nav>
    <a href={`/?config=${serialized}`}>Edit</a>
    <a href="/#">Blog</a>
    <a href="/#">About</a>
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
    justify-content: space-evenly;
  }

  @media (max-width: 1000px) {
    header {
      flex-direction: column-reverse;
      gap: 5px;
      align-items: center;
    }

    span {
      text-align: center;
    }

    h1 {
      font-size: 2.5em;
      text-align: center;
    }
  }

  header,
  footer {
    background: var(--theme-color);
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
    background: var(--background-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
  }
</style>
