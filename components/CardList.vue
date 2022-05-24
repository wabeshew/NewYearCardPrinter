<template>
  <ul class="l-card_group">
    <li v-for="(data, index) in arCardData" :key="index">
      <CardGroup :data="data" />
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class CardList extends Vue {
  get arCardData() {
    return this.$store.getters.cardData;
  }

  mounted() {
    console.log('CardList mounted!!');
  }

  created() {
    console.log('CardList created!!');
  }

  beforeUpdate() {
    console.log('CardList beforeUpdate!!');
  }
}
</script>

<style lang="scss" scoped>
.l-card_group {
  > li {
    &:not(:first-child) {
      margin-top: 50px;
    }
  }
}
</style>