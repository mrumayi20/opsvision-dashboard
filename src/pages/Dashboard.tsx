import { useState } from "react";
import {
  FaDollarSign,
  FaUsers,
  FaChartLine,
  FaBriefcase,
} from "react-icons/fa";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import StatCard from "../components/dashboard/StatCard";
import RevenueChart from "../components/dashboard/RevenueChart";
import TrafficChart from "../components/dashboard/TrafficChart";
import RecentOrders from "../components/dashboard/RecentOrders";
import ActivityFeed from "../components/dashboard/ActivityFeed";

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <main className="min-h-screen px-4 pb-8 pt-20 md:ml-64 md:px-8 md:pt-8">
        <Header />

        <section className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Revenue"
            value="$128,450"
            change="+12.5%"
            changeType="positive"
            icon={<FaDollarSign />}
          />
          <StatCard
            title="Active Clients"
            value="1,248"
            change="+8.2%"
            changeType="positive"
            icon={<FaUsers />}
          />
          <StatCard
            title="Conversion Rate"
            value="6.8%"
            change="-1.1%"
            changeType="negative"
            icon={<FaChartLine />}
          />
          <StatCard
            title="Open Projects"
            value="34"
            change="+4.3%"
            changeType="positive"
            icon={<FaBriefcase />}
          />
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <RevenueChart />
          </div>
          <div>
            <TrafficChart />
          </div>
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <RecentOrders />
          </div>
          <div>
            <ActivityFeed />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
