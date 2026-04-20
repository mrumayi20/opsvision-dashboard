import {
  FaChartLine,
  FaUsers,
  FaFolderOpen,
  FaCog,
  FaBars,
} from "react-icons/fa";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const menuItems = [
  { name: "Overview", icon: <FaChartLine />, active: true },
  { name: "Clients", icon: <FaUsers />, active: false },
  { name: "Projects", icon: <FaFolderOpen />, active: false },
  { name: "Settings", icon: <FaCog />, active: false },
];

function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  return (
    <>
      <button
        className="fixed left-4 top-4 z-50 rounded-lg bg-slate-900 p-3 text-white shadow-lg md:hidden"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-slate-200 bg-white px-6 py-6 transition-transform duration-300 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-slate-900">OpsVision</h1>
          <p className="mt-1 text-sm text-slate-500">Business Dashboard</p>
        </div>

        <nav className="flex flex-1 flex-col gap-3">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                item.active
                  ? "bg-slate-900 text-white"
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="rounded-2xl bg-slate-900 p-4 text-white">
          <p className="text-sm text-slate-300">Current Plan</p>
          <h3 className="mt-1 text-lg font-semibold">Professional</h3>
          <p className="mt-2 text-sm text-slate-400">
            Analytics and reporting enabled
          </p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
