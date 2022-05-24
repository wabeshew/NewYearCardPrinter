<template>
  <div class="setting_general_item">
    <a href="#" @click.prevent="isShow = !isShow" :class="{ 'is-active': isShow }" class="setting_general_item-header">
      {{ label }}
    </a>
    <div v-show="isShow" class="setting_general_item-body">
      <div class="setting_general_item-body-input">
        <div class="setting_general_item-field">
          <div class="setting_general_item-field_header">文字サイズ</div>
          <div class="setting_general_item-field_body">
            <div class="setting_general_item-field_body-item">
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
        <div class="setting_general_item-field">
          <div class="setting_general_item-field_header">位置</div>
          <div class="setting_general_item-field_body">
            <div class="setting_general_item-field_body-item">
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
            <div class="setting_general_item-field_body-item">
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
//@ts-ignore
import { SETTING_GENERAL_INFO } from '@/constants/SETTING_GENERAL';

@Component
export default class SettingGeneralItem extends Vue {
  isShow: Boolean = false;
  file: Object = {};
  arCardRawData: String[] = [];
  arCardData: {}[] = [];
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
    const copyObjSettingInner = Object.assign({}, this.objSettingInner);
    Vue.set(copyObjSettingInner, target.getAttribute('name'), target.value);
    this.$store.commit('setGeneralSetting', {
      label: SETTING_GENERAL_INFO[this.label],
      value: copyObjSettingInner,
    });
  }
}
</script>

<style lang="scss" scoped>
.setting_general_item {
  .setting_general_item-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 30px 20px 50px;
    border-top: 1px solid #aaa;
    font-size: 18px;
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
  .setting_general_item-body {
    padding: 30px 50px;
    border-top: 1px solid #aaa;
  }
  .setting_general_item-field {
    &:not(:first-child) {
      margin-top: 20px;
    }
  }
  .setting_general_item-field_header {
    font-size: 16px;
    font-weight: bold;
  }
  .setting_general_item-field_body {
    display: flex;
    align-items: center;
    margin-top: 10px;
    .setting_general_item-field_body-item {
      &:not(:first-child) {
        margin-left: 20px;
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