<template>
<main class="pb-14 sm:pb-0 sm:ml-14 sm:mb-0 p-4">
  <h1 class="text-xl mb-4 font-medium uppercase border-l-4 border-[#0FEFFD] px-3 rounded-xs">Watch Providers</h1>
  <section class="grid grid-flow-row grid-cols-4 sm:grid-cols-8 lg:grid-cols-9 gap-2">
    <a v-for="provider in watchProviders" :key="provider.provider_id" :href="'https://www.google.co.uk/search?q=' + provider.provider_name" target="_blank">
      <img class="shadow hover:shadow-2xl duration-200 rounded-xs object-fit opacity-90 hover:opacity-100 hover:-translate-y-2" :src="'https://image.tmdb.org/t/p/original'+ provider.logo_path" :alt="provider.provider_name">
    </a>
  </section>
</main>
</template>

<script>
export default {
  data(){
    return {
      watchProviders: undefined,
      allGenres: [
        {genreId: 28, img: undefined},
        {genreId: 12, img: undefined},
        {genreId: 16, img: undefined},
        {genreId: 35, img: undefined},
        {genreId: 80, img: undefined},
        {genreId: 99, img: undefined},
        {genreId: 18, img: undefined},
        {genreId: 16, img: undefined},
        {genreId: 10751, img: undefined},
        {genreId: 14, img: undefined},
        {genreId: 36, img: undefined},
        {genreId: 27, img: undefined},
        {genreId: 10402, img: undefined},
        {genreId: 9648, img: undefined},
        {genreId: 10749, img: undefined},
        {genreId: 878, img: undefined},
        {genreId: 10770, img: undefined},
        {genreId: 53, img: undefined},
        {genreId: 10752, img: undefined},
        {genreId: 37, img: undefined},
      ]
    }
  },
  mounted(){
    this.getWatchProviders()
  },
  computed:{
    apiKey(){
      return this.$store.state.apiKey
    }
  },
  methods: {
    async getWatchProviders(){
      try{
        const req = await fetch(`https://api.themoviedb.org/3/watch/providers/movie?api_key=${this.apiKey}&language=en-US`)
        const data = await req.json()
        this.watchProviders = data.results
        console.log(data, "Day")
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