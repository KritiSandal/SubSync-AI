import ProjectCard from "./ProjectCard";

export default function ProjectList({
  projects,
  deleteProject,
}) {
  if (projects.length === 0) {
    return (
      <div className="rounded-3xl bg-white p-16 text-center shadow-sm">
        <h2 className="text-2xl font-bold text-slate-700">
          No Projects Found
        </h2>

        <p className="mt-2 text-slate-500">
          Create your first project to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          deleteProject={deleteProject}
        />
      ))}
    </div>
  );
}