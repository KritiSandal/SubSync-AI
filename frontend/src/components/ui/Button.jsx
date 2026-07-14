export default function Button({
  children,
  type = "button",
  onClick,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        w-full
        rounded-2xl
        bg-blue-600
        px-5
        py-3.5
        font-semibold
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-blue-700
        hover:shadow-xl
        active:translate-y-0
        ${className}
      `}
    >
      {children}
    </button>
  );
}