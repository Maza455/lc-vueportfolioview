<template>
  <div class="background">
    <div class="background-image"></div>
    <div class="animated-birds"></div>
  </div>
</template>

<script>
export default {
  name: 'BackgroundComp',
};
</script>

<style scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/imgs/EagleSlide.avif');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}


@media (max-width: 770px) {
  .background-image {
    background-image: url('@/assets/imgs/205046843-isolated-serious-white-seagull-generative-ai.jpg');
    background-attachment: fixed;
  }
}
</style>
