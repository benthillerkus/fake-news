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
    date = new Date(time);
    iso = date.toISOString();
  }
</script>

<time datetime={iso}>{date.toLocaleDateString()}</time>
