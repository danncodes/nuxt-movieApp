<template>
  <img class="h-56 w-36 min-w-[9rem] sm:h-64 sm:w-44 sm:min-w-[11rem] lg:h-72 lg:w-48 lg:min-w-[12rem] duration-200 rounded-xs object-cover" :src="'https://image.tmdb.org/t/p/original'+ movie.poster_path" alt="">
</template>

<script>
export default {
    props: ["movie"]

}
</script>

<style>
</style>