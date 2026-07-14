import { Search } from "lucide-react";

export default function SearchFilter({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      <div className="relative w-full md:max-w-md">

        <Search
          size={18}
          className="absolute left-4 top-3.5 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full
            rounded-2xl
            border
            border-slate-200
            bg-white
            py-3
            pl-11
            pr-4
            shadow-sm
            outline-none
            transition
            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-100
          "
        />

      </div>

      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="
          rounded-2xl
          border
          border-slate-200
          bg-white
          px-5
          py-3
          shadow-sm
          outline-none
          transition
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-100
        "
      >
        <option value="all">All Projects</option>
        <option value="active">Active</option>
        <option value="draft">Draft</option>
      </select>

    </div>
  );
}