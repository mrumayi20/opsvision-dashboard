import { useState } from "react";
import type { ReactNode } from "react";
import Sidebar from "./Sidebar";

type AppLayoutProps = {
  children: ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <main className="min-h-screen px-4 pb-8 pt-20 md:ml-64 md:px-8 md:pt-8">
        {children}
      </main>
    </div>
  );
}

export default AppLayout;
