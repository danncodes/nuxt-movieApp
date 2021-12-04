<template>
  <main class="min-h-screen">
    <!-- No Favouraites -->
    <section class="h-96 w-full flex justify-center" v-if="!favouriteMovies.length">
      <h2 class="my-4">No Favouraites</h2>
    </section>

    <!-- User Favourites -->
    <section v-else class="">
      <AppMoviesBlock blockType="Favourites" :movies="favouriteMovies"/>
      <AppMoviesBlock :blockType="'Because you like ' + movies.id" :movies="movies.movies" v-for="movies in similarMovies" :key="movies.id"/>
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
      console.log(this.favourites)
      console.log(this.favourites.length)
      this.favourites.forEach( (movie) => {
      this.getMovie(movie)
      this.getSimlarMovies(movie)
      })
      console.log(this.similarMovies)
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
        const req = await fetch(`https://api.themoviedb.org/3/movie/${movie}/similar?api_key=${this.apiKey}&language=en-US`)
        const data = await req.json()
        
        if(!data.results) return
        console.log(movie, "HERE")
        const movies = {
          movies: data.results,
          id: movie
        }
        this.similarMovies.push(movies)
        console.log(movies)
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