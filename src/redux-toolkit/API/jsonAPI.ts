import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://jsonplaceholder.typicode.com/";
export const placeholderAPI = createApi({
  reducerPath: "Placeholder",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query<object, string>({
        query: () => `users/`,
    }),
    getPosts: builder.query({
        query: () => `posts/`,
    })
  }),
});
export const{ useGetUsersQuery, useGetPostsQuery } = placeholderAPI;