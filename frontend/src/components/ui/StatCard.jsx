import { ArrowUpRight } from "lucide-react";

export default function StatCard({
  icon,
  title,
  value,
}) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-slate-200
      bg-white
      p-6
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-xl
      "
    >

      <div className="flex items-center justify-between">

        <div
          className="
          rounded-xl
          bg-blue-100
          p-3
          text-blue-600
          "
        >
          {icon}
        </div>

        <ArrowUpRight
          size={18}
          className="text-slate-400"
        />

      </div>

      <p
        className="
        mt-5
        text-sm
        font-medium
        text-slate-500
        "
      >
        {title}
      </p>

      <h2
        className="
        mt-2
        text-4xl
        font-bold
        text-slate-800
        "
      >
        {value}
      </h2>

    </div>
  );
}