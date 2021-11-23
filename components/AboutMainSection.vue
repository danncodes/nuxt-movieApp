<template>
<main class="w-full bg-cover bg-center bg-theme-primary bg-blend-overlay bg-opacity-50 bg-no-repeat h-[70vh] relative sm:h-[648px] mx-auto max-w-7xl sm:pl-[72px]"
  :style="'background-image: url(' + `https://image.tmdb.org/t/p/original${movie.backdrop_path}` + ')'" v-if="movie">
  <img class="h-64 w-44 min-w-[11rem] lg:h-72 lg:w-48 lg:min-w-[12rem] duration-200 rounded-xs object-cover mx-auto mb-4" :src="'https://image.tmdb.org/t/p/original'+ movie.poster_path" alt="">

  <!-- Adult? -->
  <section class="bg-red-500 bg-opacity-50 h-8 w-8 rounded-full absolute right-4 top-4 flex justify-center items-center" v-if="movie.adult">
    <h1 class="font-bold text-md">18+</h1>
  </section>

  <!-- Movie Name and Tagline -->
  <section class="flex flex-col items-center p-3 pb-0 mx-auto mb-1 text-center">
    <h1 class="text-3xl font-black mb-4 uppercase">{{ movie.title }}</h1>
    <p class="text-lg sm:text-xl font-semibold">{{ movie.tagline }}</p>
  </section>

  <!-- Movie Tags -->
    <section class="flex justify-center mb-4">
      <AppMovieTag v-for="genreID in movie.genres" :key="genreID.id" :genreID="genreID.id" />
    </section>

    <section class="bg-theme-primary backdrop-blur-xl bg-opacity-50 rounded p-2 max-w-sm mx-auto border-l-4 border-[#0FEFFD]">
      <div>
        <AppRatingTile rating="8.2" />
      </div>
    </section>
</main>
</template>

<script>
export default {
    props: ["movie"]

}
</script>

<style>

</style>