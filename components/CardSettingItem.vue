<template>
  <div class="card_setting">
    <div class="card_setting-header">{{ label }}</div>
    <ul class="card_setting-body">
      <li>
        <div class="card_setting_item">
          <div class="card_setting_item-header">文字サイズ</div>
          <div class="card_setting_item-body">
            <div class="card_setting_item-body-input">
              <div class="setting_field">
                <input
                  type="text"
                  @input="updateValue"
                  :name="inputNameFontSize"
                  maxlength="3"
                  class="setting_field-input"
                />
                <div class="setting_field-footer">pt</div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="card_setting_item">
          <div class="card_setting_item-header">位置</div>
          <div class="card_setting_item-body">
            <div class="card_setting_item-body-input">
              <div class="setting_field">
                <div class="setting_field-header">縦</div>
                <input
                  type="text"
                  @input="updateValue"
                  :name="inputNamePositionVertical"
                  maxlength="3"
                  class="setting_field-input"
                />
                <div class="setting_field-footer">mm</div>
              </div>
            </div>
            <div class="card_setting_item-body-input">
              <div class="setting_field">
                <div class="setting_field-header">横</div>
                <input
                  type="text"
                  @input="updateValue"
                  :name="inputNamePositionHorizon"
                  maxlength="3"
                  class="setting_field-input"
                />
                <div class="setting_field-footer">mm</div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
//@ts-ignore
import { SETTING_DETAIL_INFO } from '@/constants/SETTING_DETAIL';

@Component
export default class CardSettingItem extends Vue {
  objSetting: {} = {};
  objSettingInner: {} = {};

  @Prop({ type: String, required: true })
  private label!: string;

  get inputNameFontSize() {
    return 'fontsize';
  }

  get inputNamePositionVertical() {
    return 'vertical';
  }

  get inputNamePositionHorizon() {
    return 'horizon';
  }

  updateValue(e: any) {
    e.target.value = e.target.value
      .replace(/^0+/, '')
      .replace(/[^\-0-9]+/g, '')
      .replace(/(.)\-+/g, '$1');
    const target = e.target;
    Vue.set(this.objSettingInner, target.getAttribute('name'), target.value);
    Vue.set(this.objSetting, SETTING_DETAIL_INFO[this.label], this.objSettingInner);

    this.$emit('updateSetting', this.objSetting);
  }
}
</script>

<style lang="scss" scoped>
.card_setting {
  .card_setting-header {
    font-size: 16px;
    font-weight: bold;
  }
  .card_setting-body {
    display: flex;
    margin-top: 10px;
    > li {
      &:not(:first-child) {
        margin-left: 30px;
      }
    }
  }
}
.card_setting_item {
  .card_setting_item-header {
    font-size: 14px;
    font-weight: bold;
  }
  .card_setting_item-body {
    display: flex;
    align-items: center;
    margin-top: 10px;
    .card_setting_item-body-input {
      &:not(:first-child) {
        margin-left: 10px;
      }
    }
  }
}

.setting_field {
  display: flex;
  align-items: center;
  font-size: 14px;
  .setting_field-header {
    margin-right: 5px;
  }
  .setting_field-input {
    width: 40px;
    height: 20px;
    margin-right: 5px;
    padding: 0 5px;
    border: 1px solid #aaa;
    border-radius: 5px;
  }
}
</style>