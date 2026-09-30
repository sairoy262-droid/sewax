import { indexslice } from ".";

export const UserService = indexslice.injectEndpoints({
  endpoints: (builder) => ({
    UserServiceGet: builder.query({
      query: () => ({
        url: "/Servicepost/get-Servicepost",
        method: "Get",
      }),
    }),
  }),
});
 export const {useUserServiceGetQuery}= UserService;