<script lang="ts">
  import type { Config } from "./types";

  export let config: Config;

  let node: HTMLDivElement;
  $: styleApiAvailable = node && node.style;
  let style: string = "";
  $: {
    setProperty("display", "contents");
    for (const [key, value] of Object.entries(config)) {
      const kebab =
        "--" + key.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      if (key.endsWith("Color")) {
        setProperty(kebab, value);
      } else if (key.endsWith("Font") || key.endsWith("Url")) {
        setProperty(kebab, `'${value}'`);
      }
    }
  }

  function setProperty(name: string, value: string) {
    if (styleApiAvailable) {
      node.style.setProperty(name, value);
    } else {
      style += `${name}:${value};`;
    }
  }
</script>

<div bind:this={node} {style}>
  <slot />
</div>
