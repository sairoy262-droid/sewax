
import React, { useState } from "react";
import {
  X,
  UserRound,
  MapPin,
  Phone,
  BriefcaseBusiness,
  ChevronDown,
} from "lucide-react";
import { useServiceGetQuery } from "../redux/feature/Services";
import { toast } from "react-toastify";
import { useAddVendorMutation } from "../redux/feature/vendor";

const ModalOpen = ({ user, onClose }) => {
  const {
    data,
    isLoading: servicesLoading,
    isError: servicesError,
  } = useServiceGetQuery();

  const [addVendor, { isLoading: vendorLoading }] =
    useAddVendorMutation();

  const [formData, setFormData] = useState({
    name: user?.username || "",
    address: user?.address || "",
    number: user?.phone || user?.phone_no || "",
    service_id: "",
    user_id: user?.id || "",
  });

  const services = Array.isArray(data)
    ? data
    : Array.isArray(data?.services)
      ? data.services
      : Array.isArray(data?.result)
        ? data.result
        : Array.isArray(data?.data)
          ? data.data
          : Array.isArray(data?.result?.data)
            ? data.result.data
            : [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user?.id) {
      toast.error("User ID is missing");
      return;
    }

    if (!formData.service_id) {
      toast.error("Please select a service");
      return;
    }

    try {
      const response = await addVendor({
        user_id: user.id,
        name: formData.name,
        address: formData.address,
        number: formData.number,
        service_id: formData.service_id,
      }).unwrap();

      console.log("Vendor registered:", response);
      toast.success("Vendor registered successfully");
      onClose();
    } catch (error) {
      console.error("Register vendor error:", error);
      toast.error(
        error?.data?.message || "Failed to register vendor"
      );
    }
  };

  const loading = servicesLoading || vendorLoading;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-4 backdrop-blur-md"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg overflow-hidden rounded-3xl border border-[#F5C542]/20 bg-[#111116] shadow-2xl shadow-black/60"
      >
        <div className="flex items-center justify-between border-b border-white/10 bg-[#0B0B0F] px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5C542]/10">
              <UserRound size={23} className="text-[#F5C542]" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Add Vendor</h2>
              <p className="mt-1 text-xs text-gray-500">
                Register {user?.username || "user"} as a SewaX vendor
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-gray-400 transition hover:bg-white/10 hover:text-white"
          >
            <X size={21} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-5 px-6 py-7">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Vendor Name
              </label>
              <div className="relative">
                <UserRound
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F5C542]"
                />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter vendor name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#0B0B0F] py-3.5 pl-11 pr-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#F5C542]/60 focus:ring-1 focus:ring-[#F5C542]/30"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Address
              </label>
              <div className="relative">
                <MapPin
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F5C542]"
                />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter vendor address"
                  className="w-full rounded-xl border border-white/10 bg-[#0B0B0F] py-3.5 pl-11 pr-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#F5C542]/60 focus:ring-1 focus:ring-[#F5C542]/30"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Phone Number
              </label>
              <div className="relative">
                <Phone
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F5C542]"
                />
                <input
                  type="tel"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full rounded-xl border border-white/10 bg-[#0B0B0F] py-3.5 pl-11 pr-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#F5C542]/60 focus:ring-1 focus:ring-[#F5C542]/30"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Service
              </label>
              <div className="relative">
                <BriefcaseBusiness
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[#F5C542]"
                />
                <select
                  name="service_id"
                  value={formData.service_id}
                  onChange={handleChange}
                  required
                  disabled={servicesLoading || services.length === 0}
                  className="w-full appearance-none rounded-xl border border-white/10 bg-[#0B0B0F] py-3.5 pl-11 pr-10 text-white outline-none transition focus:border-[#F5C542]/60 focus:ring-1 focus:ring-[#F5C542]/30 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">
                    {servicesLoading
                      ? "Loading services..."
                      : servicesError
                        ? "Failed to load services"
                        : services.length === 0
                          ? "No services available"
                          : "Select a service"}
                  </option>

                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={18}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
                />
              </div>

              {!servicesLoading &&
                !servicesError &&
                services.length === 0 && (
                  <p className="mt-2 text-xs text-red-400">
                    No services were returned by the server.
                  </p>
                )}
            </div>
          </div>

          <div className="flex justify-end gap-3 border-t border-white/10 bg-[#0B0B0F] px-6 py-5">
            <button
              type="button"
              onClick={onClose}
              disabled={vendorLoading}
              className="rounded-xl border border-white/10 bg-[#111116] px-6 py-3 font-semibold text-gray-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading || services.length === 0}
              className="rounded-xl bg-[#F5C542] px-6 py-3 font-bold text-black shadow-lg shadow-[#F5C542]/10 transition hover:bg-[#ffd45c] active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {vendorLoading ? "Adding Vendor..." : "Add Vendor"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalOpen;
