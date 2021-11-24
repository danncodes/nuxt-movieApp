<template>
  <main class="sm:ml-14 sm:w-[calc(100%-3.5rem)] w-full p-4">

    <!-- Section Title -->
    <h1 class="text-xl mb-4 font-medium uppercase border-l-4 border-[#0FEFFD] px-3 rounded-xs" v-if="blockType">{{ blockType }}</h1>

    <!-- Cast and Crew -->
    <section class="flex gap-3 max-w-full overflow-x-scroll" v-if="cast">
        <AppPersonPoster v-for="person in cast" :key="person.cast_id" :person="person"/>
    </section>

    <!-- Skeleton Loader -->
    <section class="flex gap-3 max-w-full overflow-x-scroll" v-else>
        <SkeletonPoster v-for="person in skeletonPeople" :key="person"/>
    </section>
    
  </main>
</template>

<script>
export default {
    props: ["blockType", "cast"],
    data(){
        return {
            skeletonPeople: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
        }
    },
}
</script>

<style>

</style>