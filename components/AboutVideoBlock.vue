<template>
  <main class="sm:ml-14 sm:w-[calc(100%-3.5rem)] w-full p-4">

    <!-- Section Title -->
    <h1 class="text-xl mb-4 font-medium uppercase border-l-4 border-[#0FEFFD] px-3 rounded-xs" v-if="blockType">{{ blockType }}</h1>

    <!-- Videos -->
    <section class="flex justify-center items-center gap-3 max-w-4xl mx-auto" v-if="videos" ref="block">
        <AboutVideo :video="videos.results[0]"/>
    </section>
    <!-- Skeleton Loader -->
    <section class="flex gap-3 max-w-full overflow-x-scroll" v-else>  
    </section>
    
  </main>
</template>

<script>
export default {
    props: ["blockType", "videos"],
    data(){
        return {
        }
    },
}
</script>

<style>

</style>