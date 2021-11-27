<template>
  <main class="h-[calc(100vh-3.5rem)] overflow-y-scroll w-full sm:h-screen sm:w-[calc(100%-3.5rem)] ml-auto fixed top-0 sm:right-0 z-50 bg-theme-primary duration-500"
    :class="!searchScreen ? '-translate-y-full' : 'translate-y-0'" >
    <AppTextInput placeholder="Search for a Movie or Genre ..." />

    <AppMoviesBlock blockType="Search Results" />
  </main>
</template>

<script>
export default {
  computed: {
    searchScreen(){
      return this.$store.state.searchScreen
    }
  }

}
</script>

<style>

</style>