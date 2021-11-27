<template>
  <NuxtLink :to="'/movies/' + movie.id" class="relative" v-if="movie.poster_path">

    <img class="h-56 w-36 min-w-[9rem] sm:h-64 shadow hover:shadow-2xl sm:w-44 sm:min-w-[11rem] lg:h-72 lg:w-48 lg:min-w-[12rem] duration-200 rounded-xs object-cover opacity-90 hover:opacity-100 hover:-translate-y-2" :src="'https://image.tmdb.org/t/p/original'+ movie.poster_path" alt="" @click="closeSearchScreen">

    <AppRatingTile :rating="movie.vote_average.toFixed(1)" class="absolute top-0 right-0 pointer-events-none"/>
    
  </NuxtLink>
</template>

<script>
export default {
    props: ["movie"],
    methods: {
      closeSearchScreen(){
        this.$store.commit("closeSearchScreen")
      }
    }
}
</script>

<style>
</style>