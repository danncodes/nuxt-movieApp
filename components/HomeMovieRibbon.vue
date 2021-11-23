<template>
  <div class="ribbon2 flex flex-col justify-center items-center bg-[#0FEFFD] bg-opacity-60 font-semibold z-50">
      <span class="text-[10px]">IMDB Rating:</span>
      <span class="my-4">{{ rating }}</span>
    </div>
</template>

<script>
export default {
    props: ["rating"]

}
</script>

<style scoped>

.ribbon2 {
 width: 60px;
 padding: 10px 0;
 position: absolute;
 top: -6px;
 right: 25px;
 text-align: center;
 border-top-left-radius: 3px;
}
.ribbon2:before {
 height: 0;
 width: 0;
 right: -5.5px;
 top: 0.1px;
 border-right: 6px solid transparent;
}
.ribbon2:before, .ribbon2:after {
  content: "";
  position: absolute;
  opacity: 60%;
}
.ribbon2:after {
  height: 0;
  width: 0;
  bottom: -29.5px;
  left: 0;
  border-left: 30px solid #0FEFFD;
  border-right: 30px solid #0FEFFD;
  border-bottom: 30px solid transparent;
}
</style>