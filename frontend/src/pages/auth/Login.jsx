import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import api from "../../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log("Button Clicked");
    try {
      const response = await api.post("/auth/login/", {
        email,
        password,
      });

      localStorage.setItem("access", response.data.access);
localStorage.setItem("refresh", response.data.refresh);
localStorage.setItem("access", response.data.access);


navigate("/dashboard");

console.log("Tokens Saved!");
    } catch (error) {
      console.error("Login Failed");
      console.error(error.response?.data);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-6">

      {/* Background Blobs */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-blue-300 opacity-20 blur-3xl"></div>

      <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-indigo-400 opacity-20 blur-3xl"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl shadow-2xl p-10">

        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-3xl text-white shadow-lg mb-4">
            🚀
          </div>

          <h1 className="text-4xl font-bold text-slate-800">
            SubSync
          </h1>

          <p className="mt-2 text-slate-500">
            Organize. Collaborate. Deliver.
          </p>
        </div>

        {/* Welcome */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800">
            Welcome Back 👋
          </h2>

          <p className="mt-1 text-slate-500">
            Sign in to continue managing your projects.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-5">

          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex justify-end">
            <button
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              Forgot Password?
            </button>
          </div>

          <Button onClick={handleLogin}>
            Sign In
          </Button>

        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-slate-600">
          Don't have an account?{" "}
          <span className="cursor-pointer font-semibold text-blue-600 hover:text-blue-700">
            Register
          </span>
        </p>

      </div>

    </div>
  );
}