<template>
  <div class="loading"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Loading extends Vue {}
</script>

<style lang="scss" scoped>
$width: 60px;
$height: 60px;

.loading {
  height: $height;
  width: $width;
  &::before {
    content: '';
    display: block;
    height: $height;
    width: $width;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    border: 10px solid #555;
    border-top-color: transparent;
    animation: spin 0.7s linear infinite;
    box-sizing: border-box;
  }
}

@keyframes spin {
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
