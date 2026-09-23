import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Search,
  UserRound,
  ShieldCheck,
  Zap,
  Users,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/feature/user";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [login, { isLoading, isError, error }] = useLoginMutation();
  const [FormData, setformdata] = useState({
    email: "",
    password: "",
  });
  const Handlechange = (e) => {
    setformdata({
      ...FormData,
      [e.target.name]: e.target.value,
    });
  };
const handlelogin = async (e) => {
  e.preventDefault();

  try {
    const res = await login(FormData).unwrap();

    console.log("LOGIN RESPONSE:", res);
localStorage.setItem("token", res.token);
    toast.success(res.message);

    navigate("/dashboard");
  } catch (err) {
    console.log("LOGIN ERROR:", err);
    toast.error(err?.data?.message || "Login failed");
  }
};
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-[calc(100vh-81px)] overflow-hidden bg-[#0B0B0F] text-white">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-80 w-48 -translate-y-1/2 rounded-r-[100%] bg-[#F5C542]/10 blur-3xl" />

      <div className="pointer-events-none absolute right-0 top-1/2 h-80 w-48 -translate-y-1/2 rounded-l-[100%] bg-[#2563EB]/10 blur-3xl" />

      {/* Center Container */}
      <div className="relative mx-auto flex min-h-[calc(100vh-81px)] max-w-7xl items-center justify-center px-6 py-6">
        {/* Main Card */}
        <div className="grid h-[680px] w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-[#111217] shadow-2xl shadow-black/40 lg:grid-cols-2">
          {/* ===================================================== */}
          {/* LEFT SIDE */}
          {/* ===================================================== */}

          <section className="relative hidden overflow-hidden bg-[#0B0B0F] lg:flex lg:flex-col lg:justify-between">
            {/* Blue decoration */}
            <div className="absolute right-0 top-0 h-48 w-48 rounded-bl-[100%] bg-[#2563EB]/10 blur-2xl" />

            {/* Gold decoration */}
            <div className="absolute bottom-0 left-0 h-56 w-56 rounded-tr-[100%] bg-[#F5C542]/10 blur-2xl" />

            <div className="relative z-10 p-10">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5C542] text-2xl font-black text-[#0B0B0F]">
                  S
                </div>

                <h1 className="text-2xl font-black tracking-wide">
                  SEWA
                  <span className="text-[#F5C542]">X</span>
                </h1>
              </div>

              {/* Content */}
              <div className="mt-24">
                <p className="text-sm font-bold uppercase tracking-wide text-[#F5C542]">
                  Welcome to SewaX
                </p>

                <h2 className="mt-5 max-w-lg text-5xl font-black leading-[1.1]">
                  Manage your <span className="text-[#F5C542]">services</span>{" "}
                  smarter.
                </h2>

                <p className="mt-6 max-w-lg text-base leading-7 text-slate-500">
                  Connect with trusted service providers, manage your services,
                  and keep everything organized from one place.
                </p>
              </div>

              {/* Features */}
              <div className="mt-12 flex gap-8">
                {/* Feature 1 */}
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-[#F5C542]/10 p-3">
                    <ShieldCheck size={21} className="text-[#F5C542]" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">Trusted</p>

                    <p className="text-sm text-slate-500">Providers</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-[#2563EB]/10 p-3">
                    <Zap size={21} className="text-[#2563EB]" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">Fast &</p>

                    <p className="text-sm text-slate-500">Reliable</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-emerald-400/10 p-3">
                    <Users size={21} className="text-emerald-400" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">Growing</p>

                    <p className="text-sm text-slate-500">Community</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ===================================================== */}
          {/* RIGHT SIDE */}
          {/* ===================================================== */}

          <section className="flex flex-col justify-center border-l border-white/10 bg-[#111217] px-8 py-8 sm:px-12 lg:px-14">
            {/* Login Header */}
            <div>
              <p className="text-sm font-semibold text-[#F5C542]">
                Account Login
              </p>

              <h2 className="mt-2 text-4xl font-black">Welcome back 👋</h2>

              <p className="mt-2 text-sm text-slate-500">
                Login to access your SewaX account.
              </p>
            </div>

            {/* Form */}
            <form className="mt-7 space-y-4" onSubmit={handlelogin}>
              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Email
                </label>

                <div className="relative">
                  <Mail
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type="email"
                    name="email"
                    onChange={Handlechange}
                    value={FormData.email}
                    placeholder="Enter your email"
                    className="h-12 w-full rounded-xl border border-white/10 bg-[#0B0B0F] pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#F5C542]/60 focus:ring-1 focus:ring-[#F5C542]/20"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Password
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onChange={Handlechange}
                    value={FormData.password}
                    placeholder="Enter your password"
                    className="h-12 w-full rounded-xl border border-white/10 bg-[#0B0B0F] pl-12 pr-12 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#F5C542]/60 focus:ring-1 focus:ring-[#F5C542]/20"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-white"
                  >
                    {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </div>
              </div>

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex cursor-pointer items-center gap-2 text-xs text-slate-400">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded accent-[#F5C542]"
                  />
                  Remember me
                </label>

                <Link
                  to="/forgot-password"
                  className="text-xs font-semibold text-[#F5C542] transition hover:text-[#FFD866]"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#F5C542] font-bold text-[#0B0B0F] transition hover:bg-[#FFD866] active:scale-[0.99]"
              >
                Login
                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 h-px bg-white/10" />

            {/* Register */}
            <p className="text-center text-sm text-slate-500">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-[#F5C542] transition hover:text-[#FFD866]"
              >
                Create account
              </Link>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Login;
