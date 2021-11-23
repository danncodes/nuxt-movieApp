<template>
  <main class="sm:ml-14 sm:w-[calc(100%-3.5rem)] w-full p-4">

    <!-- Section Title -->
    <h1 class="text-xl mb-4 font-medium uppercase border-l-4 border-[#0FEFFD] px-3 rounded-xs" v-if="blockType">{{ blockType }}</h1>

    <!-- Movies -->
    <section class="flex gap-3 max-w-full overflow-x-scroll" v-if="movies" @scroll="scrollFinished" ref="block">
        <AppMoviePoster v-for="movie in movies" :key="movie.id" :movie="movie"/>
    </section>
    <!-- Skeleton Loader -->
    <section class="flex gap-3 max-w-full overflow-x-scroll" v-else>
        <SkeletonPoster v-for="movie in skeletonMovies" :key="movie.id"/>
    </section>
    
  </main>
</template>

<script>
export default {
    props: ["blockType", "movies"],
    data(){
        return {
            skeletonMovies: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
        }
    },
    methods:{
        scrollFinished(){
            // let scrollBlock = this.$refs.block

            // console.log(scrollBlock.clientWidth, "Client Width")
            // console.log(scrollBlock.scrollWidth, "Scroll Width")
            // console.log(window.pageXOffset, "Offset")

            

            // if($(window).scrollTop() + $(window).height() > $(document).height() - 100)
        }
    },
}
</script>

<style>

</style>