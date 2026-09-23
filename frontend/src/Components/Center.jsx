import { Link } from "react-router-dom";
import { ArrowRight, Search, ShieldCheck, Star, Users } from "lucide-react";

const Center = () => {
  const services = [
    {
      name: "Home Cleaning",
      icon: "🧹",
      description: "Professional cleaning services",
    },
    {
      name: "Plumbing",
      icon: "🔧",
      description: "Reliable plumbing experts",
    },
    {
      name: "Electrical",
      icon: "⚡",
      description: "Qualified electrical services",
    },
    {
      name: "Repair",
      icon: "🛠️",
      description: "Fast and trusted repairs",
    },
  ];

  return (
    <main className="bg-[#0B0B0F] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#2563EB]/20 blur-3xl" />

        <div className="absolute -left-40 top-80 h-96 w-96 rounded-full bg-[#F5C542]/10 blur-3xl" />

        <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
          {/* Left */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F5C542]/30 bg-[#F5C542]/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#F5C542]" />

              <span className="text-sm font-medium text-[#F5C542]">
                Your trusted service marketplace
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Find the right
              <span className="block text-[#F5C542]">service.</span>
              Get it done.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
              SewaX connects you with trusted local professionals for everyday
              services. Find skilled vendors, compare options, and get your work
              done with confidence.
            </p>

            {/* Search */}
            <div className="mt-8 flex max-w-xl flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 sm:flex-row">
              <div className="flex flex-1 items-center gap-3 px-3">
                <Search className="text-[#F5C542]" size={21} />

                <input
                  type="text"
                  placeholder="What service do you need?"
                  className="w-full bg-transparent py-3 text-white outline-none placeholder:text-slate-500"
                />
              </div>

              <button className="rounded-xl bg-[#F5C542] px-7 py-3 font-bold text-[#0B0B0F] transition hover:bg-[#FFD866]">
                Search
              </button>
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="flex items-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3.5 font-bold text-white transition hover:bg-blue-500"
              >
                Explore Services
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/register"
                className="rounded-xl border border-white/10 px-6 py-3.5 font-semibold text-white transition hover:border-[#F5C542] hover:text-[#F5C542]"
              >
                Become a Vendor
              </Link>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto max-w-md rounded-[2rem] border border-white/10 bg-[#111217] p-6 shadow-2xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Available near you</p>

                  <h3 className="mt-1 text-xl font-bold">
                    Trusted Professionals
                  </h3>
                </div>

                <div className="rounded-xl bg-[#F5C542]/10 p-3">
                  <ShieldCheck size={25} className="text-[#F5C542]" />
                </div>
              </div>

              {/* Vendor card */}
              <div className="mb-4 rounded-2xl border border-white/10 bg-[#0B0B0F] p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2563EB] text-xl font-bold">
                    RK
                  </div>

                  <div className="flex-1">
                    <h4 className="font-bold">Raj Kumar</h4>

                    <p className="text-sm text-slate-500">
                      Electrical Specialist
                    </p>

                    <div className="mt-2 flex items-center gap-1 text-sm">
                      <Star
                        size={14}
                        fill="#F5C542"
                        className="text-[#F5C542]"
                      />
                      <span className="text-[#F5C542]">4.9</span>
                      <span className="text-slate-600">• 120 jobs</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4 rounded-2xl border border-white/10 bg-[#0B0B0F] p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5C542] text-xl font-bold text-[#0B0B0F]">
                    AS
                  </div>

                  <div>
                    <h4 className="font-bold">Anil Services</h4>

                    <p className="text-sm text-slate-500">Home Maintenance</p>

                    <div className="mt-2 flex items-center gap-1 text-sm">
                      <Star
                        size={14}
                        fill="#F5C542"
                        className="text-[#F5C542]"
                      />

                      <span className="text-[#F5C542]">4.8</span>

                      <span className="text-slate-600">• 95 jobs</span>
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full rounded-xl bg-[#2563EB] py-3 font-bold transition hover:bg-blue-500">
                View All Vendors
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/10 bg-[#111217]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 lg:grid-cols-4">
          <div className="p-8 text-center">
            <Users className="mx-auto mb-3 text-[#F5C542]" />
            <h3 className="text-3xl font-black">500+</h3>
            <p className="mt-1 text-sm text-slate-500">Service Providers</p>
          </div>

          <div className="p-8 text-center">
            <ShieldCheck className="mx-auto mb-3 text-[#2563EB]" />
            <h3 className="text-3xl font-black">1000+</h3>
            <p className="mt-1 text-sm text-slate-500">Services Completed</p>
          </div>

          <div className="p-8 text-center">
            <Star className="mx-auto mb-3 text-[#F5C542]" fill="#F5C542" />
            <h3 className="text-3xl font-black">4.8/5</h3>
            <p className="mt-1 text-sm text-slate-500">Average Rating</p>
          </div>

          <div className="p-8 text-center">
            <Search className="mx-auto mb-3 text-[#2563EB]" />
            <h3 className="text-3xl font-black">24/7</h3>
            <p className="mt-1 text-sm text-slate-500">Easy Discovery</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#F5C542]">
              Explore
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              Popular Services
            </h2>

            <p className="mt-4 max-w-xl text-slate-400">
              Find professionals for the services you need, all in one place.
            </p>
          </div>

          <Link
            to="/services"
            className="flex items-center gap-2 font-semibold text-[#F5C542] hover:text-[#FFD866]"
          >
            View all
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              to="/services"
              key={service.name}
              className="group rounded-2xl border border-white/10 bg-[#111217] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#F5C542]/40 hover:bg-[#15161c]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5C542]/10 text-2xl">
                {service.icon}
              </div>

              <h3 className="text-lg font-bold transition group-hover:text-[#F5C542]">
                {service.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {service.description}
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#2563EB]">
                Explore
                <ArrowRight size={15} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#F5C542] px-8 py-16 text-[#0B0B0F] md:px-16">
          <div className="relative z-10 max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.2em]">
              Grow with SewaX
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Turn your skills into opportunity.
            </h2>

            <p className="mt-5 max-w-xl text-lg text-[#0B0B0F]/70">
              Join SewaX as a service provider and connect with customers
              looking for your expertise.
            </p>

            <Link
              to="/register"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0B0B0F] px-6 py-3.5 font-bold text-white transition hover:bg-[#18181d]"
            >
              Become a Vendor
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#2563EB]/20" />
          <div className="absolute -bottom-24 right-32 h-60 w-60 rounded-full bg-[#2563EB]/10" />
        </div>
      </section>
    </main>
  );
};

export default Center;
