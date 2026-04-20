import Header from "../components/layout/Header";
import AppLayout from "../components/layout/AppLayout";

function Clients() {
  const clients = [
    {
      name: "Acme Corp",
      industry: "Retail",
      contact: "sarah@acme.com",
      status: "Active",
      revenue: "$24,000",
    },
    {
      name: "Bright Labs",
      industry: "Healthcare",
      contact: "mike@brightlabs.com",
      status: "Pending",
      revenue: "$18,500",
    },
    {
      name: "NovaTech",
      industry: "Technology",
      contact: "emma@novatech.com",
      status: "Active",
      revenue: "$31,200",
    },
    {
      name: "Urban Retail",
      industry: "E-commerce",
      contact: "alex@urbanretail.com",
      status: "Inactive",
      revenue: "$12,800",
    },
    {
      name: "Zenith Works",
      industry: "Manufacturing",
      contact: "james@zenithworks.com",
      status: "Active",
      revenue: "$27,400",
    },
  ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-emerald-100 text-emerald-700";
      case "Pending":
        return "bg-amber-100 text-amber-700";
      case "Inactive":
        return "bg-slate-200 text-slate-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <AppLayout>
      <Header
        title="Clients"
        subtitle="Manage and monitor all client accounts in one place."
      />

      <div className="mt-6 space-y-6">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Client Directory
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Overview of current client accounts and revenue.
              </p>
            </div>

            <button className="rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Add Client
            </button>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-3">
              <thead>
                <tr className="text-left text-sm text-slate-500">
                  <th className="pb-2 font-medium">Client</th>
                  <th className="pb-2 font-medium">Industry</th>
                  <th className="pb-2 font-medium">Contact</th>
                  <th className="pb-2 font-medium">Revenue</th>
                  <th className="pb-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client) => (
                  <tr key={client.name} className="text-sm text-slate-700">
                    <td className="rounded-l-xl bg-slate-50 px-4 py-4 font-medium text-slate-900">
                      {client.name}
                    </td>
                    <td className="bg-slate-50 px-4 py-4">{client.industry}</td>
                    <td className="bg-slate-50 px-4 py-4">{client.contact}</td>
                    <td className="bg-slate-50 px-4 py-4 font-medium">
                      {client.revenue}
                    </td>
                    <td className="rounded-r-xl bg-slate-50 px-4 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyles(client.status)}`}
                      >
                        {client.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default Clients;
