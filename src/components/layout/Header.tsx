import { FaBell, FaSearch } from "react-icons/fa";

type HeaderProps = {
  title: string;
  subtitle: string;
};

function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
        <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
          <FaSearch className="text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-sm outline-none placeholder:text-slate-400"
          />
        </div>

        <button className="rounded-xl bg-slate-100 p-3 text-slate-600 transition hover:bg-slate-200">
          <FaBell />
        </button>

        <div className="flex items-center gap-3 rounded-xl bg-slate-100 px-3 py-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 font-bold text-white">
            OP
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Olivia Parker
            </p>
            <p className="text-xs text-slate-500">Operations Manager</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
