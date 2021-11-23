<template>
<main class="bg-theme-primary text-white">
  <HomeMainSection :popularMovies="popularMovies" v-if="popularMovies"/>
  <SkeletonHomeMain v-if="!popularMovies"/>
  <AppMoviesBlock blockType="Popular" :movies="popularMovies"/>
  <AppMoviesBlock blockType="Top Rated" :movies="topRatedMovies"/>
  <AppMoviesBlock blockType="Upcoming" :movies="upcomingMovies"/>
</main>

</template>

<script>
export default {
    data(){
        return {
            popularMovies: undefined,
            topRatedMovies: undefined,
            upcomingMovies: undefined
        }
    },
    computed: {
      apiKey(){
        return this.$store.state.apiKey
      }
    },
    mounted(){
    this.getPopular()
    this.getTopRated()
    this.getUpcoming()
  },
  methods: {
    async getPopular(){
        try{
          const req = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US`)
          const data = await req.json()
          this.popularMovies = data.results
        }
        catch(e){
          console.log(e.message)
        }
    },
    async getTopRated(){
        try{
          const req = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&language=en-US`)
          const data = await req.json()
          this.topRatedMovies = data.results
        }
        catch(e){
          console.log(e.message)
        }
    },
    async getUpcoming(){
        try{
          const req = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}&language=en-US`)
          const data = await req.json()
          this.upcomingMovies = data.results
        }
        catch(e){
          console.log(e.message)
        }
    },
  }

}
</script>

<style scoped>


</style>
