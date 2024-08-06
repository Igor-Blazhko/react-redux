import { create } from "zustand";

interface User{
  id: number,
  name: string,
}
interface Store {
  count: number;
  nameStore: string;
  users: User[];
  increment: () => void;
  decrement: () => void;
  setUsers: () => Promise<void>;
}
const useStore= create<Store>((set) => ({
  count: 0,
  nameStore: "Zustand",
  users: [],
  increment: () => set((state) => ({ ...state, count: state.count + 1 })),
  decrement: () => set((state) => ({ ...state, count: state.count - 1 })),
  setUsers: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) return;
    const users = await response.json();
    set({
      users,
    });
  },
}));

export default useStore;