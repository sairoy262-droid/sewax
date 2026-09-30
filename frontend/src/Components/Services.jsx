
import React, { useState } from "react";
import {
  Loader2,
  AlertCircle,
  ArrowRight,
  MapPin,
  Wallet,
  Clock3,
} from "lucide-react";
import { useVendorServiceGetQuery } from "../redux/feature/V-services";
import { useUserServiceGetQuery } from "../redux/feature/U-Service";

const Services = () => {
  const [activeTab, setActiveTab] = useState("vendor");

  const {
    data: vendorData,
    isLoading: vendorLoading,
    isError: vendorError,
    error: vendorErrorData,
  } = useVendorServiceGetQuery();

  const {
    data: userData,
    isLoading: userLoading,
    isError: userError,
    error: userErrorData,
  } = useUserServiceGetQuery();

  const data = activeTab === "vendor" ? vendorData : userData;
  const isLoading = activeTab === "vendor" ? vendorLoading : userLoading;
  const isError = activeTab === "vendor" ? vendorError : userError;
  const error = activeTab === "vendor" ? vendorErrorData : userErrorData;

  const services = Array.isArray(data)
    ? data
    : data?.Data ||
      data?.data ||
      data?.services ||
      data?.result ||
      [];

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0B0B0F]">
        <div className="flex items-center gap-3 text-[#F5C542]">
          <Loader2 className="animate-spin" size={28} />
          <span className="text-lg">Loading services...</span>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0B0B0F] px-6">
        <div className="w-full max-w-md rounded-2xl border border-red-500/20 bg-red-500/10 p-8 text-center">
          <AlertCircle
            className="mx-auto mb-4 text-red-400"
            size={40}
          />

          <h2 className="text-xl font-semibold text-white">
            Unable to load services
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            {error?.data?.message || "Something went wrong"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0B0F] px-6 py-12">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-10">
          <div className="mb-3 flex items-center gap-3">
            <div className="h-px w-10 bg-[#F5C542]" />

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F5C542]">
              SEWAX SERVICES
            </p>
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                Find the right
                <span className="text-[#F5C542]"> service</span>
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
                Discover trusted services available on SewaX. Explore service
                requests, locations, budgets, and current status.
              </p>
            </div>

            {/* ADD SERVICE BUTTON */}
            <button className="rounded-xl border-2 border-[#F5C542] bg-[#F5C542] px-5 py-3 font-semibold text-black shadow-lg transition hover:bg-[#d9ad2f]">
              + Add Services
            </button>
          </div>
        </div>

        {/* POST TYPE BUTTONS */}
        <div className="mb-8 flex w-fit items-center gap-2 rounded-2xl border border-white/10 bg-[#111116] p-2">

          <button
            onClick={() => setActiveTab("vendor")}
            className={`rounded-xl px-6 py-3 text-sm font-semibold transition ${
              activeTab === "vendor"
                ? "bg-[#F5C542] text-black shadow-lg"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            Vendor Posts
          </button>

          <button
            onClick={() => setActiveTab("user")}
            className={`rounded-xl px-6 py-3 text-sm font-semibold transition ${
              activeTab === "user"
                ? "bg-[#F5C542] text-black shadow-lg"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            User Posts
          </button>

        </div>

        {/* CURRENT TYPE */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">
              {activeTab === "vendor" ? "Vendor Posts" : "User Posts"}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {activeTab === "vendor"
                ? "Services posted by vendors"
                : "Services requested by users"}
            </p>
          </div>

          <span className="rounded-full border border-[#F5C542]/20 bg-[#F5C542]/10 px-4 py-2 text-sm font-medium capitalize text-[#F5C542]">
            {services.length} Posts
          </span>
        </div>

        {/* EMPTY STATE */}
        {services.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-14 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5C542]/10">
              <Clock3 size={30} className="text-[#F5C542]" />
            </div>

            <h2 className="text-2xl font-semibold text-white">
              No {activeTab} posts found
            </h2>

            <p className="mx-auto mt-3 max-w-md text-gray-400">
              There are currently no{" "}
              {activeTab === "vendor" ? "vendor" : "user"} service posts
              available.
            </p>
          </div>
        ) : (
          /* SERVICE GRID */
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id || service._id || service.slug}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111116] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F5C542]/40 hover:shadow-2xl hover:shadow-[#F5C542]/5"
              >
                {/* TOP GOLD LINE */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-[#F5C542] transition-all duration-300 group-hover:w-full" />

                {/* TOP */}
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                      service.status === "active" ||
                      service.status === "open"
                        ? "bg-green-500/10 text-green-400"
                        : service.status === "in_progress"
                        ? "bg-blue-500/10 text-blue-400"
                        : service.status === "completed"
                        ? "bg-[#F5C542]/10 text-[#F5C542]"
                        : "bg-red-500/10 text-red-400"
                    }`}
                  >
                    {service.status?.replace("_", " ") || "active"}
                  </span>
                </div>

                {/* TITLE */}
                <h2 className="mt-6 line-clamp-2 text-2xl font-bold text-white transition-colors group-hover:text-[#F5C542]">
                  {service.title || service.name}
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-400">
                  {service.description || "No description available."}
                </p>

                {/* DETAILS */}
                <div className="mt-6 space-y-3 border-t border-white/10 pt-5">

                  {/* LOCATION */}
                  {service.location && (
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <MapPin
                        size={17}
                        className="shrink-0 text-[#F5C542]"
                      />

                      <span className="line-clamp-1">
                        {service.location}
                      </span>
                    </div>
                  )}

                  {/* PRICE / BUDGET */}
                  {(service.price !== null &&
                    service.price !== undefined) ||
                  (service.budget !== null &&
                    service.budget !== undefined) ? (
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <Wallet
                        size={17}
                        className="shrink-0 text-[#F5C542]"
                      />

                      <span>
                        {activeTab === "vendor" ? "Price" : "Budget"}:{" "}
                        <span className="font-semibold text-white">
                          $
                          {Number(
                            service.price ?? service.budget
                          ).toFixed(2)}
                        </span>
                      </span>
                    </div>
                  ) : null}
                </div>

                {/* BUTTON */}
                <button className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-[#F5C542] px-5 py-3 text-sm font-bold text-black transition-all duration-300 hover:bg-[#ffd45c] group-hover:gap-3">
                  View Service
                  <ArrowRight size={17} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
