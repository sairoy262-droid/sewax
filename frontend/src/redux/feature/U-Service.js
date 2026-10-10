import { indexslice } from ".";

export const UserService = indexslice.injectEndpoints({
  endpoints: (builder) => ({
    UserServiceGet: builder.query({
      query: () => ({
        url: "/Servicepost/get-Servicepost",
        method: "Get",
      }),
    }),
    AddService: builder.mutation({
      query: (Sdata) => ({
        url: "/ServicePost/post-Servicepost",
        method: "Post",
        body: Sdata,
      }),
    }),
  }),
});
export const { useUserServiceGetQuery, useAddServiceMutation } = UserService;
