<template>
  <main class="p-1 relative h-0 w-full pb-[56.25%]">
          <iframe class="absolute top-0 left-0 h-full w-full" width="560" height="349" :src="'https://www.youtube.com/embed/' + video.key" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </main>
</template>

<script>
export default {
    props: ["video"],
}
</script>

<style>

</style>