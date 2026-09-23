import { indexslice } from ".";

export const Vendor = indexslice.injectEndpoints({
  endpoints: (builder) => ({
    VendorGet: builder.query({
      query: () => ({
        url: "/vendor/get-vendor",
        method: "Get",
      }),
    }),
  }),
});
export const { useVendorGetQuery } = Vendor;
