<script>
  export let title = "Garfunkles.space"
  export let description =  "Hallo, This is the personal website for Name/Garfunkle. I wasted so much time making this so please at the very least look at the about page."
  export let slug = ""
  export let image = "";
</script>

<svelte:head>
  <title>{title}</title>

  <meta content="{title}" property="og:title" />
  <meta content="https://garfunkles.space{image}" property="og:image" />
  <meta content="{description}" property="og:description" />
  <meta name="description" content="{description}">
  <meta content="https://garfunkles.space{slug}" property="og:url" />
  <meta content="#1e1e2e" data-react-helmet="true" name="theme-color" />
</svelte:head>
