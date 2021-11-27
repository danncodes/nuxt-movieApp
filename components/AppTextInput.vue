<template>
<main class="w-full my-4 relative flex items-center h-8 max-w-md mx-auto">
    <div class="bg-gray-50 h-full flex items-center rounded-l p-2 duration-300" :class="{'border-t-4 border-[#0FEFFD] shadow-md h-9': inputValue}">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
    </div>
    <input @input="userInput" type="text" :placeholder="placeholder" class="w-full p-2 pl-4 rounded rounded-l-none bg-gray-50 text-black text-xs outline-none duration-300 focus:shadow-md focus:border-t-4 border-[#0FEFFD]" ref="input">

    <svg v-if="inputValue" @click="clearInput" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 absolute right-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
</main>
  
</template>

<script>
export default {
    props: ["placeholder"],
    data(){
        return {
            inputValue: ""
        }
    },
    methods: {
        clearInput(){
            this.$refs.input.value = ""
            this.inputValue = this.$refs.input.value
        },
        userInput(){
            this.inputValue = this.$refs.input.value
        }
    }

}
</script>

<style>

</style>