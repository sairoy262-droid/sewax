
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Home,
  SearchX,
} from "lucide-react";

export const NotFound = () => {
  return (
    <main className="min-h-screen bg-[#0B0B0F] px-6 py-10 text-white">
      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center">
        <div className="w-full max-w-lg text-center">

          {/* Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-[#111217]">
            <SearchX
              size={38}
              className="text-[#F5C542]"
            />
          </div>

          {/* 404 */}
          <h1 className="mt-8 text-7xl font-black tracking-tight">
            4<span className="text-[#F5C542]">0</span>4
          </h1>

          {/* Heading */}
          <h2 className="mt-4 text-2xl font-bold">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
            The page you're looking for doesn't exist or may have
            been moved to another location.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/dashboard"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#F5C542] px-6 py-3 font-bold text-[#0B0B0F] transition hover:bg-[#FFD866]"
            >
              <Home size={18} />
              Go to Dashboard
            </Link>

            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#111217] px-6 py-3 font-semibold text-white transition hover:border-[#F5C542]/40 hover:bg-white/5"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>

          </div>

          {/* Branding */}
          <div className="mt-12 border-t border-white/10 pt-6">
            <div className="flex items-center justify-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F5C542] text-sm font-black text-[#0B0B0F]">
                S
              </div>

              <span className="font-black tracking-wide">
                SEWA<span className="text-[#F5C542]">X</span>
              </span>
            </div>

            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-slate-600">
              Service Platform
            </p>
          </div>

        </div>
      </div>
    </main>
  );
};


