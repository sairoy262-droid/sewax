import { indexslice } from ".";

export const Vendor = indexslice.injectEndpoints({
  endpoints: (builder) => ({
    VendorGet: builder.query({
      query: () => ({
        url: "/vendor/get-vendor",
        method: "GET",
      }),
    }),

    VendorUpdate: builder.mutation({
      query: (data) => ({
        url: "/vendor/update-vendor",
        method: "PATCH",
        body: data,
      }),
    }),

    AddVendor: builder.mutation({
      query: (data) => ({
        url: "/vendor/post-vendor",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useVendorGetQuery,
  useVendorUpdateMutation,
  useAddVendorMutation,
} = Vendor;
