
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Plus,
  Users,
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Services",
      value: "24",
      change: "+12%",
      icon: BriefcaseBusiness,
      iconColor: "text-[#F5C542]",
      bg: "bg-[#F5C542]/10",
    },
    {
      title: "Active Vendors",
      value: "128",
      change: "+8%",
      icon: Users,
      iconColor: "text-[#2563EB]",
      bg: "bg-[#2563EB]/10",
    },
    {
      title: "Completed Jobs",
      value: "1,248",
      change: "+18%",
      icon: CheckCircle2,
      iconColor: "text-emerald-400",
      bg: "bg-emerald-400/10",
    },
    {
      title: "Pending Requests",
      value: "18",
      change: "+4%",
      icon: Clock3,
      iconColor: "text-orange-400",
      bg: "bg-orange-400/10",
    },
  ];

  const services = [
    ["Home Cleaning", "Sarah Johnson", "Completed"],
    ["Electrical Repair", "Raj Kumar", "In Progress"],
    ["Plumbing", "Anil Services", "Pending"],
    ["AC Maintenance", "CoolTech", "Completed"],
  ];

  return (
    <main className="min-h-[calc(100vh-80px)] w-full bg-[#0B0B0F] px-4 py-6 text-white sm:px-6 lg:px-8">
      {/* Full available dashboard width */}
      <div className="w-full">

        {/* Header */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-medium text-[#F5C542]">
              SewaX Dashboard
            </p>

            <h1 className="mt-2 text-3xl font-black md:text-4xl">
              Welcome back 👋
            </h1>

            <p className="mt-2 text-slate-500">
              Here's what's happening with your services today.
            </p>
          </div>

          <button className="flex w-fit items-center gap-2 rounded-xl bg-[#F5C542] px-5 py-3 font-bold text-[#0B0B0F] transition hover:bg-[#FFD866]">
            <Plus size={19} />
            Add Service
          </button>
        </div>

        {/* Stats */}
        <div className="mt-8 grid w-full gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="rounded-2xl border border-white/10 bg-[#111217] p-6"
              >
                <div className="flex items-center justify-between">
                  <div className={`rounded-xl p-3 ${stat.bg}`}>
                    <Icon size={22} className={stat.iconColor} />
                  </div>

                  <span className="text-sm font-semibold text-emerald-400">
                    {stat.change}
                  </span>
                </div>

                <p className="mt-6 text-sm text-slate-500">
                  {stat.title}
                </p>

                <h2 className="mt-1 text-3xl font-black">
                  {stat.value}
                </h2>
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="mt-6 grid w-full gap-6 xl:grid-cols-3">

          {/* Recent Services */}
          <div className="rounded-2xl border border-white/10 bg-[#111217] xl:col-span-2">
            <div className="flex items-center justify-between border-b border-white/10 p-6">
              <div>
                <h2 className="text-lg font-bold">
                  Recent Services
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Your latest service activity
                </p>
              </div>

              <button className="text-sm font-semibold text-[#F5C542] hover:text-[#FFD866]">
                View all
              </button>
            </div>

            <div className="divide-y divide-white/10">
              {services.map(([service, vendor, status]) => (
                <div
                  key={service}
                  className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#2563EB]/10">
                      <BriefcaseBusiness
                        size={19}
                        className="text-[#2563EB]"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        {service}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        {vendor}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        status === "Completed"
                          ? "bg-emerald-400/10 text-emerald-400"
                          : status === "In Progress"
                            ? "bg-[#2563EB]/10 text-blue-400"
                            : "bg-[#F5C542]/10 text-[#F5C542]"
                      }`}
                    >
                      {status}
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="text-slate-600"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="rounded-2xl border border-white/10 bg-[#111217] p-6">
            <h2 className="text-lg font-bold">
              Quick Actions
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Manage your SewaX account
            </p>

            <div className="mt-6 space-y-3">

              <button className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-[#0B0B0F] p-4 text-left transition hover:border-[#F5C542]/40">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-[#F5C542]/10 p-2">
                    <Plus
                      size={18}
                      className="text-[#F5C542]"
                    />
                  </div>

                  <span className="font-medium">
                    Create Service
                  </span>
                </div>

                <ArrowUpRight size={17} />
              </button>

              <button className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-[#0B0B0F] p-4 text-left transition hover:border-[#2563EB]/40">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-[#2563EB]/10 p-2">
                    <Users
                      size={18}
                      className="text-[#2563EB]"
                    />
                  </div>

                  <span className="font-medium">
                    Find Vendors
                  </span>
                </div>

                <ArrowUpRight size={17} />
              </button>

              <button className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-[#0B0B0F] p-4 text-left transition hover:border-emerald-400/40">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-emerald-400/10 p-2">
                    <CheckCircle2
                      size={18}
                      className="text-emerald-400"
                    />
                  </div>

                  <span className="font-medium">
                    View Completed
                  </span>
                </div>

                <ArrowUpRight size={17} />
              </button>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;

