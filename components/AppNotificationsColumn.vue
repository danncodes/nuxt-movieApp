<template>
  <main class="fixed right-0 top-0 flex-col m-4 gap-1 hidden md:flex max-w-xs">
      <AppNotification v-for="notification in notifications " :key="notification" :notification="notification"/>
  </main>
</template>

<script>
export default {
    computed : {
        notifications(){
            return this.$store.state.notifications
        }
    }

}
</script>

<style>

</style>