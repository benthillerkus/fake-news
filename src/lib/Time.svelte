<script lang="ts">
  export let time: string | Date;

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

<time datetime={iso}>{date.toLocaleDateString()}</time>
