import { combineReducers, createStore } from "@reduxjs/toolkit";

const enum ActionTypes{
    increment = 'increment',
    decrement = 'decrement',
}
interface Action{
    type: ActionTypes,
    payload: number,
}
const initialCounter = {
    value: 0,
};
const counter = (state = initialCounter, action: Action) => {
    switch (action.type) {
        case ActionTypes.increment:
            return { ...state, value: state.value + action.payload };
        case ActionTypes.decrement:
            return { ...state, value: state.value - action.payload };
        default:
            return state;
    }
};
const actions = {
  increment: () => ({
    type: ActionTypes.increment,
    payload: 1,
  }),
  decrement: () => ({
    type: ActionTypes.decrement,
    payload: 1,
  }),
};
const redusers = combineReducers({ counter });
const store = createStore(redusers);

export const { increment, decrement } = actions;
export default store;