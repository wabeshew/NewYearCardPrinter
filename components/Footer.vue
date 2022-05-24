<template>
  <header class="footer">
    <div class="footer-copyright">Copyright (C) {{ now }} Kota Shimura All Rights Reserved.</div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Footer extends Vue {
  now: number = 0;

  created() {
    // 年数を取得
    const d = new Date();
    this.now = d.getFullYear();
  }
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  background-color: #35a581;
  font-weight: bold;
  color: #fff;
}
</style>
