<template>
  <div class="h-56 w-36 min-w-[9rem] sm:h-64 sm:w-44 sm:min-w-[11rem] lg:h-72 lg:w-48 lg:min-w-[12rem] duration-200 rounded skeleton"></div>
</template>

<script>
export default {

}
</script>

<style>

.skeleton {
  background-color: rgba(229, 231, 235);
  animation: skeleton-loader 1s infinite alternate;
}

@keyframes skeleton-loader {
  100% {
    background-color: rgba(160, 163, 169, 0.543);
  }
}
</style>