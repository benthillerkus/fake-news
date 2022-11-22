<script lang="ts">
  import type { Config } from "$lib/types";
  import "$lib/reset.css";
  import "$lib/systemfonts.css";
  import Time from "$lib/Time.svelte";

  export let config: Config;
</script>

<article itemscope itemtype="https://schema.org/BlogPosting">
  <header>
    <img
      itemprop="image"
      alt={config.imageAlt}
      src={config.imageUrl ?? config.image}
    />
    <h1 itemprop="headline">
      {config.title}
    </h1>
    <p itemprop="abstract">{config.description}</p>
    <span
      >Published <Time itemprop="datePublished" time={config.publishedDate} />
      by <b itemprop="author">{config.author}</b></span
    >
  </header>
  <hr />
  <main itemprop="articleBody">
    {#if config.content}
      <p>{config.content}</p>
    {:else}
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>
    {/if}
  </main>
</article>

<style>
  img {
    padding: 10px;
    background-color: white;
    margin: auto;
    margin-block: 30px;
  }

  h1 {
    margin-block: 10px;
    font-family: var(--title-font);
  }

  h1 + p {
    font-size: 1.35em;
    margin-block: 10px;
  }

  hr {
    margin-block: 10px;
  }

  article {
    max-width: min(768px, 100%);
    font-family: var(--body-font);
  }
</style>
