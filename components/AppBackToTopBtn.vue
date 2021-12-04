<template>
  <main class="w-12 h-12 rounded flex justify-center items-center cursor-pointer 
  bg-theme-primary duration-300 opacity-60 hover:opacity-100 fixed bottom-[4.5rem] 
  sm:bottom-4 right-4 hover:border-b-4 hover:border-[#0FEFFD]" @click="backToTop"
  :class="{'hidden': false}">
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
        console.log(window)
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