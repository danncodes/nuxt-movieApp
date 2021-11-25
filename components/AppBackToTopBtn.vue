<template>
  <main class="w-12 h-12 rounded-full flex justify-center items-center bg-theme-primary opacity-40 fixed bottom-[4.5rem] sm:bottom-4 right-4" @click="backToTop">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-1 w-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
  </main>
</template>

<script>
// Hover or Scroll Upwards Add Fill color, At the Top Display None
export default {
    methods: {
        backToTop(){
            console.log(window.pageYOffset)
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            console.log(window.pageYOffset)

        }
    }

}
</script>

<style>

</style>