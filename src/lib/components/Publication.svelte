<script lang="ts">
  import "$lib/styles/reset.css";
  import "$lib/styles/systemfonts.css";
  import type { Config } from "$lib/types";

  export let config: Config;
  export let serialized: string;
</script>

<div id="publication">
  <header id="titlebar">
    <div id="brand">
      {#if config.icon.startsWith("http")}
        <img
          id="icon"
          itemprop="image"
          alt={config.siteName}
          src={config.icon}
        />
      {:else}
        <div id="emoji">{config.icon}</div>
      {/if}
      {#if config.siteName}
        <h1>{config.siteName}</h1>
      {/if}
    </div>
    {#if config.siteDescription}
      <span>{config.siteDescription}</span>
    {/if}
    <nav>
      <a href={`/?config=${serialized}`}>Edit</a>
      <a href="/#">Blog</a>
      <a href="/about">About</a>
    </nav>
  </header>
  <main>
    <slot />
  </main>
  <footer />
</div>
