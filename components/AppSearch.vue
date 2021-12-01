<template>
  <main class="h-[calc(100vh-3.5rem)] overflow-y-scroll w-full sm:h-screen sm:w-[calc(100%-3.5rem)] ml-auto fixed top-0 sm:right-0 z-50 bg-theme-primary duration-500"
    :class="!searchScreen ? '-translate-y-full' : 'translate-y-0'" >
    <AppTextInput placeholder="Search Movies ..." @getSearchResults="updateUserSearch"/>
    <AppMoviesBlock blockType="Search Results" :movies="searchResults" v-if="searchResults"/>
    <AppMoviesBlock blockType="Recommended" :movies="recommended" v-if="recommended"/>
  </main>
</template>

<script>
export default {
  data(){
    return {
      searchResults: undefined,
      recommended: undefined
    }
  },
  computed: {
    apiKey(){
        return this.$store.state.apiKey
      },
    searchScreen(){
      return this.$store.state.searchScreen
    }
  },
  async mounted(){
    try{
      const req = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=5`)
      const data = await req.json()
      this.recommended = data.results
    }
    catch(e){
      console.log(e.message)
    }
  },
  methods: {
    updateUserSearch(data){
      this.searchResults = data
    },
  }

}
</script>

<style>

</style>