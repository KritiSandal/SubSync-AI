import { Search } from "lucide-react";

export default function SearchBar({
  search,
  setSearch,
}) {
  return (
    <div className="relative w-full md:w-96">

      <Search
        className="absolute left-4 top-3.5 text-slate-400"
        size={18}
      />

      <input
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        placeholder="Search projects..."
        className="
        w-full
        rounded-xl
        border
        border-slate-200
        bg-white
        py-3
        pl-11
        pr-4
        outline-none
        transition
        focus:border-blue-500
        focus:ring-4
        focus:ring-blue-100
        "
      />

    </div>
  );
}