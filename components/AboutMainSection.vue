<template>
<main class="w-full bg-cover bg-center bg-theme-primary bg-blend-overlay bg-opacity-50 bg-no-repeat h-[70vh] relative sm:h-[648px] mx-auto max-w-7xl sm:pl-[72px] px-2"
  :style="'background-image: url(' + `https://image.tmdb.org/t/p/original${movie.backdrop_path}` + ')'" v-if="movie">
  <img class="h-64 w-44 min-w-[11rem] lg:h-72 lg:w-48 lg:min-w-[12rem] duration-200 rounded-xs object-cover mx-auto mb-4" :src="'https://image.tmdb.org/t/p/original'+ movie.poster_path" alt="">
  <!-- Favourites -->
  <section class="absolute top-4 right-4" @click="addToFavourites">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-8 sm:w-8 cursor-pointer hover:fill-[#fd420ff5] duration-300 hover:shadow-2xl" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
    </svg>
  </section>

  <!-- Adult? -->
  <section class="bg-red-500 bg-opacity-50 h-8 w-8 rounded-full absolute right-4 top-4 flex justify-center items-center" v-if="movie.adult">
    <h1 class="font-bold text-md">18+</h1>
  </section>

  <!-- Movie Name and Tagline -->
  <section class="flex flex-col items-center p-3 pb-0 mx-auto mb-4 text-center">
    <h1 class="text-3xl font-black uppercase">{{ movie.title }}</h1>
    <h2 class="text-lg sm:text-xl font-semibold">{{ movie.tagline }}</h2>
    <p class="text-xs font-light" v-if="movie.release_date">{{ movie.release_date }}</p>
  </section>

  <!-- Movie Tags -->
    <section class="flex justify-center mb-4">
      <AppMovieTag v-for="genreID in movie.genres" :key="genreID.id" :genreID="genreID.id" />
    </section>

    <section class="bg-theme-primary backdrop-blur-xl bg-opacity-50 rounded p-2 max-w-sm mx-auto border-l-4 border-[#0FEFFD] flex justify-around">

      <!-- Movie Rating -->
      <div class="flex flex-col text-xs justify-between items-center gap-2" v-if="movie.vote_average">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="white" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
      <h2 class="m-1">{{ movie.vote_average.toFixed(1) }}</h2>
      </div>

      <!-- Budget -->
      <div class="flex flex-col text-xs justify-between items-center" v-if="movie.budget">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>

        <h2 class="m-1">B: ${{ (movie.budget / 1000000).toFixed(2) }}m</h2>
        
      </div>

      <!-- Revenue -->
      <div class="flex flex-col text-xs justify-between items-center" v-if="movie.revenue">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>

        <h2 class="m-1">R: ${{ (movie.revenue / 1000000).toFixed(2) }}m</h2>
        
      </div>

      <!-- Runtime -->
      <div class="flex flex-col text-xs justify-between items-center" v-if="movie.runtime">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

        <h2 class="m-1">{{ runtime }}</h2>
        
      </div>
    </section>
</main>
</template>

<script>
export default {
    props: ["movie"],
    computed: {
      runtime(){
        let h = Math.floor(this.movie.runtime / 60)
        let m = this.movie.runtime % 60
        return `${h}h ${m}m`
      },
    },
    methods: {
      addToFavourites(){
        if(!this.$store.state.favourites.includes(this.movie.id)){
          this.$store.commit("addToFavourites",this.movie)
          localStorage.setItem( "favourites", JSON.stringify(this.$store.state.favourites) )
        }
      }
    }
}
</script>

<style>

</style>