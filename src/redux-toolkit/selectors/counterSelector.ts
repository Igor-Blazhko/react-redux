import { RootState } from "../store/store";

export const getCounter = (state: RootState) => state.counter.value;
export const getPosts = (state: RootState) => state.posts.posts;