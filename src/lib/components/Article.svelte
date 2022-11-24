<script lang="ts">
  import type { Config } from "$lib/types";
  import "$lib/styles/reset.css";
  import "$lib/styles/systemfonts.css";
  import Time from "$lib/components/Time.svelte";

  export let config: Config;
</script>

<article id="article" itemscope itemtype="https://schema.org/BlogPosting">
  <header>
    <img itemprop="image" alt={config.imageAlt} src={config.imageUrl} />
    <h1 itemprop="headline">
      {config.title}
    </h1>
    <p itemprop="abstract">{config.description}</p>
    <span
    >Published <Time itemprop="datePublished" time={config.publishedDate} />
    by <b itemprop="author">{config.author}</b></span
    >
    <hr>
  </header>
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
