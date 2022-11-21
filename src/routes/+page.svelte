<script lang="ts">
  import "$lib/reset.css";
  import { serialize } from "$lib/deser";
  import {
    DefaultArticleConfig,
    DefaultPublicationConfig,
    type ArticleConfig,
    type PublicationConfig,
  } from "$lib/types";
  import type { PageData } from "./$types";
  import Publication from "./blog/[content]/Publication.svelte";
  import Article from "./blog/[content]/Article.svelte";
  import EmojiFavicon from "$lib/EmojiFavicon.svelte";
  import { goto } from "$app/navigation";

  export let data: PageData;

  let publication: PublicationConfig = DefaultPublicationConfig;
  let article: ArticleConfig = DefaultArticleConfig;

  $: config = serialize({
    ...publication,
    ...article,
  });
  $: link = `${data.url.origin}/blog/${config}`;
</script>

<EmojiFavicon icon="📣" />

<svelte:head>
  <title>Fake News Generator</title>
  <meta
    name="description"
    content="Generate faux blog posts and articles and share them with your gullible, gullible friends."
  />
</svelte:head>

<main>
  <h1>Make some Fake News</h1>

  <form>
    {#each Object.keys(DefaultPublicationConfig) as key}
      <label for={key}>
        {key}
        <input
          type="text"
          name={key}
          bind:value={publication[key]}
          placeholder={DefaultPublicationConfig[key]}
        />
      </label>
    {/each}
    <hr />
    {#each Object.keys(DefaultArticleConfig) as key}
      <label for={key}>
        {key}
        <input
          type="text"
          name={key}
          bind:value={article[key]}
          placeholder={DefaultArticleConfig[key]}
        />
      </label>
    {/each}
    <hr />
    <button on:click|preventDefault={() => goto(link)}>
      <a href={link}>Visit {publication.siteName}</a>
    </button>

    <details><textarea>{config}</textarea></details>
  </form>
  <div class="iframe">
    <Publication config={publication}><Article config={article} /></Publication>
    <div />
  </div>
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 0.5fr 1fr 1fr;
    grid-template-rows: 50px 1fr;
    height: 100%;
    width: 100%;
    gap: 20px;
    padding: 20px;

    grid-template-areas:
      "title title title"
      "form form iframe";
  }

  details {
    width: 100%;
  }

  textarea {
    width: 100%;
    height: 100%;
  }

  h1 {
    grid-area: title;
    justify-self: center;
    font-family: var(--serif);
  }

  hr {
    margin: 20px 0;
  }

  input {
    width: 100%;
  }

  form {
    grid-area: form;
    display: flex;
    flex-direction: column;
  }

  .iframe {
    contain: strict;
    grid-area: iframe;
  }
</style>
