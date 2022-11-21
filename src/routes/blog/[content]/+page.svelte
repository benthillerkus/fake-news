<script lang="ts">
  import type { PageData } from "./$types";
  import "$lib/reset.css";
  import Time from "$lib/Time.svelte";
  import { serialize } from "$lib/deser";
  import Article from "./Article.svelte";
  import type { ArticleConfig } from "$lib/types";

  export let data: PageData;
  let config: ArticleConfig = data as any;

  const oembed = `${data.url.origin}/oembed?url=${
    data.url.origin
  }/blog/${serialize(data)}&format=json`;
</script>

<svelte:head>
  <title>{data.title}</title>
  <link
    rel="alternate"
    type="application/json+oembed"
    href={oembed}
    title="oEmbed Metadata (JSON)"
  />
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

<Article {config} />
