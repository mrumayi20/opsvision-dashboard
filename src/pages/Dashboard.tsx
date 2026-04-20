import { useEffect, useState } from "react";
import {
  FaDollarSign,
  FaUsers,
  FaChartLine,
  FaBriefcase,
} from "react-icons/fa";
import Header from "../components/layout/Header";
import AppLayout from "../components/layout/AppLayout";
import StatCard from "../components/dashboard/StatCard";
import RevenueChart from "../components/dashboard/RevenueChart";
import TrafficChart from "../components/dashboard/TrafficChart";
import RecentOrders from "../components/dashboard/RecentOrders";
import ActivityFeed from "../components/dashboard/ActivityFeed";
import {
  fetchActivities,
  fetchOrders,
  fetchRevenue,
  fetchStats,
  fetchTraffic,
} from "../lib/api";
import type {
  ActivityItem,
  Order,
  RevenueItem,
  Stat,
  TrafficItem,
} from "../lib/api";

const statIcons = [
  <FaDollarSign />,
  <FaUsers />,
  <FaChartLine />,
  <FaBriefcase />,
];

function Dashboard() {
  const [stats, setStats] = useState<Stat[]>([]);
  const [revenue, setRevenue] = useState<RevenueItem[]>([]);
  const [traffic, setTraffic] = useState<TrafficItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboardData() {
      try {
        const [
          statsData,
          revenueData,
          trafficData,
          ordersData,
          activitiesData,
        ] = await Promise.all([
          fetchStats(),
          fetchRevenue(),
          fetchTraffic(),
          fetchOrders(),
          fetchActivities(),
        ]);

        setStats(statsData);
        setRevenue(revenueData);
        setTraffic(trafficData);
        setOrders(ordersData);
        setActivities(activitiesData);
      } catch (error) {
        console.error("Failed to load dashboard data:", error);
      } finally {
        setLoading(false);
      }
    }

    loadDashboardData();
  }, []);

  return (
    <AppLayout>
      <Header
        title="Overview"
        subtitle="Welcome back, here is what is happening today."
      />

      {loading ? (
        <div className="mt-6 rounded-2xl bg-white p-8 text-center text-slate-500 shadow-sm">
          Loading dashboard data...
        </div>
      ) : (
        <>
          <section className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
                change={stat.change}
                changeType={stat.changeType}
                icon={statIcons[index]}
              />
            ))}
          </section>

          <section className="mt-6 grid gap-6 xl:grid-cols-3">
            <div className="xl:col-span-2">
              <RevenueChart data={revenue} />
            </div>
            <div>
              <TrafficChart data={traffic} />
            </div>
          </section>

          <section className="mt-6 grid gap-6 xl:grid-cols-3">
            <div className="xl:col-span-2">
              <RecentOrders orders={orders} />
            </div>
            <div>
              <ActivityFeed activities={activities} />
            </div>
          </section>
        </>
      )}
    </AppLayout>
  );
}

export default Dashboard;
