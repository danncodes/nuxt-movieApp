<template>
<nav class="h-14 sm:h-full w-full sm:w-14 bg-theme-primary backdrop-blur-xl bg-opacity-50 fixed bottom-0 sm:top-0 left-0 shadow-md z-50">

<!-- Logo -->
<header class="my-10 hidden sm:block">
    <AppLogo />
</header>

<!-- Nav List -->
<ul class="h-full sm:h-96 flex sm:flex-col sm:justify-between justify-around max-w-sm mx-auto">

    <!-- Home -->
    <li :class="{ 'sm:border-l-4 sm:border-b-0 border-b-4 border-[#0FEFFD] rounded': this.$route.name === 'index' }">
        <NuxtLink to="/" class="sm:w-full w-14 flex justify-center items-center sm:h-14 h-full hover:bg-white cursor-pointer hover:bg-opacity-30 duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        </NuxtLink>
    </li>

    <!-- Film -->
    <li>
        <a class="sm:w-full w-14 flex justify-center items-center sm:h-14 h-full hover:bg-white cursor-pointer hover:bg-opacity-30 duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        </a>
    </li>

    <!-- Movie -->
    <li>
        <a class="sm:w-full w-14 flex justify-center items-center sm:h-14 h-full hover:bg-white cursor-pointer hover:bg-opacity-30 duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
            </svg>
        </a>
    </li>

    <!-- Favouraites -->
    <li>
        <a class="sm:w-full w-14 flex justify-center items-center sm:h-14 h-full hover:bg-white cursor-pointer hover:bg-opacity-30 duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
        </a>
    </li>
</ul>

</nav>
</template>

<script>
export default {
    mounted(){
        console.log(this.$route)
    }

}
</script>

<style>

</style>