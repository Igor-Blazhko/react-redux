import { makeAutoObservable } from "mobx";

class Counter {
  value = 0;
  constructor() {
    makeAutoObservable(this);
  }
  increment() {
    this.value += 1;
  }

  decrement() {
    this.value -= 1;
  }
  get doubleValue() {
    return this.value * 2;
  }
}

const counterStore = new Counter();
export default counterStore;
