<template>
  <main class="min-h-screen">
    
    <!-- Recently Viewed??  -->
    <!-- No Favouraites -->
    <section class="" v-if="!favourites.length">
    </section>
  </main>
</template>

<script>
export default {
  mounted(){
    console.log("All User Favourites",this.favourites)
  },
  computed:{
    favourites(){
      return this.$store.state.favourites
    }
  }

}
</script>

<style>

</style>