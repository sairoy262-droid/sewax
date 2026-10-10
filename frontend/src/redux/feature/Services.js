import { indexslice } from ".";

export const Service = indexslice.injectEndpoints({
  endpoints: (builder) => ({
    ServiceGet: builder.query({
      query: () => ({
        url: "/services/get-services",
        method: "GET",
      }),
    }),
  }),
});

export const { useServiceGetQuery } = Service;
