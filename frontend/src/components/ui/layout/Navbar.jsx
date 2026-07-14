import { Bell, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    navigate("/");

  };

  return (

<header
className="
sticky
top-0
z-50
border-b
border-slate-200
bg-white/80
backdrop-blur
"
>

<div
className="
mx-auto
flex
max-w-7xl
items-center
justify-between
px-8
py-5
"
>

<div>

<h1
className="
text-3xl
font-black
tracking-tight
text-blue-600
"
>
SubSync AI
</h1>

<p
className="
text-sm
text-slate-500
"
>
Intelligent Project Workspace
</p>

</div>

<div
className="
flex
items-center
gap-5
"
>

<button
className="
rounded-xl
bg-slate-100
p-3
hover:bg-slate-200
"
>

<Bell size={20}/>

</button>

<div
className="
flex
items-center
gap-3
"
>

<div
className="
flex
h-11
w-11
items-center
justify-center
rounded-full
bg-blue-600
font-bold
text-white
"
>

K

</div>

<div>

<p
className="
font-semibold
"
>

Kriti

</p>

<p
className="
text-xs
text-slate-500
"
>

Developer

</p>

</div>

<button
onClick={handleLogout}
className="
rounded-xl
bg-red-500
p-3
text-white
transition
hover:bg-red-600
"
>

<LogOut size={18}/>

</button>

</div>

</div>

</div>

</header>

  );

}