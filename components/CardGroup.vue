<template>
  <div class="card_group">
    <div class="card_group-card">
      <Card :objLocalSetting="localSetting" :data="data" />
    </div>
    <div class="card_group-setting">
      <CardSetting @updateSetting="setLocalSetting($event)" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'nuxt-property-decorator';

@Component
export default class CardGroup extends Vue {
  objLocalSetting: {} = {};

  @Prop({ type: Object, required: true })
  private data!: {};

  get localSetting() {
    return this.objLocalSetting;
  }

  setLocalSetting(objLocalSetting: {}) {
    this.objLocalSetting = Object.assign({}, this.objLocalSetting, objLocalSetting);
  }
}
</script>

<style lang="scss" scoped>
.card_group {
  display: flex;
  .card_group-setting {
    margin-left: 30px;
  }
}

@media print {
  .card_group {
    .card_group-setting {
      display: none;
    }
  }
}
</style>