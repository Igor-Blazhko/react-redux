import { createEvent, createStore } from "effector";
export const increment = createEvent();
export const decrement = createEvent();
const counter = createStore(0);

counter
    .on(increment, state => state + 1)
    .on(decrement, state => state - 1);

export default counter;