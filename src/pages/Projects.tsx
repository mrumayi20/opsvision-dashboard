import { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import AppLayout from "../components/layout/AppLayout";
import { fetchProjects } from "../lib/api";

type Project = {
  name: string;
  owner: string;
  deadline: string;
  progress: number;
  status: string;
};

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (error) {
        console.error("Failed to load projects:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  const projectStats = [
    { label: "Total Projects", value: `${projects.length}` },
    {
      label: "In Progress",
      value: `${projects.filter((project) => project.status === "In Progress").length}`,
    },
    {
      label: "Completed",
      value: `${projects.filter((project) => project.status === "Completed").length}`,
    },
    {
      label: "Delayed",
      value: `${projects.filter((project) => project.status === "Delayed").length}`,
    },
  ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-emerald-100 text-emerald-700";
      case "In Progress":
        return "bg-sky-100 text-sky-700";
      case "Delayed":
        return "bg-red-100 text-red-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <AppLayout>
      <Header
        title="Projects"
        subtitle="Track delivery progress, owners, and deadlines."
      />

      <div className="mt-6 space-y-6">
        {loading ? (
          <div className="rounded-2xl bg-white p-8 text-center text-slate-500 shadow-sm">
            Loading projects...
          </div>
        ) : (
          <>
            <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {projectStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-sm font-medium text-slate-500">
                    {stat.label}
                  </p>
                  <h3 className="mt-3 text-3xl font-bold text-slate-900">
                    {stat.value}
                  </h3>
                </div>
              ))}
            </section>

            <section className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Project Tracker
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Current delivery pipeline across active accounts.
                  </p>
                </div>

                <button className="rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                  New Project
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full border-separate border-spacing-y-3">
                  <thead>
                    <tr className="text-left text-sm text-slate-500">
                      <th className="pb-2 font-medium">Project</th>
                      <th className="pb-2 font-medium">Owner</th>
                      <th className="pb-2 font-medium">Deadline</th>
                      <th className="pb-2 font-medium">Progress</th>
                      <th className="pb-2 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((project) => (
                      <tr key={project.name} className="text-sm text-slate-700">
                        <td className="rounded-l-xl bg-slate-50 px-4 py-4 font-medium text-slate-900">
                          {project.name}
                        </td>
                        <td className="bg-slate-50 px-4 py-4">
                          {project.owner}
                        </td>
                        <td className="bg-slate-50 px-4 py-4">
                          {project.deadline}
                        </td>
                        <td className="bg-slate-50 px-4 py-4">
                          <div className="flex items-center gap-3">
                            <div className="h-2 w-28 rounded-full bg-slate-200">
                              <div
                                className="h-2 rounded-full bg-slate-900"
                                style={{ width: `${project.progress}%` }}
                              />
                            </div>
                            <span className="text-xs font-semibold text-slate-600">
                              {project.progress}%
                            </span>
                          </div>
                        </td>
                        <td className="rounded-r-xl bg-slate-50 px-4 py-4">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyles(project.status)}`}
                          >
                            {project.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        )}
      </div>
    </AppLayout>
  );
}

export default Projects;
