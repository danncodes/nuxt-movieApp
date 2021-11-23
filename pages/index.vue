<template>
<main class="bg-theme-primary font-cairo text-white">
  <Sidebar />
  <MainSection :popularMovies="popularMovies" v-if="popularMovies"/>
  <MainSkeleton v-if="!popularMovies"/>
  <MoviesBlock blockType="Popular" :movies="popularMovies"/>
  <MoviesBlock blockType="Top Rated" :movies="topRatedMovies"/>
  <MoviesBlock blockType="Upcoming" :movies="upcomingMovies"/>
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
          console.log(this.popularMovies)
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
