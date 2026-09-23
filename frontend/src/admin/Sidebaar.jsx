import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BriefcaseBusiness,
  Users,
  ClipboardList,
  CheckCircle2,
  Clock3,
  Settings,
  UserRound,
  LogOut,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      title: "Services",
      icon: BriefcaseBusiness,
      path: "/dashboard/services",
    },
    {
      title: "Vendors",
      icon: Users,
      path: "/dashboard/vendors",
    },
    {
      title: "Service Requests",
      icon: ClipboardList,
      path: "/dashboard/requests",
    },
    {
      title: "Completed Jobs",
      icon: CheckCircle2,
      path: "/dashboard/completed",
    },
    {
      title: "Pending Requests",
      icon: Clock3,
      path: "/dashboard/pending",
    },
  ];

  const bottomItems = [
    {
      title: "Profile",
      icon: UserRound,
      path: "/dashboard/profile",
    },
    {
      title: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed left-4 top-24 z-40 rounded-xl border border-white/10 bg-[#111217] p-3 text-white shadow-lg lg:hidden"
      >
        <Menu size={21} />
      </button>

      {/* Mobile Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-white/10 bg-[#0B0B0F] transition-transform duration-300 lg:sticky lg:top-0 lg:z-30 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
          <Link
            to="/dashboard"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3"
          >
            {/* Logo Icon */}
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5C542] text-lg font-black text-[#0B0B0F]">
              S
            </div>

            {/* Logo Text */}
            <div>
              <h1 className="text-xl font-black tracking-wide">
                SEWA<span className="text-[#F5C542]">X</span>
              </h1>

              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                Service Platform
              </p>
            </div>
          </Link>

          {/* Mobile Close */}
          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-white lg:hidden"
          >
            <X size={21} />
          </button>
        </div>

        {/* User Profile */}
        <div className="mx-4 mt-6 rounded-2xl border border-white/10 bg-[#111217] p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2563EB]/10">
              <UserRound size={20} className="text-[#2563EB]" />
            </div>

            <div className="min-w-0">
              <h3 className="truncate text-sm font-bold text-white">
                Welcome User
              </h3>

              <p className="mt-0.5 text-xs text-slate-500">
                SewaX Account
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-7 flex-1 overflow-y-auto px-4">
          <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-600">
            Main Menu
          </p>

          <nav className="space-y-1.5">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);

              return (
                <Link
                  key={item.title}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`group flex items-center justify-between rounded-xl px-3 py-3 transition ${
                    active
                      ? "bg-[#F5C542] text-[#0B0B0F]"
                      : "text-slate-400 hover:bg-[#111217] hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      size={19}
                      className={
                        active
                          ? "text-[#0B0B0F]"
                          : "text-slate-500 group-hover:text-[#F5C542]"
                      }
                    />

                    <span className="text-sm font-semibold">
                      {item.title}
                    </span>
                  </div>

                  {active && <ChevronRight size={16} />}
                </Link>
              );
            })}
          </nav>

          {/* Account */}
          <p className="mb-3 mt-8 px-3 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-600">
            Account
          </p>

          <nav className="space-y-1.5">
            {bottomItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);

              return (
                <Link
                  key={item.title}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`group flex items-center justify-between rounded-xl px-3 py-3 transition ${
                    active
                      ? "bg-[#F5C542] text-[#0B0B0F]"
                      : "text-slate-400 hover:bg-[#111217] hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      size={19}
                      className={
                        active
                          ? "text-[#0B0B0F]"
                          : "text-slate-500 group-hover:text-[#F5C542]"
                      }
                    />

                    <span className="text-sm font-semibold">
                      {item.title}
                    </span>
                  </div>

                  {active && <ChevronRight size={16} />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Logout */}
        <div className="border-t border-white/10 p-4">
          <button className="group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-slate-400 transition hover:bg-red-400/10 hover:text-red-400">
            <LogOut
              size={19}
              className="text-slate-500 transition group-hover:text-red-400"
            />

            <span className="text-sm font-semibold">Logout</span>
          </button>

          <p className="mt-3 text-center text-[10px] text-slate-600">
            SewaX © 2026
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
