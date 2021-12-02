<template>
<main v-if="company.logo_path" class="mx-1">
    <img class="object-contain max-h-[150px] lg:max-h-[300px] max-w-[10rem] lg:max-w-xs" :src="'https://image.tmdb.org/t/p/original'+ company.logo_path" alt="">
</main>
  
</template>

<script>
export default {
    props: ["company"],
}
</script>

<style>

</style>