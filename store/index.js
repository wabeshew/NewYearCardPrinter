import Vue from 'vue';

export const state = () => ({
  cardData: [],
  fromData: [],
  generalSetting: {},
  isCardLoading: false,
});

export const getters = {
  cardData(state) {
    return state.cardData;
  },
  fromData(state) {
    return state.fromData;
  },
  generalSetting(state) {
    return state.generalSetting;
  },
  isCardLoading(state) {
    return state.isCardLoading;
  },
};

export const mutations = {
  setCardData(state, payload) {
    console.log('--- setCardData ---');
    state.cardData = Object.assign([], state.cardData, payload);
  },
  setFromData(state, payload) {
    console.log('--- setFromData ---');
    state.fromData = Object.assign([], state.fromData, payload);
  },
  setGeneralSetting(state, payload) {
    console.log('--- setGeneralSetting ---');
    Vue.set(state.generalSetting, payload.label, { ...state.generalSetting[payload.label], ...payload.value });
  },
  setIsCardLoading(state, payload) {
    console.log('--- setIsCardLoading ---');
    state.isCardLoading = payload;
  },
};
