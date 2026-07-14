import { Plus } from "lucide-react";

export default function DashboardHeader({
  setOpenModal,
}) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-center">

      <div>

        <h1 className="text-4xl font-black tracking-tight text-slate-800">
          Welcome back, Kriti 👋
        </h1>

        <p className="mt-2 text-lg text-slate-500">
          Manage all your projects from one intelligent workspace.
        </p>

      </div>

      <button
        onClick={() => setOpenModal(true)}
        className="
        flex
        items-center
        gap-2
        rounded-2xl
        bg-blue-600
        px-6
        py-3
        font-semibold
        text-white
        shadow-lg
        transition-all
        hover:-translate-y-1
        hover:bg-blue-700
        "
      >
        <Plus size={20} />

        New Project
      </button>

    </div>
  );
}