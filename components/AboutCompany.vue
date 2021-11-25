<template>
<main v-if="company.logo_path" class="w-36 max-w-[9rem]">
    <img class="object-cover h-full" :src="'https://image.tmdb.org/t/p/original'+ company.logo_path" alt="">
</main>
  
</template>

<script>
export default {
    props: ["company"],
}
</script>

<style>

</style>