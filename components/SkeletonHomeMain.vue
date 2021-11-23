<template>
  <main class="w-full bg-cover bg-center bg-no-repeat skeleton h-96 relative sm:h-[648px] mx-auto max-w-7xl flex flex-col justify-end p-4 sm:pl-[72px]">

    <!-- Movie Info Block -->
    <section class="mb-4">
      <!-- Movie Tags -->
      <div class="flex">
        <div class="h-4 mr-1 p-2 flex justify-center items-center skeleton bg-opacity-50 rounded-xs hover:underline duration-300 cursor-pointer">
            <div class="h-2 w-8 skeleton rounded-md"></div>
        </div>
        <div class="h-4 mr-1 p-2 flex justify-center items-center skeleton bg-opacity-50 rounded-xs hover:underline duration-300 cursor-pointer">
            <div class="h-2 w-8 skeleton rounded-md"></div>
        </div>
        <div class="h-4 mr-1 p-2 flex justify-center items-center skeleton bg-opacity-50 rounded-xs hover:underline duration-300 cursor-pointer">
            <div class="h-2 w-8 skeleton rounded-md"></div>
        </div>
        
      </div>

      <!-- Star Rating -->
      <div class="h-4 my-4 flex">

        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 skeleton" fill="white" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 skeleton" fill="white" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 skeleton" fill="white" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 skeleton" fill="white" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 skeleton" fill="white" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>



      </div>

      <!-- Movie Data -->
      <div class="bg-theme-primary backdrop-blur-xl bg-opacity-50 rounded p-4 max-w-sm h-40 flex flex-col justify-around">
        <section>
            <div class="h-5 mb-1 rounded-md skeleton"></div>
            <div class="h-5 mb-4 w-6/12 rounded-md skeleton"></div>
        </section>

        <section>
            <div class="h-3 rounded-md skeleton my-1"></div>
            <div class="h-3 rounded-md skeleton my-1"></div>
            <div class="h-3 rounded-md skeleton my-1 w-6/12"></div>
        </section>

      </div>
    </section>

    <!-- Feature Section Toggler -->
    <section class="w-full flex justify-center items-center z-50">
      <ul class="h-4 w-32 mx-auto absolute bottom-2 flex items-center justify-around rounded-xs">
        <li class="h-2 w-2 rounded-full cursor-pointer hover:opacity-100 duration-300 opacity-100 bg-[#0FEFFD] scale-125"></li>
        <li class="h-2 w-2 rounded-full cursor-pointer hover:opacity-100 duration-300 bg-white opacity-70"></li>
        <li class="h-2 w-2 rounded-full cursor-pointer hover:opacity-100 duration-300 bg-white opacity-70"></li>
        <li class="h-2 w-2 rounded-full cursor-pointer hover:opacity-100 duration-300 bg-white opacity-70"></li>
        <li class="h-2 w-2 rounded-full cursor-pointer hover:opacity-100 duration-300 bg-white opacity-70"></li>
      </ul>
    </section>

    <section class="hidden  h-full w-full sm:ml-14 sm:w-[calc(100%-3.5rem)] px-4 absolute left-0 top-0 max-w-7xl sm:flex justify-between items-center">
      <!-- Left -->
      <div class="h-12 w-12 rounded-xs hover:backdrop-blur-xl bg-opacity-50 flex justify-center items-center duration-150 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </div>

      <!-- Right -->
      <div class="h-12 w-12 rounded-xs hover:backdrop-blur-xl bg-opacity-50 flex justify-center items-center duration-150 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>

    </section>
  </main>
</template>

<script>
export default {
    data(){
        return {

        }
    },
  methods: {
  }
}
</script>

<style>
.skeleton {
  background-color: rgba(229, 231, 235);
  animation: skeleton-loader 1s infinite alternate;
}

@keyframes skeleton-loader {
  100% {
    background-color: rgba(160, 163, 169, 0.543);
  }
}

</style>