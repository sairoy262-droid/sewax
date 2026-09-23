import { indexslice } from ".";

export const UserService = indexslice.injectEndpoints({
  endpoints: (builder) => ({
    ServiceGet: builder.query({
      query: () => ({
        url: "/Servicepost/get-Servicepost",
        method: "Get",
      }),
    }),
  }),
});
 export const {useServiceGetQuery}= UserService;