<template>
  <main class="w-full bg-cover bg-center bg-no-repeat h-96 relative sm:h-[648px] mx-auto max-w-7xl flex flex-col justify-end p-4 sm:pl-[72px]"
  :style="'background-image: url(' + `https://image.tmdb.org/t/p/original${featuredMovie.backdrop_path}` + ')'" v-if="featuredMovie">

    <!-- Movie Ribbon -->
    <HomeMovieRibbon :rating="featuredMovie.vote_average"/>

    <!-- Movie Info Block -->
    <section class="mb-4">
      
      <!-- Movie Tags -->
      <div class="flex">
        <AppMovieTag v-for="genreID in featuredMovie.genre_ids" :key="genreID" :genreID="genreID" />
      </div>

      <!-- Star Rating -->
      <div class="h-4 my-4 flex">

        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="white" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="white" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="white" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="white" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="white" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>



      </div>

      <!-- Movie Data -->
      <div class="bg-theme-primary backdrop-blur-xl bg-opacity-50 rounded p-2 max-w-sm border-l-4 border-[#0FEFFD]">

        <!-- Adult? -->
        <div class="bg-red-500 bg-opacity-50 h-8 w-8 rounded-full absolute -right-5 -top-5 flex justify-center items-center" v-if="featuredMovie.adult">
          <h1 class="font-bold text-md">18+</h1>
        </div>

        <h1 class="text-xl sm:text-2xl lg:text-3xl font-black mb-4 uppercase">{{ featuredMovie.original_title }}</h1>
        <p class="text-xs sm:text-sm font-medium">{{ featuredMovie.overview }}</p>
      </div>
    </section>

    <!-- Feature Section Toggler -->
    <section class="w-full flex justify-center items-center z-30">
      <ul class="h-4 w-32 mx-auto absolute bottom-2 flex items-center justify-around rounded-xs">
        <li class="h-2 w-2 rounded-full cursor-pointer hover:opacity-100 duration-300" :class="index === 0 ? 'opacity-100 bg-[#0FEFFD] scale-125' : 'bg-white opacity-70' " @click="featuredMovie = popularMovies[0]; index = 0"></li>
        <li class="h-2 w-2 rounded-full cursor-pointer hover:opacity-100 duration-300" :class="index === 1 ? 'opacity-100 bg-[#0FEFFD] scale-125' : 'bg-white opacity-70' " @click="featuredMovie = popularMovies[1]; index = 1"></li>
        <li class="h-2 w-2 rounded-full cursor-pointer hover:opacity-100 duration-300" :class="index === 2 ? 'opacity-100 bg-[#0FEFFD] scale-125' : 'bg-white opacity-70' " @click="featuredMovie = popularMovies[2]; index = 2"></li>
        <li class="h-2 w-2 rounded-full cursor-pointer hover:opacity-100 duration-300" :class="index === 3 ? 'opacity-100 bg-[#0FEFFD] scale-125' : 'bg-white opacity-70' " @click="featuredMovie = popularMovies[3]; index = 3"></li>
        <li class="h-2 w-2 rounded-full cursor-pointer hover:opacity-100 duration-300" :class="index === 4 ? 'opacity-100 bg-[#0FEFFD] scale-125' : 'bg-white opacity-70' " @click="featuredMovie = popularMovies[4]; index = 4"></li>
      </ul>
    </section>

    <section class="hidden  h-full w-full sm:ml-14 sm:w-[calc(100%-3.5rem)] px-4 absolute left-0 top-0 max-w-7xl sm:flex justify-between items-center">
      <!-- Left -->
      <div class="h-12 w-12 rounded-xs hover:backdrop-blur-xl bg-opacity-50 flex justify-center items-center duration-150 cursor-pointer" @click="toggleCarousel('p')">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </div>

      <!-- Right -->
      <div class="h-12 w-12 rounded-xs hover:backdrop-blur-xl bg-opacity-50 flex justify-center items-center duration-150 cursor-pointer" @click="toggleCarousel('n')">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  props: ["popularMovies"],
    data(){
        return {
            featuredMovie: undefined,
            index: 0,
        }
    },
    mounted(){
      this.updateFeatureFilm()
    },
  methods: {
    updateFeatureFilm(){
      this.featuredMovie = this.popularMovies[this.index]
    },
    toggleCarousel(direction){
      if(direction === 'n'){
        this.index === 4 ? this.index = 0 : this.index++
      }
      else{
        this.index === 0 ? this.index = 4 : this.index--
      }
      this.updateFeatureFilm()
    },
  }

}
</script>

<style scoped>
</style>