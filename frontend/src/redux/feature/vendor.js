import { indexslice } from ".";

export const Vendor = indexslice.injectEndpoints({
  endpoints: (builder) => ({
    VendorGet: builder.query({
      query: () => ({
        url: "/vendor/get-vendor",
        method: "Get",
      }),
    }),
    VendorUpdate: builder.mutation({
      query: (data) => ({
        url: "/vendor/update-vendor/",
        method: "Patch",
        body:data,
      }),
    }),
  }),
});
export const { useVendorGetQuery,useVendorUpdateMutation} = Vendor;
