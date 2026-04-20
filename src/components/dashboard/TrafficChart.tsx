import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

type TrafficItem = {
  name: string;
  value: number;
};

type TrafficChartProps = {
  data: TrafficItem[];
};

const COLORS = ["#0f172a", "#334155", "#64748b", "#94a3b8"];

function TrafficChart({ data }: TrafficChartProps) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Traffic Sources
        </h3>
        <p className="mt-1 text-sm text-slate-500">
          Where your leads are coming from
        </p>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={85}
              paddingAngle={4}
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 space-y-3">
        {data.map((item, index) => (
          <div
            key={item.name}
            className="flex items-center justify-between text-sm"
          >
            <div className="flex items-center gap-3">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span className="text-slate-600">{item.name}</span>
            </div>
            <span className="font-semibold text-slate-900">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrafficChart;
