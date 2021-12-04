<template>
  <main class="min-h-screen">
    
    <!-- Recently Viewed??  -->


    <!-- No Favouraites -->
    <section class="h-96 w-full flex justify-center" v-if="!favouriteMovies.length">
      <h2 class="my-4">No Favouraites</h2>
    </section>

    <section v-else class="">
      <AppMoviesBlock blockType="Favourites" :movies="favouriteMovies"/>
    </section>
  </main>
</template>

<script>
export default {
  data(){
    return {
      favouriteMovies: []
    }
  },
  mounted(){
    this.getFavourites()
  },
  methods: {
    getFavourites(){
        this.favourites.forEach( (movie) => {
        this.getMovie(movie)
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