import React from "react";
import { LogOut, X, AlertTriangle } from "lucide-react";

const LogoutModal = ({ onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
      
      {/* Modal */}
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#111217] p-6 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5C542]/10">
              <LogOut
                size={21}
                className="text-[#F5C542]"
              />
            </div>

            <div>
              <h2 className="text-lg font-bold text-white">
                Logout
              </h2>

              <p className="text-sm text-slate-500">
                SewaX Account
              </p>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 transition hover:bg-white/5 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="mt-6 rounded-xl border border-white/10 bg-[#0B0B0F] p-4">
          <div className="flex gap-3">
            <AlertTriangle
              size={20}
              className="mt-0.5 shrink-0 text-orange-400"
            />

            <div>
              <h3 className="font-semibold text-white">
                Are you sure you want to logout?
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                You will be signed out of your SewaX account
                and will need to login again to access your
                dashboard.
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 rounded-xl border border-white/10 bg-[#0B0B0F] px-4 py-3 font-semibold text-slate-300 transition hover:border-white/20 hover:text-white"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#F5C542] px-4 py-3 font-bold text-[#0B0B0F] transition hover:bg-[#FFD866]"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
