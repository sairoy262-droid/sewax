import { indexslice } from ".";
export const register = indexslice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/user/Register-user",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/user/login-user",
        method: "Post",
        body: data,
      }),
    }),
  }),
});
export const { useRegisterMutation, useLoginMutation } = register;
