import { create } from "zustand";

const useStore = create((set) => ({
    count: 0,
    nameStore: 'Zustand',
  increment: () => set((state) => ({ ...state, count: state.count + 1 })),
  decrement: () => set((state) => ({ ...state, count: state.count - 1 })),
}));

export default useStore;