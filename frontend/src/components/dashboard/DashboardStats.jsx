import {
  FolderOpen,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import StatCard from "../ui/StatCard";

export default function DashboardStats({
  projects,
  subscription,
}) {

  const activeProjects = projects.filter(
    (p) => p.status === "active"
  ).length;

  return (
    <div className="mb-10 grid gap-6 md:grid-cols-3">

      <StatCard
        icon={<FolderOpen size={22} />}
        title="Projects"
        value={projects.length}
      />

      <StatCard
        icon={<CheckCircle2 size={22} />}
        title="Active"
        value={activeProjects}
      />

      <StatCard
        icon={<Sparkles size={22} />}
        title="AI Credits"
        value={subscription?.ai_credits || 0}
      />

    </div>
  );
}