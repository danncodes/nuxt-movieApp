<template>
  <main class="min-h-screen pb-14 sm:pb-0">
    <!-- No Favouraites -->
    <section class="h-96 w-full flex justify-center" v-if="!favouriteMovies.length">
      <h2 class="my-4">No Favouraites</h2>
    </section>

    <!-- User Favourites -->
    <section v-else class="">
      <AppMoviesBlock blockType="Favourites" :movies="favouriteMovies"/>
      <AppMoviesBlock :blockType="'Because you like ' + movies.title" :movies="movies.movies" v-for="movies in similarMovies" :key="movies.id"/>
    </section>
  </main>
</template>

<script>
export default {
  data(){
    return {
      favouriteMovies: [],
      similarMovies: []
    }
  },
  mounted(){
    this.getFavourites()
    this.getSimlarMovies()
  },
  methods: {
    getFavourites(){
      this.favourites.forEach( (movie) => {
        this.getMovie(movie.id)
        this.getSimlarMovies(movie)
      })
    },
    async getMovie(movie){
      try{
        const req = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${this.apiKey}&language=en-US`)
        const data = await req.json()
        this.favouriteMovies.push(data)
      }
      catch(e){
        console.log(e.message)
      }
    },
    async getSimlarMovies(movie){
      try{
        const req = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/similar?api_key=${this.apiKey}&language=en-US`)
        const data = await req.json()
        
        if(!data.results) return

        const movies = {
          movies: data.results,
          id: movie.id,
          title: movie.title
        }

        this.similarMovies.push(movies)
      }
      catch(e){
        console.log(e.message)
      }
    }
  },
  computed:{
    favourites(){
      return this.$store.state.favourites
    },
    apiKey(){
      return this.$store.state.apiKey
    }
  }

}
</script>

<style>

</style>