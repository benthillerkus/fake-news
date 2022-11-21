<script lang="ts">
  import "$lib/reset.css";
  import Time from "$lib/Time.svelte";
  import type { ArticleConfig } from "$lib/types";

  export let config: ArticleConfig;
</script>

<article itemscope itemtype="https://schema.org/BlogPosting">
  <header>
    <img alt={config.imageAlt} src={config.image} />
    <h1>{config.title}</h1>
    <span
      >Published on <Time time={config.publishedAt} />
      by {config.author}</span
    >
  </header>
  <hr />
  <main>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </p>
  </main>
</article>

<style>
  img {
    padding: 15px;
    background-color: white;
    margin-block: 30px;
  }

  h1 {
    font-family: var(--sans-serif);
    margin-block: 10px;
  }

  hr {
    margin-block: 10px;
  }

  article {
    max-width: min(768px, 100%);
  }
</style>
