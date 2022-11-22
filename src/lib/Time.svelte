<script lang="ts">
  export let time: string | Date;
  export let itemprop: string | null;

  let date: Date;
  let iso: string;

  $: {
    if (typeof time === "string") {
      date = new Date(time);
    } else {
      date = time;
    }
    try {
      iso = date.toISOString();
    } catch (e) {}
  }
</script>

<time {itemprop} content={iso} datetime={iso}>{date.toLocaleDateString()}</time>
