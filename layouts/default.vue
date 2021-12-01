<template>
<main class="bg-theme-primary text-white">
  <AppSidebar />
  <Nuxt />
  <AppSearch />
</main>
</template>
<script>
export default {
  mounted(){
    if(localStorage.getItem("favourites")){
      const favourites = JSON.parse(localStorage.getItem("favourites"))
      this.$store.commit("setFavourites", favourites)
    }
  },
}
</script>
