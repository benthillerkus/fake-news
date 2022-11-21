<script lang="ts">
  import type { LayoutData } from "./$types";
  import "$lib/reset.css";
  import EmojiFavicon from "$lib/EmojiFavicon.svelte";
  import Publication from "./Publication.svelte";
  import type { PublicationConfig } from "$lib/types";

  export let data: LayoutData;
  let config: PublicationConfig = data as any;
</script>

<EmojiFavicon icon={data.favicon} />

<svelte:head>
  <meta property="og:site_name" content={data.siteName} />
  <meta name="theme-color" content="orange" />
</svelte:head>

<Publication {config}>
  <slot />
</Publication>
