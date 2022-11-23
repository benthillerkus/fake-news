<script lang="ts">
  import type { PageData } from "./$types";
  import type { Config } from "$lib/types";
  import { serialize } from "$lib/deser";
  import "$lib/reset.css";
  import EmojiFavicon from "$lib/EmojiFavicon.svelte";
  import Theme from "$lib/Theme.svelte";
  import Article from "./Article.svelte";
  import Publication from "./Publication.svelte";
  import ActionButton from "$lib/ActionButton.svelte";

  export let data: PageData;
  const config: Config = data.config as any;
  const serialized = serialize(config);
  const oembed = `${data.url.origin}/oembed?url=${data.url.origin}/blog/${serialized}&format=json`;
</script>

<EmojiFavicon icon={config.favicon} />

<svelte:head>
  <title>{config.title}</title>
  <link
    rel="alternate"
    type="application/json+oembed"
    href={oembed}
    title="oEmbed Metadata (JSON)"
  />
  <meta name="theme-color" content={config.themeColor} />
  <meta name="description" content={config.description} />
  <meta property="og:site_name" content={config.siteName} />
  <meta property="og:title" content={config.title} />
  <meta property="og:description" content={config.description} />
  <meta property="og:image" content={config.imageUrl || config.image} />
  <meta property="og:image:alt" content={config.imageAlt} />
  <meta property="og:type" content="article" />
  <meta property="og:article:author" content={config.author} />
  <meta property="og:article:published_time" content={config.publishedDate} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={config.title} />
  <meta name="twitter:description" content={config.description} />
  <meta name="twitter:image" content={config.imageUrl || config.image} />
  <meta name="twitter:image:alt" content={config.imageAlt} />
</svelte:head>

<Theme {config}>
  <Publication {config} {serialized}>
    <Article {config} />
  </Publication>
</Theme>
