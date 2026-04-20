import Header from "../components/layout/Header";
import AppLayout from "../components/layout/AppLayout";

function Settings() {
  return (
    <AppLayout>
      <Header
        title="Settings"
        subtitle="Manage workspace preferences and team configuration."
      />

      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2 space-y-6">
          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Profile Settings
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Update your personal details and role information.
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="Olivia Parker"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="olivia@opsvision.com"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Job Title
                </label>
                <input
                  type="text"
                  defaultValue="Operations Manager"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Team
                </label>
                <input
                  type="text"
                  defaultValue="Operations"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400"
                />
              </div>
            </div>

            <button className="mt-6 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Save Changes
            </button>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Notifications
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Control how you receive workspace updates.
            </p>

            <div className="mt-6 space-y-4">
              {[
                "Email alerts for new client activity",
                "Weekly performance summary",
                "Project deadline reminders",
                "Billing and payment notifications",
              ].map((item) => (
                <label
                  key={item}
                  className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-4"
                >
                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                  <input type="checkbox" defaultChecked className="h-4 w-4" />
                </label>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Workspace Plan
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Current subscription and workspace limits.
            </p>

            <div className="mt-5 rounded-2xl bg-slate-900 p-5 text-white">
              <p className="text-sm text-slate-300">Professional Plan</p>
              <h4 className="mt-2 text-2xl font-bold">$49/month</h4>
              <p className="mt-2 text-sm text-slate-400">
                Advanced analytics, client management, and reporting tools.
              </p>
            </div>

            <button className="mt-5 w-full rounded-xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200">
              Manage Subscription
            </button>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Security</h3>
            <p className="mt-1 text-sm text-slate-500">
              Protect your account and workspace access.
            </p>

            <div className="mt-5 space-y-3">
              <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                Change Password
              </button>
              <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                Enable 2FA
              </button>
              <button className="w-full rounded-xl border border-red-200 px-4 py-3 text-sm font-medium text-red-600 transition hover:bg-red-50">
                Sign Out of All Devices
              </button>
            </div>
          </section>
        </div>
      </div>
    </AppLayout>
  );
}

export default Settings;
