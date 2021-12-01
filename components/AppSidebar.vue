<template>
<nav class="h-14 sm:h-full w-full sm:w-14 bg-theme-primary backdrop-blur-xl bg-opacity-50 fixed bottom-0 sm:top-0 left-0 shadow-md z-50">

<!-- Logo -->
<header class="my-10 hidden sm:block">
    <AppLogo />
</header>

<!-- Nav List -->
<ul class="h-full sm:h-96 flex sm:flex-col sm:justify-between justify-around max-w-sm mx-auto">

    <!-- Home -->
    <li @click="closeSearchScreen" :class="{ 'sm:border-l-4 sm:border-b-0 border-b-4 border-[#0FEFFD] rounded': this.$route.name === 'index' && !searchScreen }">
        <NuxtLink to="/" class="sm:w-full w-14 flex justify-center items-center sm:h-14 h-full hover:bg-white cursor-pointer hover:bg-opacity-30 duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        </NuxtLink>
    </li>

    <!-- Search -->
    <li @click="toggleSearchScreen" :class="{ 'sm:border-l-4 sm:border-b-0 border-b-4 border-[#0FEFFD] rounded': searchScreen }">
        <a class="sm:w-full w-14 flex justify-center items-center sm:h-14 h-full hover:bg-white cursor-pointer hover:bg-opacity-30 duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </a>
    </li>

    <!-- Generes -->
    <li @click="closeSearchScreen" :class="{ 'sm:border-l-4 sm:border-b-0 border-b-4 border-[#0FEFFD] rounded': this.$route.name === 'genres' && !searchScreen }">
        <NuxtLink to="/genres" class="sm:w-full w-14 flex justify-center items-center sm:h-14 h-full hover:bg-white cursor-pointer hover:bg-opacity-30 duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
            </svg>
        </NuxtLink>
    </li>

    <!-- Favouraites -->
    <li @click="closeSearchScreen" :class="{ 'sm:border-l-4 sm:border-b-0 border-b-4 border-[#0FEFFD] rounded': this.$route.name === 'favourites' && !searchScreen }">
        <NuxtLink to="/favourites" class="sm:w-full w-14 flex justify-center items-center sm:h-14 h-full hover:bg-white cursor-pointer hover:bg-opacity-30 duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        </NuxtLink>
    </li>
</ul>

</nav>
</template>

<script>
export default {
    computed: {
        searchScreen(){
            return this.$store.state.searchScreen
        }
    },
    methods: {
        toggleSearchScreen(){
            this.$store.commit("toggleSearchScreen")
        },
        closeSearchScreen(){
            this.$store.commit("closeSearchScreen")
        }
    }

}
</script>

<style>

</style>