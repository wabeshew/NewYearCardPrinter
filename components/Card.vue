<template>
  <div class="card">
    <div class="card-tozip" :style="cardToZip">
      <div v-for="(number, index) in trimAddressPostalCode" :key="index" class="card-tozip-number">{{ number }}</div>
    </div>
    <div class="card-toaddress" :style="cardToAddress">
      <div v-if="address01" class="card-toaddress-column">
        {{ address01 }}
      </div>
      <div v-if="address02" class="card-toaddress-column">
        {{ address02 }}
      </div>
      <div v-if="address03" class="card-toaddress-column">
        {{ address03 }}
      </div>
    </div>
    <div class="card-toname" :style="cardToName">
      <div v-if="lastName" class="card-toname-column">
        <div class="card_toname_column">
          <div class="card_toname_column-firstname">{{ firstName }}</div>
          <div class="card_toname_column-lastname">{{ lastName }}</div>
          <div class="card_toname_column-honorific">様</div>
        </div>
      </div>
      <div v-if="spouseLastName" class="card-toname-column">
        <div class="card_toname_column is-onlylastname">
          <div class="card_toname_column-firstname">{{ firstName }}</div>
          <div class="card_toname_column-lastname">{{ spouseLastName }}</div>
          <div class="card_toname_column-honorific">様</div>
        </div>
      </div>
      <div v-if="familyLastName01" class="card-toname-column">
        <div class="card_toname_column is-onlylastname">
          <div class="card_toname_column-firstname">{{ firstName }}</div>
          <div class="card_toname_column-lastname">{{ familyLastName01 }}</div>
          <div class="card_toname_column-honorific">様</div>
        </div>
      </div>
      <div v-if="familyLastName02" class="card-toname-column">
        <div class="card_toname_column is-onlylastname">
          <div class="card_toname_column-firstname">{{ firstName }}</div>
          <div class="card_toname_column-lastname">{{ familyLastName02 }}</div>
          <div class="card_toname_column-honorific">様</div>
        </div>
      </div>
      <div v-if="familyLastName03" class="card-toname-column">
        <div class="card_toname_column is-onlylastname">
          <div class="card_toname_column-firstname">{{ firstName }}</div>
          <div class="card_toname_column-lastname">{{ familyLastName03 }}</div>
          <div class="card_toname_column-honorific">様</div>
        </div>
      </div>
    </div>
    <div class="card-fromzip" :style="cardFromZip">
      <div v-for="(number, index) in trimPostalCodeFrom" :key="index" class="card-fromzip-number">{{ number }}</div>
    </div>
    <div class="card-fromaddress" :style="cardFromAddress">
      <div v-if="address01From" class="card-fromaddress-column">{{ address01From }}</div>
      <div v-if="address02From" class="card-fromaddress-column">{{ address02From }}</div>
      <div v-if="address03From" class="card-fromaddress-column">{{ address03From }}</div>
    </div>
    <div class="card-fromname" :style="cardFromName">
      <div class="card-fromname-column">
        <div v-if="lastNameFrom" class="card_fromname_column">
          <div class="card_fromname_column-firstname">{{ firstNameFrom }}</div>
          <div class="card_fromname_column-lastname">{{ lastNameFrom }}</div>
        </div>
      </div>
      <div v-if="spouseLastNameFrom" class="card-fromname-column">
        <div class="card_fromname_column is-onlylastname">
          <div class="card_fromname_column-firstname">{{ firstNameFrom }}</div>
          <div class="card_fromname_column-lastname">{{ spouseLastNameFrom }}</div>
        </div>
      </div>
      <div v-if="familyLastName01From" class="card-fromname-column">
        <div class="card_fromname_column is-onlylastname">
          <div class="card_fromname_column-firstname">{{ firstNameFrom }}</div>
          <div class="card_fromname_column-lastname">{{ familyLastName01From }}</div>
        </div>
      </div>
      <div v-if="familyLastName02From" class="card-fromname-column">
        <div class="card_fromname_column is-onlylastname">
          <div class="card_fromname_column-firstname">{{ firstNameFrom }}</div>
          <div class="card_fromname_column-lastname">{{ familyLastName02From }}</div>
        </div>
      </div>
      <div v-if="familyLastName03From" class="card-fromname-column">
        <div class="card_fromname_column is-onlylastname">
          <div class="card_fromname_column-firstname">{{ firstNameFrom }}</div>
          <div class="card_fromname_column-lastname">{{ familyLastName03From }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'nuxt-property-decorator';
//@ts-ignore
import { IMPORT_DATA_LABEL } from '@/constants/IMPORT_DATA';

interface IMPORT_DATA {
  [key: string]: string;
}

interface GENERAL_SETTING {
  [key: string]: {
    [key: string]: string;
  };
}

interface LOCAL_SETTING {
  [key: string]: {
    [key: string]: string;
  };
}

@Component
export default class Card extends Vue {
  @Prop({ type: Object, required: true })
  private data!: IMPORT_DATA;
  @Prop({ type: Object, required: true })
  private objLocalSetting!: LOCAL_SETTING;

  firstName: String = this.data[this.importDataLabel.FIRSTNAME];
  lastName: String = this.data[this.importDataLabel.LASTNAME];
  spouseLastName: String = this.data[this.importDataLabel.SPOUSE_LASTNAME];
  familyLastName01: String = this.data[this.importDataLabel.FAMILY_LASTNAME_01];
  familyLastName02: String = this.data[this.importDataLabel.FAMILY_LASTNAME_02];
  familyLastName03: String = this.data[this.importDataLabel.FAMILY_LASTNAME_03];
  postCode: String = this.data[this.importDataLabel.POSTCODE];
  address01: String = this.data[this.importDataLabel.ADDRESS_01];
  address02: String = this.data[this.importDataLabel.ADDRESS_02];
  address03: String = this.data[this.importDataLabel.ADDRESS_03];
  mourningFlg: String = this.data[this.importDataLabel.MOURNING_FLG];

  dataFrom: IMPORT_DATA = this.$store.getters.fromData[0];
  firstNameFrom: String = this.dataFrom[this.importDataLabel.FIRSTNAME];
  lastNameFrom: String = this.dataFrom[this.importDataLabel.LASTNAME];
  spouseLastNameFrom: String = this.dataFrom[this.importDataLabel.SPOUSE_LASTNAME];
  familyLastName01From: String = this.dataFrom[this.importDataLabel.FAMILY_LASTNAME_01];
  familyLastName02From: String = this.dataFrom[this.importDataLabel.FAMILY_LASTNAME_02];
  familyLastName03From: String = this.dataFrom[this.importDataLabel.FAMILY_LASTNAME_03];
  postCodeFrom: String = this.dataFrom[this.importDataLabel.POSTCODE];
  address01From: String = this.dataFrom[this.importDataLabel.ADDRESS_01];
  address02From: String = this.dataFrom[this.importDataLabel.ADDRESS_02];
  address03From: String = this.dataFrom[this.importDataLabel.ADDRESS_03];

  generalSetting: GENERAL_SETTING = this.generalSettingFromStore;

  generalSettingCardToZipVertical: string = '0';
  generalSettingCardToZipHorizon: string = '0';
  generalSettingCardToZipFontSize: string = '0';
  generalSettingCardToAddressVertical: string = '0';
  generalSettingCardToAddressHorizon: string = '0';
  generalSettingCardToAddressFontSize: string = '0';
  generalSettingCardToNameVertical: string = '0';
  generalSettingCardToNameHorizon: string = '0';
  generalSettingCardToNameFontSize: string = '0';

  generalSettingCardFromZipVertical: string = '0';
  generalSettingCardFromZipHorizon: string = '0';
  generalSettingCardFromZipFontSize: string = '0';
  generalSettingCardFromAddressVertical: string = '0';
  generalSettingCardFromAddressHorizon: string = '0';
  generalSettingCardFromAddressFontSize: string = '0';
  generalSettingCardFromNameVertical: string = '0';
  generalSettingCardFromNameHorizon: string = '0';
  generalSettingCardFromNameFontSize: string = '0';

  @Watch('data')
  updateData() {
    this.firstName = this.data[this.importDataLabel.FIRSTNAME];
    this.lastName = this.data[this.importDataLabel.LASTNAME];
    this.spouseLastName = this.data[this.importDataLabel.SPOUSE_LASTNAME];
    this.familyLastName01 = this.data[this.importDataLabel.FAMILY_LASTNAME_01];
    this.familyLastName02 = this.data[this.importDataLabel.FAMILY_LASTNAME_02];
    this.familyLastName03 = this.data[this.importDataLabel.FAMILY_LASTNAME_03];
    this.postCode = this.data[this.importDataLabel.POSTCODE];
    this.address01 = this.data[this.importDataLabel.ADDRESS_01];
    this.address02 = this.data[this.importDataLabel.ADDRESS_02];
    this.address03 = this.data[this.importDataLabel.ADDRESS_03];
    this.mourningFlg = this.data[this.importDataLabel.MOURNING_FLG];

    this.dataFrom = this.$store.getters.fromData[0];
    this.firstNameFrom = this.dataFrom[this.importDataLabel.FIRSTNAME];
    this.lastNameFrom = this.dataFrom[this.importDataLabel.LASTNAME];
    this.spouseLastNameFrom = this.dataFrom[this.importDataLabel.SPOUSE_LASTNAME];
    this.familyLastName01From = this.dataFrom[this.importDataLabel.FAMILY_LASTNAME_01];
    this.familyLastName02From = this.dataFrom[this.importDataLabel.FAMILY_LASTNAME_02];
    this.familyLastName03From = this.dataFrom[this.importDataLabel.FAMILY_LASTNAME_03];
    this.postCodeFrom = this.dataFrom[this.importDataLabel.POSTCODE];
    this.address01From = this.dataFrom[this.importDataLabel.ADDRESS_01];
    this.address02From = this.dataFrom[this.importDataLabel.ADDRESS_02];
    this.address03From = this.dataFrom[this.importDataLabel.ADDRESS_03];
  }

  @Watch('objLocalSetting', { deep: true })
  updateLocalSetting() {
    if (this.objLocalSetting.toaddress) {
      this.generalSettingCardToAddressVertical =
        this.objLocalSetting.toaddress.vertical || this.generalSetting.toaddress?.vertical || '0';
      this.generalSettingCardToAddressHorizon =
        this.objLocalSetting.toaddress.horizon || this.generalSetting.toaddress?.horizon || '0';
      this.generalSettingCardToAddressFontSize =
        this.objLocalSetting.toaddress.fontsize || this.generalSetting.toaddress?.fontsize || '0';
    }
    if (this.objLocalSetting.toname) {
      this.generalSettingCardToNameVertical =
        this.objLocalSetting.toname.vertical || this.generalSetting.toname?.vertical || '0';
      this.generalSettingCardToNameHorizon =
        this.objLocalSetting.toname.horizon || this.generalSetting.toname?.horizon || '0';
      this.generalSettingCardToNameFontSize =
        this.objLocalSetting.toname.fontsize || this.generalSetting.toname?.fontsize || '0';
    }
    if (this.objLocalSetting.fromaddress) {
      this.generalSettingCardFromAddressVertical =
        this.objLocalSetting.fromaddress.vertical || this.generalSetting.fromaddress?.vertical || '0';
      this.generalSettingCardFromAddressHorizon =
        this.objLocalSetting.fromaddress.horizon || this.generalSetting.fromaddress?.horizon || '0';
      this.generalSettingCardFromAddressFontSize =
        this.objLocalSetting.fromaddress.fontsize || this.generalSetting.fromaddress?.fontsize || '0';
    }
    if (this.objLocalSetting.fromname) {
      this.generalSettingCardFromNameVertical =
        this.objLocalSetting.fromname.vertical || this.generalSetting.fromname?.vertical || '0';
      this.generalSettingCardFromNameHorizon =
        this.objLocalSetting.fromname.horizon || this.generalSetting.fromname?.horizon || '0';
      this.generalSettingCardFromNameFontSize =
        this.objLocalSetting.fromname.fontsize || this.generalSetting.fromname?.fontsize || '0';
    }
  }

  @Watch('generalSetting', { deep: true })
  updateSetting() {
    console.log('this.objLocalSetting', this.objLocalSetting);

    if (this.generalSetting.tozip) {
      this.generalSettingCardToZipVertical = this.generalSetting.tozip.vertical
        ? this.generalSetting.tozip.vertical
        : '0';
      this.generalSettingCardToZipHorizon = this.generalSetting.tozip.horizon ? this.generalSetting.tozip.horizon : '0';
      this.generalSettingCardToZipFontSize = this.generalSetting.tozip.fontsize
        ? this.generalSetting.tozip.fontsize
        : '0';
    }

    if (this.generalSetting.toname) {
      this.generalSettingCardToNameVertical =
        this.generalSetting.toname.vertical && !this.objLocalSetting.toname?.vertical
          ? this.generalSetting.toname.vertical
          : this.objLocalSetting.toname?.vertical;
      this.generalSettingCardToNameHorizon =
        this.generalSetting.toname.horizon && !this.objLocalSetting.toname?.horizon
          ? this.generalSetting.toname.horizon
          : this.objLocalSetting.toname?.horizon;
      this.generalSettingCardToNameFontSize =
        this.generalSetting.toname.fontsize && !this.objLocalSetting.toname?.fontsize
          ? this.generalSetting.toname.fontsize
          : this.objLocalSetting.toname?.fontsize;
    }

    if (this.generalSetting.toaddress) {
      this.generalSettingCardToNameVertical =
        this.generalSetting.toaddress.vertical && !this.objLocalSetting.toaddress?.vertical
          ? this.generalSetting.toaddress.vertical
          : this.objLocalSetting.toaddress?.vertical;
      this.generalSettingCardToNameHorizon =
        this.generalSetting.toaddress.horizon && !this.objLocalSetting.toaddress?.horizon
          ? this.generalSetting.toaddress.horizon
          : this.objLocalSetting.toaddress?.horizon;
      this.generalSettingCardToNameFontSize =
        this.generalSetting.toaddress.fontsize && !this.objLocalSetting.toaddress?.fontsize
          ? this.generalSetting.toaddress.fontsize
          : this.objLocalSetting.toaddress?.fontsize;
    }

    if (this.generalSetting.fromzip) {
      this.generalSettingCardFromZipVertical = this.generalSetting.fromzip.vertical
        ? this.generalSetting.fromzip.vertical
        : '0';
      this.generalSettingCardFromZipHorizon = this.generalSetting.fromzip.horizon
        ? this.generalSetting.fromzip.horizon
        : '0';
      this.generalSettingCardFromZipFontSize = this.generalSetting.fromzip.fontsize
        ? this.generalSetting.fromzip.fontsize
        : '0';
    }

    if (this.generalSetting.fromname) {
      this.generalSettingCardToNameVertical =
        this.generalSetting.fromname.vertical && !this.objLocalSetting.fromname?.vertical
          ? this.generalSetting.fromname.vertical
          : this.objLocalSetting.fromname?.vertical;
      this.generalSettingCardToNameHorizon =
        this.generalSetting.fromname.horizon && !this.objLocalSetting.fromname?.horizon
          ? this.generalSetting.fromname.horizon
          : this.objLocalSetting.fromname?.horizon;
      this.generalSettingCardToNameFontSize =
        this.generalSetting.fromname.fontsize && !this.objLocalSetting.fromname?.fontsize
          ? this.generalSetting.fromname.fontsize
          : this.objLocalSetting.fromname?.fontsize;
    }

    if (this.generalSetting.fromaddress) {
      this.generalSettingCardToNameVertical =
        this.generalSetting.fromaddress.vertical && !this.objLocalSetting.fromaddress?.vertical
          ? this.generalSetting.fromaddress.vertical
          : this.objLocalSetting.fromaddress?.vertical;
      this.generalSettingCardToNameHorizon =
        this.generalSetting.fromaddress.horizon && !this.objLocalSetting.fromaddress?.horizon
          ? this.generalSetting.fromaddress.horizon
          : this.objLocalSetting.fromaddress?.horizon;
      this.generalSettingCardToNameFontSize =
        this.generalSetting.fromaddress.fontsize && !this.objLocalSetting.fromaddress?.fontsize
          ? this.generalSetting.fromaddress.fontsize
          : this.objLocalSetting.fromaddress?.fontsize;
    }
  }

  get importDataLabel() {
    return IMPORT_DATA_LABEL;
  }

  get trimAddressPostalCode() {
    return this.postCode.replace(/-/g, '').split('');
  }

  get trimPostalCodeFrom() {
    return this.postCodeFrom.replace(/-/g, '').split('');
  }

  get generalSettingFromStore() {
    return this.$store.getters.generalSetting;
  }

  get cardToZip() {
    return {
      top: 'calc(11.6mm + ' + this.generalSettingCardToZipVertical + 'mm)',
      left: 'calc(44.4mm + ' + this.generalSettingCardToZipHorizon + 'mm)',
      fontSize: 'calc(16pt + ' + this.generalSettingCardToZipFontSize + 'pt)',
    };
  }

  get cardToAddress() {
    return {
      top: 'calc(25mm + ' + this.generalSettingCardToAddressVertical + 'mm)',
      right: 'calc(6mm + ' + this.generalSettingCardToAddressHorizon + 'mm)',
      fontSize: 'calc(16pt + ' + this.generalSettingCardToAddressFontSize + 'pt)',
    };
  }

  get cardToName() {
    return {
      top: 'calc(50% + ' + this.generalSettingCardToNameVertical + 'mm)',
      left: 'calc(50% + (5mm + ' + this.generalSettingCardToNameHorizon + 'mm))',
      fontSize: 'calc(24pt + ' + this.generalSettingCardToNameFontSize + 'pt)',
    };
  }

  get cardFromZip() {
    return {
      top: 'calc(122mm + ' + this.generalSettingCardFromZipVertical + 'mm)',
      left: 'calc(5.3mm + ' + this.generalSettingCardFromZipHorizon + 'mm)',
      fontSize: 'calc(12pt + ' + this.generalSettingCardFromZipFontSize + 'pt)',
    };
  }

  get cardFromAddress() {
    return {
      top: 'calc(61mm + ' + this.generalSettingCardFromAddressVertical + 'mm)',
      right: 'calc(65.2mm + ' + this.generalSettingCardFromAddressHorizon + 'mm)',
      fontSize: 'calc(10pt + ' + this.generalSettingCardFromAddressFontSize + 'pt)',
    };
  }

  get cardFromName() {
    return {
      top: 'calc(50% + (33mm + ' + this.generalSettingCardFromNameVertical + 'mm))',
      left: 'calc(50% + (-35mm + ' + this.generalSettingCardFromNameHorizon + 'mm))',
      fontSize: 'calc(12pt + ' + this.generalSettingCardFromNameFontSize + 'pt)',
    };
  }
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 100mm;
  height: 148mm;
  background-image: url('~assets/img/bg-card.png');
  background-size: 100% 100%;
  filter: drop-shadow(1px 2px 10px rgba(51, 51, 51, 0.15));
  .card-tozip {
    position: absolute;
    display: flex;
    transition: all 0.2s ease;
    .card-tozip-number {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 6.1mm;
      height: 9mm;
      &:nth-child(n + 2) {
        &:nth-child(-n + 3) {
          margin-left: 1.1mm;
        }
      }
      &:nth-child(4) {
        margin-left: 1.2mm;
      }
      &:nth-child(n + 5) {
        &:nth-child(-n + 7) {
          margin-left: 0.8mm;
        }
      }
    }
  }
  .card-toaddress {
    position: absolute;
    height: 100mm;
    writing-mode: vertical-rl;
    transition: all 0.2s ease;
    .card-toaddress-column {
      width: 100%;
      height: 100%;
      margin-left: 1mm;
      &:nth-child(n + 2) {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
      }
    }
  }
  .card-toname {
    position: absolute;
    writing-mode: vertical-rl;
    transform: translate(-50%, -50%);
    transition: all 0.2s ease;
    .card-toname-column {
      margin-left: 1mm;
    }
  }
  .card-fromzip {
    position: absolute;
    display: flex;
    transition: all 0.2s ease;
    .card-fromzip-number {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4.1mm;
      height: 7.2mm;
      &:nth-child(4) {
        margin-left: 0.7mm;
      }
    }
  }
  .card-fromaddress {
    position: absolute;
    height: 59mm;
    writing-mode: vertical-rl;
    transition: all 0.2s ease;
    .card-fromaddress-column {
      width: 100%;
      height: 100%;
      margin-left: 1mm;
      &:nth-child(n + 2) {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
      }
    }
  }
  .card-fromname {
    position: absolute;
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
    transform: translate(-50%, -50%);
    transition: all 0.2s ease;
    .card-fromname-column {
      margin-left: 1mm;
    }
  }
}
.card_toname_column {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  .card_toname_column-firstname {
    margin-bottom: 10mm;
  }
  .card_toname_column-lastname {
    margin-bottom: 10mm;
  }
  .card_toname_column-honorific {
    margin-top: auto;
  }
  &.is-onlylastname {
    .card_toname_column-firstname {
      visibility: hidden;
    }
  }
}
.card_fromname_column {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  .card_fromname_column-firstname {
    margin-bottom: 5mm;
  }
  &.is-onlylastname {
    .card_fromname_column-firstname {
      visibility: hidden;
    }
  }
}
</style>