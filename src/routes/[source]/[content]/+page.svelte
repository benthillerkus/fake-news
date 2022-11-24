<script lang="ts">
  import "$lib/styles/reset.css";

  import type { PageData } from "./$types";
  import type { Config } from "$lib/types";
  import { serialize } from "$lib/deser";
  import EmojiFavicon from "$lib/components/EmojiFavicon.svelte";
  import Theme from "$lib/components/Theme.svelte";
  import Article from "$lib/components/Article.svelte";
  import Publication from "$lib/components/Publication.svelte";

  export let data: PageData;
  const config: Config = data.config as any;
  const serialized = serialize(config);
  const oembed = `${data.url.origin}/oembed?url=${data.url.origin}/blog/${serialized}&format=json`;
</script>

<EmojiFavicon icon={config.icon} />

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
  <meta property="og:image" content={config.imageUrl} />
  <meta property="og:image:alt" content={config.imageAlt} />
  <meta property="og:type" content="article" />
  <meta property="og:article:author" content={config.author} />
  <meta property="og:article:published_time" content={config.publishedDate} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={config.title} />
  <meta name="twitter:description" content={config.description} />
  <meta name="twitter:image" content={config.imageUrl} />
  <meta name="twitter:image:alt" content={config.imageAlt} />
</svelte:head>

<Theme {config}>
  <Publication {config} {serialized}>
    <Article {config} />
  </Publication>
</Theme>
