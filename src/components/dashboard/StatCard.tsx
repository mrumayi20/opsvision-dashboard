import type { ReactNode } from "react";

type StatCardProps = {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: ReactNode;
};

function StatCard({ title, value, change, changeType, icon }: StatCardProps) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <h3 className="mt-3 text-3xl font-bold text-slate-900">{value}</h3>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-xl text-slate-700">
          {icon}
        </div>
      </div>

      <div className="mt-4">
        <span
          className={`text-sm font-semibold ${
            changeType === "positive" ? "text-emerald-600" : "text-red-500"
          }`}
        >
          {change}
        </span>
        <span className="ml-2 text-sm text-slate-500">vs last month</span>
      </div>
    </div>
  );
}

export default StatCard;
