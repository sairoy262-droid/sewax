import { Link } from "react-router-dom";
import { Menu, Search, UserRound } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0B0F]/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5C542]">
            <span className="text-xl font-black text-[#0B0B0F]">S</span>
          </div>

          <span className="text-2xl font-black tracking-tight text-white">
            SEWA<span className="text-[#F5C542]">X</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm font-medium text-white transition hover:text-[#F5C542]"
          >
            Home
          </Link>

          <Link
            to="/services"
            className="text-sm font-medium text-slate-300 transition hover:text-[#F5C542]"
          >
            Services
          </Link>

          {/* Dashboard */}
          <Link
            to="/dashboard"
            className="text-sm font-medium text-slate-300 transition hover:text-[#F5C542]"
          >
            Dashboard
          </Link>

          <Link
            to="/vendors"
            className="text-sm font-medium text-slate-300 transition hover:text-[#F5C542]"
          >
            Vendors
          </Link>

          <Link
            to="/about"
            className="text-sm font-medium text-slate-300 transition hover:text-[#F5C542]"
          >
            About
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="hidden rounded-xl p-2 text-slate-300 transition hover:bg-white/5 hover:text-white sm:block">
            <Search size={20} />
          </button>

          <Link
            to="/login"
            className="hidden items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-[#F5C542] hover:text-[#F5C542] sm:flex"
          >
            <UserRound size={17} />
            Login
          </Link>

          <Link
            to="/register"
            className="hidden rounded-xl bg-[#F5C542] px-5 py-2.5 text-sm font-bold text-[#0B0B0F] transition hover:bg-[#FFD866] sm:block"
          >
            Join SewaX
          </Link>

          <button className="rounded-xl p-2 text-white md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
