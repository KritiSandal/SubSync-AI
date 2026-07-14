import { Trash2, ArrowRight } from "lucide-react";

export default function ProjectCard({
  project,
  deleteProject,
}) {
  const badgeColor =
    project.status === "active"
      ? "bg-green-100 text-green-700"
      : "bg-yellow-100 text-yellow-700";

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">

      <div className="flex items-start justify-between">

        <div>
          <h3 className="text-xl font-bold text-slate-800">
            {project.title}
          </h3>

          <p className="mt-2 text-slate-500">
            {project.description}
          </p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeColor}`}
        >
          {project.status}
        </span>

      </div>

      <div className="mt-6 flex items-center justify-between">

        <button
          onClick={() => deleteProject(project.id)}
          className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-2 text-red-600 hover:bg-red-100"
        >
          <Trash2 size={18} />
          Delete
        </button>

        <button className="flex items-center gap-2 text-blue-600 font-semibold">
          View
          <ArrowRight size={18} />
        </button>

      </div>

    </div>
  );
}