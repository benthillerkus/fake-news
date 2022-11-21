<script lang="ts">
  import type { PageData } from "./$types";
  import "$lib/reset.css";
  import { serialize } from "$lib/deser";
  import Article from "./Article.svelte";
  import type { Config } from "$lib/types";
  import EmojiFavicon from "$lib/EmojiFavicon.svelte";
  import Publication from "./Publication.svelte";

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
  <meta property="og:site_name" content={config.siteName} />
  <meta name="theme-color" content="orange" />
  <meta name="description" content={config.description} />
  <meta property="og:title" content={config.title} />
  <meta property="og:description" content={config.description} />
  <meta property="og:image" content={config.image} />
  <meta property="og:image:alt" content={config.imageAlt} />
  <meta property="og:type" content="article" />
  <meta property="og:article:author" content={config.author} />
  <meta property="og:article:published_time" content={config.publishedDate} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={config.title} />
  <meta name="twitter:description" content={config.description} />
  <meta name="twitter:image" content={config.image} />
  <meta name="twitter:image:alt" content={config.imageAlt} />
</svelte:head>

<Publication {config} {serialized}>
  <Article {config} />
</Publication>
