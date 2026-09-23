import React from "react";
import { useServiceGetQuery } from "../redux/feature/U-Service";
import {
  Loader2,
  AlertCircle,
  ArrowRight,
  MapPin,
  Wallet,
  Clock3,
} from "lucide-react";

const Services = () => {
  const { data, isLoading, isError, error } = useServiceGetQuery();

  // Loading
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

  // Error
  if (isError) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0B0B0F] px-6">
        <div className="w-full max-w-md rounded-2xl border border-red-500/20 bg-red-500/10 p-8 text-center">
          <AlertCircle className="mx-auto mb-4 text-red-400" size={40} />

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

  // Handle different API response structures
  const services = Array.isArray(data)
    ? data
    : data?.services || data?.result || [];

  return (
    <div className="min-h-screen bg-[#0B0B0F] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <div className="mb-12">
          <div className="mb-3 flex items-center gap-3">
            <div className="h-px w-10 bg-[#F5C542]" />

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F5C542]">
              SEWAX SERVICES
            </p>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Find the right
            <span className="text-[#F5C542]"> service</span>
          </h1>
          {/* Add Services Button */}
          
            <div className="absolute right-31 top-29">
              <button className="rounded-xl border-2 border-[#F5C542] bg-[#F5C542] px-5 py-3 font-semibold text-black shadow-lg transition hover:bg-[#d9ad2f]">
                + Add Services
              </button>
            </div>
          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
            Discover trusted services available on SewaX. Explore service
            requests, locations, budgets, and current status.
          </p>
        </div>

        {/* ================= EMPTY STATE ================= */}
        {services.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-14 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5C542]/10">
              <Clock3 size={30} className="text-[#F5C542]" />
            </div>

            <h2 className="text-2xl font-semibold text-white">
              No services found
            </h2>

            <p className="mx-auto mt-3 max-w-md text-gray-400">
              There are currently no service posts available. Please check again
              later.
            </p>
          </div>
        ) : (
          /* ================= SERVICE GRID ================= */
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111116] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F5C542]/40 hover:shadow-2xl hover:shadow-[#F5C542]/5"
              >
                {/* Top gold line */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-[#F5C542] transition-all duration-300 group-hover:w-full" />

                {/* ================= TOP ================= */}
                <div className="flex items-start justify-between gap-4">
                  {/* Status */}
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                      service.status === "open"
                        ? "bg-green-500/10 text-green-400"
                        : service.status === "in_progress"
                          ? "bg-blue-500/10 text-blue-400"
                          : service.status === "completed"
                            ? "bg-[#F5C542]/10 text-[#F5C542]"
                            : "bg-red-500/10 text-red-400"
                    }`}
                  >
                    {service.status?.replace("_", " ") || "open"}
                  </span>
                </div>

                {/* ================= TITLE ================= */}
                <h2 className="mt-6 line-clamp-2 text-2xl font-bold text-white transition-colors group-hover:text-[#F5C542]">
                  {service.title}
                </h2>

                {/* ================= DESCRIPTION ================= */}
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-400">
                  {service.description || "No description available."}
                </p>

                {/* ================= DETAILS ================= */}
                <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
                  {/* Location */}
                  {service.location && (
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <MapPin size={17} className="shrink-0 text-[#F5C542]" />

                      <span className="line-clamp-1">{service.location}</span>
                    </div>
                  )}

                  {/* Budget */}
                  {service.budget !== null && service.budget !== undefined && (
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <Wallet size={17} className="shrink-0 text-[#F5C542]" />

                      <span>
                        Budget:{" "}
                        <span className="font-semibold text-white">
                          ${Number(service.budget).toFixed(2)}
                        </span>
                      </span>
                    </div>
                  )}
                </div>

                {/* ================= BUTTON ================= */}
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
