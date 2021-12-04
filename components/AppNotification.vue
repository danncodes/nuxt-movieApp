<template>
  <section class="bg-theme-primary w-full cursor-pointer backdrop-blur-xl bg-opacity-50 z-50 rounded py-4 px-8 border-l-4 border-[#0FEFFD] flex justify-center items-center" v-if="!hide" @click="removeNotification">
      <h2 class="text-xs">{{ notification}}</h2>
  </section>
</template>

<script>
export default {
  props: ["notification"],
  data(){
    return {
      hide: false
    }
  },
  methods: {
    removeNotification(){
      this.hide = true
    }
  }
}
</script>

<style>


</style>