<template>
<main class="pb-14 sm:pb-0">
    <AboutMainSection :movie="movie" v-if="movie"/>
    <!-- <section v-else class="h-96 w-full bg-red-400"></section> -->
    <AboutVideoBlock blockType="Videos" :videos="videos" v-if="videos"/>
    <AboutProductionBlock blockType="Production" :companies="companies"/>
    <AppPeopleBlock blockType="Cast" :cast="cast"/>
    <AppMoviesBlock blockType="More Like This" :movies="similarMovies"/>
    <AppMoviesBlock blockType="Recommended" :movies="recommendations"/>

</main>
</template>

<script>
export default {
    data(){
        return {
            movie: undefined,
            similarMovies: undefined,
            recommendations: undefined,
            cast: undefined,
            companies: undefined,
            videos: undefined
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
        this.getRecomendations()
        this.getCredits()
        this.getVideos()

    },
    methods: {
        async getMovie(){
            try{
                const req = await fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.movieid}?api_key=${this.apiKey}&language=en-US`)
                const data = await req.json()
                this.movie = data
                this.companies = data.production_companies
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
        },
        async getRecomendations(){
            try{
                const req = await fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.movieid}/recommendations?api_key=${this.apiKey}&language=en-US`)
                const data = await req.json()
                this.recommendations = data.results
            }
            catch(e){
                console.log(e.message)
            }
        },
        async getCredits(){
            try{
                const req = await fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.movieid}/credits?api_key=${this.apiKey}&language=en-US`)
                const data = await req.json()
                this.cast = data.cast
            }
            catch(e){
                console.log(e.message)
            }
        },
        async getVideos(){
            try{
                const req = await fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.movieid}/videos?api_key=${this.apiKey}&language=en-US`)
                const data = await req.json()
                if(data.results.length){
                    this.videos = data
                }
            }
            catch(e){
                console.log(e.message)
            }
        },
    }

}
</script>

<style>

</style>