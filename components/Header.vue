<template>
  <header class="header">
    <div class="header-logo"><img src="#" alt="atena" /></div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  background-color: #35a581;
  z-index: 10;
  .header-title {
    font-size: 30px;
    font-weight: bold;
  }
}

@media print {
  .header {
    width: 100mm; // needed for Chrome.
    height: 148mm; // needed for Chrome.
    background: none;
  }
  .cardprinter {
    .cardprinter-setting {
      display: none;
    }
  }
  .letter_section {
    .letter_section-setting {
      display: none;
    }
  }
}
</style>
