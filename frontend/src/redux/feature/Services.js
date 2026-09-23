
import { indexslice } from ".";

export const Service = indexslice.injectEndpoints({
  endpoints: (builder) => ({
    Service: builder.query({
      query: () => ({
        url: "/Services/get-services",
        method: "Get",
      }),
    }),
  }),
});
 export const {useServiceQuery}= Service;