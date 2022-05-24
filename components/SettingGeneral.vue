<template>
  <div class="setting_general">
    <a href="#" @click.prevent="isShow = !isShow" :class="{ 'is-active': isShow }" class="setting_general-header">
      全体詳細設定
    </a>
    <ul v-show="isShow" class="setting_general-list">
      <li v-for="(label, index) in settingLabel" :key="index">
        <SettingGeneralItem :label="label" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
//@ts-ignore
import { SETTING_GENERAL_LABEL } from '@/constants/SETTING_GENERAL';

@Component
export default class SettingGeneral extends Vue {
  isShow: Boolean = false;

  get settingLabel() {
    return SETTING_GENERAL_LABEL;
  }
}
</script>

<style lang="scss" scoped>
.setting_general {
  .setting_general-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 30px;
    border-top: 1px solid #aaa;
    font-size: 20px;
    font-weight: bold;
    &::after {
      content: '';
      display: block;
      width: 15px;
      height: 10px;
      margin-right: 8px;
      background-image: url('~assets/img/icon-arrow.svg');
      background-size: 15px 15px;
      background-position: 0 -5px;
      background-repeat: no-repeat;
    }
    &.is-active {
      &::after {
        transform: rotateZ(180deg);
      }
    }
  }
}
</style>