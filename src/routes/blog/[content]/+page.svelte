<script lang="ts">
  import type { PageData } from "./$types";
  import "$lib/reset.css";
  import { serialize } from "$lib/deser";
  import Article from "./Article.svelte";
  import type { Config } from "$lib/types";
  import EmojiFavicon from "$lib/EmojiFavicon.svelte";
  import Publication from "./Publication.svelte";

  export let data: PageData;
  let config: Config = data as any;

  const oembed = `${data.url.origin}/oembed?url=${
    data.url.origin
  }/blog/${serialize(data)}&format=json`;
</script>

<EmojiFavicon icon={data.favicon} />

<svelte:head>
  <title>{data.title}</title>
  <link
    rel="alternate"
    type="application/json+oembed"
    href={oembed}
    title="oEmbed Metadata (JSON)"
  />
  <meta property="og:site_name" content={data.siteName} />
  <meta name="theme-color" content="orange" />
  <meta name="description" content={data.description} />
  <meta property="og:title" content={data.title} />
  <meta property="og:description" content={data.description} />
  <meta property="og:image" content={data.image} />
  <meta property="og:image:alt" content={data.imageAlt} />
  <meta property="og:type" content="article" />
  <meta property="og:article:author" content={data.author} />
  <meta property="og:article:published_time" content={data.publishedAt} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={data.title} />
  <meta name="twitter:description" content={data.description} />
  <meta name="twitter:image" content={data.image} />
  <meta name="twitter:image:alt" content={data.imageAlt} />
</svelte:head>

<Publication {config}>
  <Article {config} />
</Publication>
