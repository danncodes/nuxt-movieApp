<template>
<main class="bg-theme-primary text-white">
    <AboutMainSection :movie="movie" v-if="movie"/>
    <section v-else class="h-96 w-full bg-red-400"></section>
    <AppMoviesBlock blockType="More Like This" :movies="similarMovies"/>

</main>
</template>

<script>
export default {
    data(){
        return {
            movie: undefined,
            similarMovies: undefined

        }
    },
    computed: {
      apiKey(){
        return this.$store.state.apiKey
      }
    },
    mounted(){
        this.getMovie()
        this.getSimilarMovies()
        console.log(this.$route.params.movieid)

    },
    methods: {
        async getMovie(){
            try{
                const req = await fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.movieid}?api_key=${this.apiKey}&language=en-US`)
                const data = await req.json()
                this.movie = data
                console.log(this.movie)
            }
            catch(e){
                console.log(e.message)
            }
        },
        async getSimilarMovies(){
            try{
                const req = await fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.movieid}/similar?api_key=${this.apiKey}&language=en-US`)
                const data = await req.json()
                this.similarMovies = data.results
            }
            catch(e){
                console.log(e.message)
            }
        }
    }

}
</script>

<style>

</style>