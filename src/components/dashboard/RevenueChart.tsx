import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type RevenueItem = {
  name: string;
  revenue: number;
};

type RevenueChartProps = {
  data: RevenueItem[];
};

function RevenueChart({ data }: RevenueChartProps) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Revenue Overview
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Monthly revenue performance
          </p>
        </div>
        <button className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-600">
          Last 6 months
        </button>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#0f172a"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RevenueChart;
