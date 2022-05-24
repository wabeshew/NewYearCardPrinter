<template>
  <ul class="l-card_setting">
    <li v-for="(label, index) in settingLabel" :key="index">
      <CardSettingItem @updateSetting="objLocalSettingItem = $event" :label="label" />
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'nuxt-property-decorator';
//@ts-ignore
import { SETTING_DETAIL_LABEL } from '@/constants/SETTING_DETAIL';

@Component
export default class CardSetting extends Vue {
  objLocalSetting: {} = {};
  objLocalSettingItem: {} = {};

  @Watch('objLocalSettingItem', { deep: true })
  updateSetting() {
    this.objLocalSetting = Object.assign(this.objLocalSetting, this.objLocalSettingItem);
    this.$emit('updateSetting', this.objLocalSetting);
  }

  get settingLabel() {
    return SETTING_DETAIL_LABEL;
  }
}
</script>

<style lang="scss" scoped>
.l-card_setting {
  padding: 28px 30px;
  border: 1px solid #aaa;
  border-radius: 20px;
  > li {
    &:not(:first-child) {
      margin-top: 30px;
    }
  }
}
</style>