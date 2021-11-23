<template>
  <main class="sm:ml-14 sm:w-[calc(100%-3.5rem)] h-96 w-full p-4">

      <!-- Section Title -->
      <h1 class="text-xl mb-4">New Releases</h1>

      <!-- Movies -->
      <section class="flex gap-3 max-w-full overflow-x-scroll" v-if="popularMovies">
          <MoviePoster v-for="movie in popularMovies" :key="movie.id" :movie="movie"/>
      </section>
  </main>
</template>

<script>
export default {
    data(){
        return {
            popularMovies: undefined
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
      console.log(this.popularMovies[5])
    },
  }

}
</script>

<style>

</style>