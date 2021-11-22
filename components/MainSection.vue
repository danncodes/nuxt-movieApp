<template>
  <main class="w-full" v-if="activeMovie">
      <!-- Poster -->
      <div class="">
        <img :src="'https://image.tmdb.org/t/p/original' + activeMovie.poster_path" alt="">
      </div>

  </main>
</template>

<script>
export default {
    data(){
        return {
            activeMovie: undefined,
            popularMovies: undefined
        }
    },
    computed: {
      apiKey(){
        return this.$store.state.apiKey
      }
    },
    mounted(){
    // this.getPopularMovies()
  },
  methods: {
    async getPopularMovies(){
      const req = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US`)
      const data = await req.json()
      this.popularMovies = data.results
      console.log(data.results)

      this.activeMovie = this.popularMovies[0]
    }

  }

}
</script>

<style>
</style>