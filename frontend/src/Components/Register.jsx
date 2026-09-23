import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  UserRound,
  ChevronDown,
} from "lucide-react";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../redux/feature/user";
import { toast } from "react-toastify";
const Register = () => {
  const [register, { isLoading, isError, error }] = useRegisterMutation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    Username: "",
    phone: "",
    email: "",
    password: "",
    role: "user",
  });
  const Handlechange = (e) => {
    console.log(formData);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await register(formData).unwrap();
      toast.success(res.message);
      navigate("/login");
    } catch (err) {
      toast.error(err?.data?.message);
    }

    // After successful registration
  };
  return (
    <main className="min-h-[calc(100vh-81px)] bg-[#0B0B0F] text-white">
      {/* Background */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-80 w-48 -translate-y-1/2 rounded-r-[100%] bg-[#F5C542]/10 blur-3xl" />

      <div className="pointer-events-none absolute right-0 top-1/2 h-80 w-48 -translate-y-1/2 rounded-l-[100%] bg-[#2563EB]/10 blur-3xl" />

      {/* Center */}
      <div className="relative mx-auto flex min-h-[calc(100vh-81px)] items-center justify-center px-6 py-6">
        {/* Main Card */}
        <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-[#111217] shadow-2xl shadow-black/40 lg:grid-cols-2">
          {/* ================================================= */}
          {/* LEFT SIDE */}
          {/* ================================================= */}

          <section className="relative hidden overflow-hidden bg-[#0B0B0F] lg:flex lg:flex-col lg:justify-between">
            {/* Decorations */}
            <div className="absolute right-0 top-0 h-52 w-52 rounded-bl-[100%] bg-[#2563EB]/10 blur-3xl" />

            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-tr-[100%] bg-[#F5C542]/10 blur-3xl" />

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

              {/* Heading */}
              <div className="mt-24">
                <p className="text-sm font-bold uppercase tracking-wide text-[#F5C542]">
                  Join SewaX
                </p>

                <h2 className="mt-5 max-w-lg text-5xl font-black leading-[1.1]">
                  Create your <span className="text-[#F5C542]">account</span>{" "}
                  today.
                </h2>

                <p className="mt-6 max-w-lg text-base leading-7 text-slate-500">
                  Join SewaX and connect with trusted service providers, manage
                  your services, and grow your service network.
                </p>
              </div>

              {/* Benefits */}
              <div className="mt-12 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5C542]/10">
                    <UserRound size={20} className="text-[#F5C542]" />
                  </div>

                  <div>
                    <p className="font-semibold">One SewaX Account</p>

                    <p className="text-sm text-slate-500">
                      Manage everything from one place.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2563EB]/10">
                    <Phone size={20} className="text-[#2563EB]" />
                  </div>

                  <div>
                    <p className="font-semibold">Easy Communication</p>

                    <p className="text-sm text-slate-500">
                      Connect with service providers easily.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================================================= */}
          {/* RIGHT SIDE */}
          {/* ================================================= */}

          <section className="flex flex-col justify-center bg-[#111217] px-6 py-7 sm:px-10 lg:px-12">
            {/* Header */}
            <div>
              <p className="text-sm font-semibold text-[#F5C542]">
                Create Account
              </p>

              <h2 className="mt-2 text-3xl font-black">Join SewaX</h2>

              <p className="mt-2 text-sm text-slate-500">
                Create your account and get started.
              </p>
            </div>

            {/* Form */}
            <form className="mt-6 space-y-4" onSubmit={handleRegister}>
              {/* Username + Email */}
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Username */}
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Username
                  </label>

                  <div className="relative">
                    <UserRound
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                    />

                    <input
                      type="text"
                      name="Username"
                      value={formData.Username}
                      onChange={Handlechange}
                      placeholder="Username"
                      required
                      className="h-11 w-full rounded-xl border border-white/10 bg-[#0B0B0F] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#F5C542]/60 focus:ring-1 focus:ring-[#F5C542]/20"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Email
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                    />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={Handlechange}
                      placeholder="Email address"
                      required
                      className="h-11 w-full rounded-xl border border-white/10 bg-[#0B0B0F] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#F5C542]/60 focus:ring-1 focus:ring-[#F5C542]/20"
                    />
                  </div>
                </div>
              </div>

              {/* Password + Phone */}
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Password */}
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Password
                  </label>

                  <div className="relative">
                    <LockKeyhole
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                    />

                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={Handlechange}
                      placeholder="Password"
                      required
                      className="h-11 w-full rounded-xl border border-white/10 bg-[#0B0B0F] pl-11 pr-11 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#F5C542]/60 focus:ring-1 focus:ring-[#F5C542]/20"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Phone
                  </label>

                  <div className="relative">
                    <Phone
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                    />

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      placeholder="Phone number"
                      onChange={Handlechange}
                      required
                      className="h-11 w-full rounded-xl border border-white/10 bg-[#0B0B0F] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#F5C542]/60 focus:ring-1 focus:ring-[#F5C542]/20"
                    />
                  </div>
                </div>
              </div>

              {/* Role */}
              <div>
                <label className="mb-2 block text-sm font-semibold">Role</label>

                <div className="relative">
                  <UserRound
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <select
                    name="role"
                    required
                    value={formData.role}
                    onChange={Handlechange}
                    className="h-11 w-full cursor-pointer appearance-none rounded-xl border border-white/10 bg-[#0B0B0F] pl-11 pr-11 text-sm text-white outline-none transition focus:border-[#F5C542]/60 focus:ring-1 focus:ring-[#F5C542]/20"
                  >
                    <option value="user" className="bg-[#111217]">
                      User
                    </option>

                    <option value="vendor" className="bg-[#111217]">
                      Vendor
                    </option>
                  </select>

                  <ChevronDown
                    size={18}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />
                </div>
              </div>

              {/* Terms */}
              <label className="flex cursor-pointer items-start gap-2 pt-1 text-xs text-slate-500">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 rounded accent-[#F5C542]"
                />

                <span>I agree to the SewaX terms and conditions.</span>
              </label>

              {/* Register Button */}
              <button
                type="submit"
                className="group flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#F5C542] font-bold text-[#0B0B0F] transition hover:bg-[#FFD866] active:scale-[0.99]"
              >
                Create Account
                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>

            {/* Divider */}
            <div className="my-5 h-px bg-white/10" />

            {/* Login */}
            <p className="text-center text-sm text-slate-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-[#F5C542] transition hover:text-[#FFD866]"
              >
                Login
              </Link>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Register;
