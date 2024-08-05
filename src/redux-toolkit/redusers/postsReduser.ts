import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";


export const fetchUsers = createAsyncThunk("users", async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        return await response.json();
});

export interface Post{
  id: number,
  name: string,
}

const initialState = {
  posts: [],
};
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<[]>) => {
      state.posts = action.payload;
    });
  },
});
export default postsSlice.reducer;