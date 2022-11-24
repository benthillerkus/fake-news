<script lang="ts">
  export let icon: string = "👋";

  $: isUrl = icon.startsWith("http");
</script>

<svelte:head>
  <!-- https://css-tricks.com/emoji-as-a-favicon/-->
  {#if isUrl}
    <link rel="icon" href={icon} />
  {/if}
  <link
    rel="icon"
    href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2211 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>{icon}</text></svg>"
  />
</svelte:head>
