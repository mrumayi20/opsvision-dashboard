import { Link } from "react-router-dom";
import { FaChartLine } from "react-icons/fa";

function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">
        <div className="hidden bg-slate-900 p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl">
                <FaChartLine />
              </div>
              <div>
                <h1 className="text-2xl font-bold">OpsVision</h1>
                <p className="text-sm text-slate-300">Business Dashboard</p>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="max-w-md text-4xl font-bold leading-tight">
                Manage performance, clients, and growth in one place.
              </h2>
              <p className="mt-4 max-w-md text-slate-300">
                A modern operations dashboard for teams that need clear metrics,
                fast insights, and a polished reporting experience.
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-400">
            Trusted by operations, sales, and analytics teams.
          </p>
        </div>

        <div className="p-8 sm:p-10 lg:p-12">
          <div className="mx-auto w-full max-w-md">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900">
                Welcome back
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Sign in to access your OpsVision dashboard.
              </p>
            </div>

            <form className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="olivia@opsvision.com"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-400"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-400"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-600">
                  <input type="checkbox" className="rounded" />
                  Remember me
                </label>
                <button
                  type="button"
                  className="font-medium text-slate-700 hover:text-slate-900"
                >
                  Forgot password?
                </button>
              </div>

              <Link
                to="/dashboard"
                className="block w-full rounded-xl bg-slate-900 px-4 py-3 text-center font-semibold text-white transition hover:bg-slate-800"
              >
                Sign In
              </Link>
            </form>

            <p className="mt-6 text-center text-sm text-slate-500">
              Demo access for interview presentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
