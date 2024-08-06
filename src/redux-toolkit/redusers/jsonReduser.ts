import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  posts: [],
  isLoading: false,
  error: {
    isError: false,
    message: "",
  },
};
const placeholderSlice = createSlice({
  name: "json",
  initialState,
  reducers: {
    getUsers: (state) => {
      state.isLoading = true;
    },
    getUsersSucces: (state, action: PayloadAction<[]>) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    getUsersFailure: (state, action: PayloadAction<Error>) => {
      state.isLoading = false;
      state.error.isError = true;
      state.error.message = action.payload.message;
    },
    getPosts: (state) => {
      state.isLoading = true;
    },
    getPostsSucces: (state, action: PayloadAction<[]>) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    getPostsFailure: (state, action: PayloadAction<Error>) => {
      state.isLoading = false;
      state.error.isError = true;
      state.error.message = action.payload.message;
    },
  },
});

export const { getUsers, getPosts } = placeholderSlice.actions;
export default placeholderSlice.reducer;
