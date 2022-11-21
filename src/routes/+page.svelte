<script lang="ts">
  import "$lib/reset.css";
  import { deserialize, serialize } from "$lib/deser";
  import { DefaultConfig, type Config } from "$lib/types";
  import type { PageData } from "./$types";
  import Publication from "./blog/[content]/Publication.svelte";
  import Article from "./blog/[content]/Article.svelte";
  import EmojiFavicon from "$lib/EmojiFavicon.svelte";

  export let data: PageData;

  let config: Config = DefaultConfig;

  $: serialized = serialize(config);
  $: link = `${data.url.origin}/blog/${serialized}`;
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
    {#each Object.keys(DefaultConfig) as key}
      <label for={key}>
        {key}
        <input
          type="text"
          name={key}
          bind:value={config[key]}
          placeholder={DefaultConfig[key]}
        />
      </label>
    {/each}
    <hr />
    <div>
      <button
        on:click|preventDefault={() => navigator.clipboard.writeText(link)}
        >Copy Link</button
      >
      <a href={link}>Visit {config.siteName}</a>
    </div>

    <details>
      <textarea>{serialized}</textarea>
    </details>
  </form>
  <div class="iframe">
    <Publication {config}><Article {config} /></Publication>
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
