<script lang="ts">
  import "$lib/reset.css";
  import { serialize } from "$lib/deser";
  import { DefaultConfig, type Config, type ISODate } from "$lib/types";
  import type { PageData } from "./$types";
  import Publication from "./blog/[content]/Publication.svelte";
  import Article from "./blog/[content]/Article.svelte";
  import EmojiFavicon from "$lib/EmojiFavicon.svelte";
  import ActionButton from "$lib/ActionButton.svelte";
  import { goto } from "$app/navigation";

  export let data: PageData;
  let config: Config = data.config as any;

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

<main style="--preview-width: 1fr">
  <form>
    {#each Object.keys(DefaultConfig) as key}
      <label for={key}>
        {key}
        {#if key.endsWith("Date")}
          <input type="date" name={key} bind:value={config[key]} />
        {:else if key.endsWith("Color")}
          <input type="color" name={key} bind:value={config[key]} />
          <input
            type="text"
            name={key}
            bind:value={config[key]}
            placeholder={DefaultConfig[key]}
          />
        {:else if key.endsWith("Font")}
          <select
            name={key}
            bind:value={config[key]}
            placeholder={DefaultConfig[key]}
          >
            <option value="sans-serif">Sans-Serif</option>
            <option value="serif">Serif</option>
            <option value="mono">Mono</option>
          </select>
        {:else}
          <input
            type="text"
            name={key}
            bind:value={config[key]}
            placeholder={DefaultConfig[key]}
          />
        {/if}
      </label>
    {/each}
    <hr />
    <details>
      <span>{serialized.length} of 1024 Characters used</span>
      <textarea>{serialized}</textarea>
      <a href="https://bugdays.com/gzip-base64" rel="external"
        >Online Decoder + Encoder</a
      >
    </details>
  </form>
  <div id="divider" />
  <div id="preview">
    <Publication {config} {serialized}><Article {config} /></Publication>
  </div>
  <div id="actions">
    <ActionButton tooltip="Visit site" action={() => goto(link)} icon="🌐" />
    <ActionButton
      tooltip="Copy link to clipboard"
      action={() => navigator.clipboard.writeText(link)}
      icon="📌"
    />
    <ActionButton
      tooltip="Share link"
      action={() =>
        navigator.share({
          url: link,
          title: config.siteName,
          text: config.title,
        })}
      icon="🗽"
    />
    <ActionButton
      tooltip="Reset"
      action={() => (config = DefaultConfig)}
      icon="🚬"
    />
  </div>
  <h1>Make some <i>fake</i> News</h1>
</main>

<style>
  main {
    font-family: var(--sans-serif);
    display: grid;
    grid-template-columns: 1fr 1px var(--preview-width);
    grid-template-rows: 50px 1fr;
    height: 100%;
    width: 100%;
    gap: 20px;
    padding: 20px;
    background-image: url(noise.svg);

    grid-template-areas:
      "title title title"
      "form divider iframe";
  }

  details {
    width: 100%;
  }

  #actions {
    grid-area: title;
  }

  textarea {
    width: 100%;
    height: 100%;
  }

  h1 {
    grid-area: title;
    justify-self: center;
    align-self: center;
    font-family: var(--mono);
    font-size: 3em;
  }

  hr {
    margin: 20px 0;
  }

  label {
    font-family: var(--mono);
    margin-block: 5px;
  }

  input {
    width: 100%;
  }

  form {
    grid-area: form;
    display: flex;
    flex-direction: column;
  }

  #divider {
    grid-area: divider;
    background: black;
  }

  #preview {
    contain: strict;
    grid-area: iframe;
  }

  #actions {
    user-select: none;
    position: sticky;
    top: 20px;
    width: 98%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    gap: 15px;
  }
</style>
