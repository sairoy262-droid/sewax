import React, { useState } from "react";

import {
  Loader2,
  AlertCircle,
  ArrowRight,
  MapPin,
  Phone,
  BriefcaseBusiness,
  UserRound,
} from "lucide-react";
import { useVendorGetQuery } from "../redux/feature/vendor";
import ModalOpen from "./Modal";

const Vendor = () => {
  const { data, isLoading, isError, error } = useVendorGetQuery();
  const [modalopen, setModalOpen] = useState(false);
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0B0B0F]">
        <div className="flex items-center gap-3 text-[#F5C542]">
          <Loader2 className="animate-spin" size={28} />
          <span className="text-lg">Loading vendors...</span>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <>
        <div className="flex min-h-screen items-center justify-center bg-[#0B0B0F] px-6">
          <div className="w-full max-w-md rounded-2xl border border-red-500/20 bg-red-500/10 p-8 text-center">
            <AlertCircle className="mx-auto mb-4 text-red-400" size={40} />

            <h2 className="text-xl font-semibold text-white">
              Unable to load vendors
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              {error?.data?.message || "Something went wrong"}
            </p>
          </div>
        </div>
      </>
    );
  }

  const vendors = Array.isArray(data)
    ? data
    : data?.vendors || data?.result || [];

  return (
    <>
      <div className="min-h-screen bg-[#0B0B0F] px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="relative mb-12">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-10 bg-[#F5C542]" />

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F5C542]">
                SEWAX VENDORS
              </p>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Find trusted
              <span className="text-[#F5C542]"> vendors</span>
            </h1>

            <div className="absolute right-0 top-0">
              <button
                onClick={() => setModalOpen(true)}
                className="rounded-xl border-2 border-[#F5C542] bg-[#F5C542] px-5 py-3 font-semibold text-black shadow-lg transition hover:bg-[#d9ad2f]"
              >
                + Add Vendor
              </button>
            </div>

            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
              Discover trusted vendors available on SewaX. Explore their
              services, locations, contact information, and available expertise.
            </p>
          </div>

          {vendors.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-14 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5C542]/10">
                <UserRound size={30} className="text-[#F5C542]" />
              </div>

              <h2 className="text-2xl font-semibold text-white">
                No vendors found
              </h2>

              <p className="mx-auto mt-3 max-w-md text-gray-400">
                There are currently no vendors available. Please check again
                later.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {vendors.map((vendor) => (
                <div
                  key={vendor.id}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111116] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F5C542]/40 hover:shadow-2xl hover:shadow-[#F5C542]/5"
                >
                  <div className="absolute left-0 top-0 h-1 w-0 bg-[#F5C542] transition-all duration-300 group-hover:w-full" />

                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5C542]/10">
                      <UserRound size={27} className="text-[#F5C542]" />
                    </div>

                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                      Available
                    </span>
                  </div>

                  <h2 className="mt-6 line-clamp-1 text-2xl font-bold text-white transition-colors group-hover:text-[#F5C542]">
                    {vendor.name || vendor.username || "Unnamed Vendor"}
                  </h2>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-400">
                    {vendor.description ||
                      "Professional vendor providing trusted services through SewaX."}
                  </p>

                  <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
                    {(vendor.service ||
                      vendor.service_name ||
                      vendor.serviceName) && (
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <BriefcaseBusiness
                          size={17}
                          className="shrink-0 text-[#F5C542]"
                        />

                        <span className="line-clamp-1">
                          {vendor.service ||
                            vendor.service_name ||
                            vendor.serviceName}
                        </span>
                      </div>
                    )}

                    {vendor.address && (
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <MapPin size={17} className="shrink-0 text-[#F5C542]" />

                        <span className="line-clamp-1">{vendor.address}</span>
                      </div>
                    )}

                    {(vendor.number || vendor.phone || vendor.phoneno) && (
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <Phone size={17} className="shrink-0 text-[#F5C542]" />

                        <span>
                          {vendor.number || vendor.phone || vendor.phoneno}
                        </span>
                      </div>
                    )}
                  </div>

                  <button className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-[#F5C542] px-5 py-3 text-sm font-bold text-black transition-all duration-300 hover:bg-[#ffd45c] group-hover:gap-3">
                    View Vendor
                    <ArrowRight size={17} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {modalopen && (
        <div>
          <ModalOpen onClose={() => setModalOpen(false)}  />
        </div>
      )}
    </>
  );
};

export default Vendor;
