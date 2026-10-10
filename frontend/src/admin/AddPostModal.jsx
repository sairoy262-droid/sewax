
import React, { useState } from "react";
import {
  X,
  BriefcaseBusiness,
  MapPin,
  FileText,
  Wallet,
  DollarSign,
  Loader2,
} from "lucide-react";

const AddPostModal = ({
  role,
  onSubmit,
  onClose,
  isLoading = false,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    budget: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data =
      role === "vendor"
        ? {
            title: formData.title,
            description: formData.description,
            location: formData.location,
            price: formData.price || null,
          }
        : {
            title: formData.title,
            description: formData.description,
            location: formData.location,
            budget: formData.budget || null,
          };

    onSubmit(data);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-[#0B0B0F] shadow-2xl shadow-black/50">
        
        {/* BLUE TOP ACCENT */}
        <div className="absolute left-0 right-0 top-0 h-1 bg-[#2563EB]" />

        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5C542] text-black">
              <BriefcaseBusiness size={23} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-white">
                Add {role === "vendor" ? "Vendor Service" : "Service Request"}
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                {role === "vendor"
                  ? "Publish a service you provide"
                  : "Create a service request"}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition hover:border-[#F5C542]/40 hover:bg-[#F5C542]/10 hover:text-[#F5C542]"
          >
            <X size={20} />
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6 px-6 py-7 sm:px-8">
          
          {/* POST TYPE */}
          <div className="rounded-2xl border border-[#2563EB]/30 bg-[#2563EB]/10 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2563EB] text-white">
                <BriefcaseBusiness size={18} />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-blue-300">
                  Post Type
                </p>

                <p className="font-semibold capitalize text-white">
                  {role === "vendor" ? "Vendor Service" : "User Request"}
                </p>
              </div>
            </div>
          </div>

          {/* TITLE */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-200">
              Service Title
            </label>

            <div className="relative">
              <FileText
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F5C542]"
              />

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder={
                  role === "vendor"
                    ? "Example: Professional Home Cleaning"
                    : "Example: Need house cleaning"
                }
                required
                className="w-full rounded-xl border border-white/10 bg-[#111116] py-3.5 pl-11 pr-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#F5C542] focus:ring-1 focus:ring-[#F5C542]"
              />
            </div>
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-200">
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder={
                role === "vendor"
                  ? "Describe the service you provide..."
                  : "Describe the service you need..."
              }
              rows={5}
              required
              className="w-full resize-none rounded-xl border border-white/10 bg-[#111116] px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-[#F5C542] focus:ring-1 focus:ring-[#F5C542]"
            />
          </div>

          {/* LOCATION */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-200">
              Location
            </label>

            <div className="relative">
              <MapPin
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2563EB]"
              />

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Example: Kathmandu, Nepal"
                className="w-full rounded-xl border border-white/10 bg-[#111116] py-3.5 pl-11 pr-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
              />
            </div>
          </div>

          {/* PRICE / BUDGET */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-200">
              {role === "vendor" ? "Service Price" : "Budget"}
            </label>

            <div className="relative">
              {role === "vendor" ? (
                <DollarSign
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F5C542]"
                />
              ) : (
                <Wallet
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F5C542]"
                />
              )}

              <input
                type="number"
                min="0"
                step="0.01"
                name={role === "vendor" ? "price" : "budget"}
                value={
                  role === "vendor"
                    ? formData.price
                    : formData.budget
                }
                onChange={handleChange}
                placeholder={
                  role === "vendor"
                    ? "Enter your service price"
                    : "Enter your available budget"
                }
                className="w-full rounded-xl border border-white/10 bg-[#111116] py-3.5 pl-11 pr-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#F5C542] focus:ring-1 focus:ring-[#F5C542]"
              />
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col-reverse gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-gray-300 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center justify-center gap-2 rounded-xl border-2 border-[#F5C542] bg-[#F5C542] px-7 py-3 font-bold text-black shadow-lg transition hover:bg-[#d9ad2f] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Posting...
                </>
              ) : (
                <>
                  {role === "vendor"
                    ? "Publish Service"
                    : "Post Request"}
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPostModal;