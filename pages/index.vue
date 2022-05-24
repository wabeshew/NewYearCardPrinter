<template>
  <div class="cardprinter">
    <div class="cardprinter-setting">
      <div class="setting">
        <div class="setting-import">
          <SettingImport />
        </div>
        <div class="setting-detail">
          <SettingGeneral />
        </div>
      </div>
    </div>
    <div :class="{ 'is-load': isCardLoading }" class="cardprinter-item">
      <div v-show="isCardLoading" class="cardprinter-loading"><Loading /></div>
      <transition name="fade" appear mode="out-in">
        <CardList v-if="!isCardLoading" />
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Index extends Vue {
  get isCardLoading() {
    return this.$store.getters.isCardLoading;
  }
}
</script>

<style lang="scss" scoped>
.cardprinter {
  position: relative;
  display: flex;
  justify-content: flex-end;
  height: 100%;
  .cardprinter-setting {
    height: 100%;
    margin-right: auto;
  }
  .cardprinter-item {
    height: 100%;
    &.is-load {
      width: 100%;
    }
  }
  .cardprinter-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
}
.setting {
  width: 360px;
  padding-top: 40px;
  border: 1px solid #aaa;
  border-radius: 20px;
  box-sizing: border-box;
  .setting-detail {
    margin-top: 40px;
  }
}

.fade-enter-active,
.fade-leave-active {
  /* アニメーションの時間、イージングなどを設定 */
  transition: opacity 500ms ease-out 200ms;
}

/* フェードイン */
.fade-enter {
  /* フェードインの初期状態 */
  opacity: 0;
}

.fade-enter-to {
  /* フェードインの終了状態 */
  opacity: 1;
}

/* フェードアウト */
.fade-leave {
  /* フェードアウトの初期状態 */
  opacity: 1;
}

.fade-leave-to {
  /* フェードアウトの終了状態 */
  opacity: 0;
}
@media print {
  body {
    width: 100mm; // needed for Chrome.
    height: 148mm; // needed for Chrome.
    background: none;
  }
  .cardprinter {
    .cardprinter-setting {
      display: none;
    }
  }
}

@page {
  size: 100mm 148mm;
  margin: 1px; // disable the page header and footer for Chrome.
  padding: 0; // disable the page header and footer for Chrome.
}
</style>
