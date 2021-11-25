<template>
<main v-if="company.logo_path" class="mx-1">
    <img class="object-contain max-h-[300px]" :src="'https://image.tmdb.org/t/p/original'+ company.logo_path" alt="">
</main>
  
</template>

<script>
export default {
    props: ["company"],
}
</script>

<style>

</style>