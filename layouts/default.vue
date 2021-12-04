<template>
<main class="bg-theme-primary text-white">
  <AppSidebar />
  <Nuxt />
  <AppNotificationsColumn />
  <AppBackToTopBtn />
  <AppSearch />
</main>
</template>
<script>
export default {
  beforeMount(){
    if(localStorage.getItem("favourites")){
      const favourites = JSON.parse(localStorage.getItem("favourites"))
      this.$store.commit("setFavourites", favourites)
    }
  },
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
