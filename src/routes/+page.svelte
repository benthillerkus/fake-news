<script lang="ts">
  import "$lib/styles/reset.css";
  import "$lib/styles/systemfonts.css";
  import type { PageData } from "./$types";
  import { serialize } from "$lib/deser";
  import { DefaultConfig, Fonts, Help, Themes, type Config } from "$lib/types";
  import Publication from "$lib/components/Publication.svelte";
  import Article from "$lib/components/Article.svelte";
  import EmojiFavicon from "$lib/components/EmojiFavicon.svelte";
  import ActionButton from "$lib/components/ActionButton.svelte";
  import Theme from "$lib/components/Theme.svelte";

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

<a href="https://github.com/benthillerkus/fake-news"
  ><img
    decoding="async"
    loading="lazy"
    width="149"
    height="149"
    src="https://github.blog/wp-content/uploads/2008/12/forkme_right_green_007200.png?resize=149%2C149"
    style="position: fixed; bottom: 0px; right: 0px; rotate: 90deg; opacity: 0.5"
    alt="Fork me on GitHub"
    data-recalc-dims="1"
  /></a
>
<main style:--preview-width="1fr">
  <h1><a href={data.url.origin}>Make some <i>fake</i> News</a></h1>
  <form>
    {#each Object.keys(DefaultConfig) as key}
      <label
        >{key}
        {#if Help[key]}
          <span class="help">{Help[key]}</span>
          <span class="info"><i>info</i></span>
        {/if}
        {#if key.endsWith("Date")}
          <input type="date" bind:value={config[key]} />
        {:else if key.endsWith("Color")}
          <input type="color" bind:value={config[key]} />
          <input
            type="text"
            bind:value={config[key]}
            placeholder={DefaultConfig[key]}
          />
        {:else if key.endsWith("Font")}
          <select
            list={key}
            bind:value={config[key]}
            placeholder={DefaultConfig[key]}
          >
            {#each Fonts as font}
              <option selected={font == config[key]} value={font}>{font}</option
              >
            {/each}
          </select>
        {:else if key == "content"}
          <textarea bind:value={config[key]} placeholder={DefaultConfig[key]} />
        {:else if key == "style"}
          <select
            list={key}
            bind:value={config[key]}
            placeholder={DefaultConfig[key]}
          >
            {#each Themes as theme}
              <option selected={theme == config[key]} value={theme}
                >{theme}</option
              >
            {/each}
          </select>
        {:else if key == "version"}
          {config[key]}
        {:else}
          <input
            type="text"
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
    <Theme {config}>
      <Publication {config} {serialized}><Article {config} /></Publication>
    </Theme>
  </div>
  <div id="actions">
    <ActionButton tooltip="Visit site" {link} icon={config.icon} />
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
      action={() => {
        config = DefaultConfig;
        window.history.pushState({}, document.title, data.url.origin);
      }}
      icon="🚬"
    />
  </div>
</main>

<style>
  main {
    font-family: "Sans Serif";
    display: grid;
    grid-template-columns: 1fr 1px var(--preview-width);
    grid-template-rows: 70px 1fr;
    height: 100%;
    width: 100%;
    gap: 20px;
    padding: 20px;
    background-image: url(/noise.svg);

    grid-template-areas:
      "title title title"
      "form divider preview";
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
    align-self: center;
    font-family: Mono;
    font-size: 3em;
  }

  h1 a {
    text-decoration: none;
    color: black;
  }

  hr {
    margin: 20px 0;
  }

  label {
    font-family: Mono;
    margin-block: 5px;
  }

  .help {
    opacity: 0;
    contain: paint;
    z-index: 1;
    font-size: 1rem;
    position: absolute;
    background-color: buttonface;
    border-radius: 6px;
    border-width: 1px;
    border-style: solid;
    padding-block: 2px;
    padding-inline: 10px;
    transition: ease-out 0.2s;
    transition-delay: 0s;
    translate: -45px -35px;
  }

  label:has(.help),
  .info {
    cursor: help;
  }

  .help:has(~ .info:hover) {
    transition-delay: 100ms;
    opacity: 1;
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
    grid-area: preview;
    contain: strict;
  }

  #actions {
    grid-area: title;
    user-select: none;
    position: sticky;
    top: 20px;
    width: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-self: end;
    gap: 15px;
    contain: layout;
  }
</style>
