import { recentOrders } from "../../data/mockData";

function getStatusStyles(status: string) {
  switch (status) {
    case "Completed":
      return "bg-emerald-100 text-emerald-700";
    case "Pending":
      return "bg-amber-100 text-amber-700";
    case "In Review":
      return "bg-sky-100 text-sky-700";
    default:
      return "bg-slate-100 text-slate-700";
  }
}

function RecentOrders() {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="mb-5">
        <h3 className="text-lg font-semibold text-slate-900">
          Recent Transactions
        </h3>
        <p className="mt-1 text-sm text-slate-500">
          Latest client payments and order activity
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-3">
          <thead>
            <tr className="text-left text-sm text-slate-500">
              <th className="pb-2 font-medium">Client</th>
              <th className="pb-2 font-medium">Date</th>
              <th className="pb-2 font-medium">Amount</th>
              <th className="pb-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr
                key={`${order.client}-${order.date}`}
                className="text-sm text-slate-700"
              >
                <td className="rounded-l-xl bg-slate-50 px-4 py-4 font-medium text-slate-900">
                  {order.client}
                </td>
                <td className="bg-slate-50 px-4 py-4">{order.date}</td>
                <td className="bg-slate-50 px-4 py-4 font-medium">
                  {order.amount}
                </td>
                <td className="rounded-r-xl bg-slate-50 px-4 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyles(order.status)}`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentOrders;
