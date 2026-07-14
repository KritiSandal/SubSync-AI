import { useEffect, useMemo, useState } from "react";
import api from "../../services/api";

import Navbar from "../../components/ui/layout/Navbar";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import DashboardStats from "../../components/dashboard/DashboardStats";
import SearchFilter from "../../components/dashboard/SearchFilter";
import ProjectList from "../../components/dashboard/ProjectList";
import CreateProjectModal from "../../components/projects/CreateProjectModal";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [subscription, setSubscription] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const token = localStorage.getItem("access");

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const projectResponse = await api.get("/projects/", config);
      const subscriptionResponse = await api.get("/subscription/", config);

      setProjects(projectResponse.data.results || []);
      setSubscription(subscriptionResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProject = async (id) => {
    if (!window.confirm("Delete this project?")) return;

    try {
      const token = localStorage.getItem("access");

      await api.delete(`/projects/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchDashboard();
    } catch (error) {
      console.error(error);
    }
  };

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "all" ||
        project.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [projects, search, statusFilter]);

  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <main className="mx-auto max-w-7xl px-8 py-10">

        <DashboardHeader
          setOpenModal={setOpenModal}
        />

        <SearchFilter
          search={search}
          setSearch={setSearch}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />

        <DashboardStats
          projects={projects}
          subscription={subscription}
        />

        <div className="mb-5">
          <h2 className="text-3xl font-bold text-slate-800">
            Recent Projects
          </h2>

          <p className="mt-1 text-slate-500">
            Manage all your active workspaces.
          </p>
        </div>

        <ProjectList
          projects={filteredProjects}
          deleteProject={deleteProject}
        />

      </main>

      <CreateProjectModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSuccess={fetchDashboard}
      />

    </div>
  );
}