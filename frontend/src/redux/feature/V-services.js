import { indexslice } from ".";

export const VendorService = indexslice.injectEndpoints({
  endpoints: (builder) => ({
    VendorServiceGet: builder.query({
      query: () => ({
        url: "vendor/service/get",
        method: "Get",
      }),
    }),
  }),
});
export const { useVendorServiceGetQuery } = VendorService;
