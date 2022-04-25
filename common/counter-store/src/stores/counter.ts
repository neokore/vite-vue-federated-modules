import { defineStore } from 'pinia';

export const useCounter = defineStore('counter', {
  state: () => ({
    counter: 0
  }),
  getters: {
    hasItems: (state) => state.counter > 0
  },
  actions: {
    incrementCounter() {
      this.counter++;
    },
    decrementCounter() {
      this.counter--;
    },
    resetCounter() {
      this.counter = 0;
    }
  }
});
