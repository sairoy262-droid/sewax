
import { indexslice } from ".";

export const Service = indexslice.injectEndpoints({
  endpoints: (builder) => ({
    ServiceGet: builder.query({
      query: () => ({
        url: "/Services/get-services",
        method: "Get",
      }),
    }),
  }),
});
 export const {useServiceGetQuery}= Service;