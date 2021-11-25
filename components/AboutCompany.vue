<template>
<main v-if="company.logo_path" class="min-w-[9rem] max-w-[9rem] h-full mx-1">
    <img class="object-contain h-full" :src="'https://image.tmdb.org/t/p/original'+ company.logo_path" alt="">
</main>
  
</template>

<script>
export default {
    props: ["company"],
}
</script>

<style>

</style>