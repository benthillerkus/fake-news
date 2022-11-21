<script lang="ts">
  import "$lib/reset.css";
  import Time from "$lib/Time.svelte";
  import type { Config } from "$lib/types";

  export let config: Config;
</script>

<article
  itemscope
  itemtype="https://schema.org/BlogPosting"
  style="font-family:var(--{config.bodyFont})"
>
  <header>
    <img alt={config.imageAlt} src={config.image} />
    <h1 style="font-family: var(--{config.titleFont})">{config.title}</h1>
    <p>{config.description}</p>
    <span
      >Published <Time time={config.publishedDate} />
      by {config.author}</span
    >
  </header>
  <hr />
  <main>
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
    padding: 15px;
    background-color: white;
    margin-block: 30px;
  }

  h1 {
    margin-block: 10px;
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
  }
</style>
