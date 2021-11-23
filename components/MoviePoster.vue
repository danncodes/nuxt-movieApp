<template>
  <NuxtLink :to="'/movies/' + movie.id" class="relative">

    <img class="h-56 w-36 min-w-[9rem] sm:h-64 sm:w-44 sm:min-w-[11rem] lg:h-72 lg:w-48 lg:min-w-[12rem] duration-200 rounded-xs object-cover opacity-90 hover:opacity-100 hover:-translate-y-2" :src="'https://image.tmdb.org/t/p/original'+ movie.poster_path" alt="">

    <div class="bg-theme-primary border-t-4 border-[#0FEFFD] p-3 rounded-xs bg-opacity-50 absolute top-0 right-0 rounded-xs flex flex-col justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="white" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
      <h2 class="m-1">{{movie.vote_average}}</h2>
    </div>

  </NuxtLink>
</template>

<script>
export default {
    props: ["movie"],
}
</script>

<style>
</style>