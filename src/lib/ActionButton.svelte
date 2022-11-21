<script lang="ts">
  export let tooltip: string = "";
  export let action: () => void = () => {};
  export let icon: string = "📣";
</script>

<div>
  <label>
    <span>{tooltip}</span>
    <button on:click|preventDefault={action}>{icon}</button>
  </label>
</div>

<style>
  div {
    rotate: -45deg;
  }

  button {
    rotate: 45deg;
  }

  span {
    position: fixed;
    right: calc(100% + 10px);
    top: 25%;
    width: max-content;
    opacity: 0;
    background-color: white;
    border-radius: 3px;
    padding: 5px;
    transition: ease-out 0.2s;
  }

  button {
    aspect-ratio: 1;
    font-size: 2em;
    width: 60px;
    border-radius: 100%;
    border-width: 1px;
  }

  button:hover {
    cursor: pointer;
  }

  label:hover span {
    opacity: 1;
  }
</style>
