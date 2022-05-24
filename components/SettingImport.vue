<template>
  <div class="setting_import">
    <div class="setting_import-header">住所録読み込み</div>
    <div class="setting_import-body">
      <label for="import_file" class="setting_import-button"
        >CSV Import<input id="import_file" type="file" @change="changeFile($event)"
      /></label>
      <div class="setting_import-filename" v-show="file.name">
        <span class="setting_import-filename-text">{{ file.name }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
//@ts-ignore
import { SETTING_IMPUT_VALIDATE } from '@/constants/SETTING_IMPUT_VALIDATE';
//@ts-ignore
import { IMPORT_DATA_CATEGORY } from '@/constants/IMPORT_DATA';

interface OBJ_TMP_FOR_CATEGORY_DATA {
  [key: string]: string;
}

@Component
export default class SettingImport extends Vue {
  file: Object = {};
  arCardRawData: String[] = [];
  arCardData: {}[] = [];
  arFromData: {}[] = [];
  allowFileType: String[] = this.allowMimeType;
  allowFileExtension: String[] = Object.keys(SETTING_IMPUT_VALIDATE.mimeType);
  error: String = '';

  get importDataCategory() {
    return IMPORT_DATA_CATEGORY;
  }

  get allowMimeType() {
    const objAllowType = SETTING_IMPUT_VALIDATE.mimeType;
    let mimeTypes: string[] = [];
    for (let i = 0; i < Object.keys(objAllowType).length; i++) {
      let target = Object.values(objAllowType)[i];
      if (typeof target === 'string') {
        mimeTypes.push(target);
      } else if (target instanceof Array) {
        mimeTypes = mimeTypes.concat(target);
      }
    }
    return mimeTypes;
  }

  get errorMessageType() {
    return this.allowFileExtension.join('/') + ' ファイルのみアップロード可能です';
  }

  async changeFile(e: any) {
    const files = e.target.files || e.dataTransfer.files;
    if (this.validation(files[0])) {
      this.setIsCardLoadingToStore(true);
      this.resetData();
      this.file = files[0];
      await this.setReadFileAsCardRawData(this.file);
      this.trimCardData();
      this.setCardDataToStore();
      this.setFromDataToStore();
      setTimeout(() => {
        this.setIsCardLoadingToStore(false);
      }, 5000);
    } else {
      this.file = this.file || {};
    }
  }

  resetData() {
    this.file = {};
    this.arCardRawData = [];
    this.arCardData = [];
    this.arFromData = [];
  }

  validation(file: any) {
    if (!this.isAllowFileType(file.type)) {
      this.error = this.errorMessageType;
      alert(this.error);
      return false;
    }

    this.error = '';
    return true;
  }

  isAllowFileType(type: string) {
    return this.allowFileType.indexOf(type) !== -1;
  }

  setReadFileAsCardRawData(file: any) {
    return new Promise<void>((resolve, reject) => {
      const self = this;
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        const arCardData = (<string>reader.result).split('\n');
        arCardData.shift();
        self.arCardRawData = arCardData;
        resolve();
      };
      reader.onerror = () => {
        alert('読み込みに失敗しました。再度読み込みを行ってください');
        reject();
      };
    });
  }

  setCardDataToStore() {
    const arCardData = [...this.arCardData];
    this.$store.commit('setCardData', arCardData);
  }

  setFromDataToStore() {
    const arFromData = [...this.arFromData];
    this.$store.commit('setFromData', arFromData);
  }

  setIsCardLoadingToStore(state: Boolean) {
    this.$store.commit('setIsCardLoading', state);
  }

  trimCardData() {
    const self = this;
    this.arCardRawData.forEach((cardData, index) => {
      const arCategoryData = cardData.split(',');
      let objTmp: OBJ_TMP_FOR_CATEGORY_DATA = {};
      arCategoryData.forEach((categoryData, order) => {
        objTmp[self.importDataCategory[order]] = categoryData;
      });
      index === 0 ? self.arFromData.push(objTmp) : self.arCardData.push(objTmp);
    });
  }
}
</script>

<style lang="scss" scoped>
.setting_import {
  padding-right: 30px;
  padding-left: 30px;
  .setting_import-header {
    font-size: 20px;
    font-weight: bold;
  }
  .setting_import-body {
    margin-top: 20px;
  }
  .setting_import-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    background-color: #35a581;
    border-radius: 8px;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    > input {
      display: none;
    }
  }
  .setting_import-filename {
    display: flex;
    align-items: center;
    margin-top: 20px;
    font-weight: bold;
    .setting_import-filename-text {
      line-height: 1.4;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &::before {
      content: '';
      flex-shrink: 0;
      display: block;
      width: 30px;
      height: 30px;
      margin-right: 8px;
      background-image: url('~assets/img/icon-file.svg');
      background-size: 30px 30px;
      background-repeat: no-repeat;
    }
  }
}
</style>