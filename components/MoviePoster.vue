<template>
  <img class="h-56 w-36 min-w-[9rem] object-cover" :src="'https://image.tmdb.org/t/p/original'+ movie.poster_path" alt="">
</template>

<script>
export default {
    props: ["movie"]

}
</script>

<style>

</style>