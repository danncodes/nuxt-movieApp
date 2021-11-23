<template>
  <main class="w-full bg-cover bg-center bg-no-repeat h-96 relative sm:h-[648px] max-w-7xl flex flex-col justify-end p-4 sm:pl-[72px]"
  :style="'background-image: url(' + `https://image.tmdb.org/t/p/original${featuredMovie.backdrop_path}` + ')'" v-if="featuredMovie">

    <!-- Movie Ribbon -->
    <MovieRibbon :rating="featuredMovie.vote_average"/>

    <section class="mb-4">
      <!-- Movie Tags -->
      <div class="flex">
        <MovieTag v-for="genreID in featuredMovie.genre_ids" :key="genreID" :genreID="genreID" />
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

      <!-- Movie Info -->
      <div class="bg-theme-primary backdrop-blur-xl bg-opacity-50 rounded p-2 max-w-sm">

        <!-- Adult? -->
        <div class="bg-red-500 bg-opacity-50 h-8 w-8 rounded-full absolute -right-5 -top-5 flex justify-center items-center" v-if="featuredMovie.adult">
          <h1 class="font-bold text-md">18+</h1>
        </div>

        <h1 class="text-xl sm:text-2xl font-semibold mb-4">{{ featuredMovie.original_title }}</h1>
        <p class="text-xs sm:text-sm font-medium">{{ featuredMovie.overview }}</p>
      </div>
    </section>

    <!-- Feature Section Toggler -->
    <section class="w-full flex justify-center items-center">
      <ul class="h-4 w-32 mx-auto absolute bottom-2 flex items-center justify-around rounded-xs">
        <li class="h-2 w-2 rounded-full cursor-pointer hover:opacity-100 duration-300" :class="index === 0 ? 'opacity-100 bg-[#0FEFFD] scale-125' : 'bg-white opacity-70' " @click="featuredMovie = popularMovies[0]; index = 0"></li>
        <li class="h-2 w-2 rounded-full cursor-pointer hover:opacity-100 duration-300" :class="index === 1 ? 'opacity-100 bg-[#0FEFFD] scale-125' : 'bg-white opacity-70' " @click="featuredMovie = popularMovies[1]; index = 1"></li>
        <li class="h-2 w-2 rounded-full cursor-pointer hover:opacity-100 duration-300" :class="index === 2 ? 'opacity-100 bg-[#0FEFFD] scale-125' : 'bg-white opacity-70' " @click="featuredMovie = popularMovies[2]; index = 2"></li>
      </ul>
    </section>

  </main>
</template>

<script>
export default {
    data(){
        return {
            featuredMovie: undefined,
            popularMovies: undefined,
            index: 0
        }
    },
    computed: {
      apiKey(){
        return this.$store.state.apiKey
      }
    },
    mounted(){
    this.getPopularMovies()
  },
  methods: {
    async getPopularMovies(){
      const req = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US`)
      const data = await req.json()
      this.popularMovies = data.results
          this.featuredMovie = this.popularMovies[this.index]
          console.log(this.featuredMovie)
    },
    updateFeaturedMovie(){
    
    }

  }

}
</script>

<style scoped>

/* .box {
  width: 200px; height: 300px;
  position: relative;
  border: 1px solid #BBB;
  background: #EEE;
} */
</style>