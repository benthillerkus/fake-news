<script lang="ts">
  export let tooltip: string = "";
  export let action: () => void = () => {};
  export let link: string = "";
  export let icon: string = "📣";
</script>

<div>
  <label>
    <span>{tooltip}</span>
    {#if link === ""}
      <button class="clickme" on:click|preventDefault={action}>{icon}</button>
    {:else}
      <a class="clickme" href={link}>{icon}</a>
    {/if}
  </label>
</div>

<style>
  div {
    rotate: -45deg;
  }

  span {
    position: fixed;
    right: calc(100% + 10px);
    top: 25%;
    width: max-content;
    opacity: 0;
    background-color: buttonface;
    border-radius: 6px;
    border-width: 1px;
    border-style: solid;
    padding-block: 5px;
    padding-inline: 10px;
    transition: ease-out 0.2s;
  }

  .clickme {
    display: inline-block;
    text-decoration: none;
    text-align: center;
    background-color: buttonface;
    color: inherit;
    rotate: 45deg;
    padding-block: 1rem; /* HAHHAHAHAHA for some reason this aligns the text vertically lmao */
    font-size: 2em;
    width: 60px;
    aspect-ratio: 1;
    border-radius: 100%;
    border-width: 1px;
    border-style: outset;
    cursor: pointer;
  }

  span:has(+ .clickme:hover) {
    opacity: 1;
  }
</style>
