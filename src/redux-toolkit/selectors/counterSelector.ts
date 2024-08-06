import { RootState } from "../store/store";

export const getCounter = (state: RootState) => state.counter.value;
export const getPosts = (state: RootState) => state.posts.posts;
export const getUsers = (state: RootState) => state.json.users;
export const getPostsByUser = (state: RootState) => state.json.posts;