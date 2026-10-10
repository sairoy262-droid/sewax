import { indexslice } from ".";

export const VendorService = indexslice.injectEndpoints({
  endpoints: (builder) => ({
    VendorServiceGet: builder.query({
      query: () => ({
        url: "vendor/service/get",
        method: "Get",
      }),
    }),
    AddVendorService: builder.mutation({
      query: (Vdata) => ({
        url: "vendor/service/get-vendor",
        method: "Post",
        body: Vdata,
      }),
    }),
  }),
});
export const { useVendorServiceGetQuery,useAddVendorServiceMutation } = VendorService;
