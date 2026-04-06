import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore.js";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
const LoginPage = () => {
  const { login } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const validateForm = () => {
    const { email, password } = formData;
    if (!email.trim()) return toast.error("Email is required.");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return toast.error("Invalid email address.");
    if (!password.trim()) return toast.error("Password cannot be empty.");
    if (password.length < 6)
      return toast.error("Password must be at least 6 characters.");
    return true;
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (validateForm(formData)) login(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen text-white px-4">
      <div className="w-full max-w-md glass backdrop-blur-2xl border border-white/20 rounded-2xl shadow-[0_0_30px_rgba(124,58,237,0.3)] p-8 transition-all duration-300 message-fade-in">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleOnSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white/80 mb-2"
            >
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-white/50 w-5 h-5" />
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-2.5 input-glass rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white/80 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-white/50 w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className="w-full pl-10 pr-10 py-2.5 input-glass rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-white/60 hover:text-white transition-all"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full btn-gradient text-white font-semibold py-2.5 rounded-lg shadow-md transition-all duration-200 hover:shadow-purple-500/30"
          >
            Log In
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-white/60 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-purple-400 hover:text-purple-300 font-medium hover:underline transition-all"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
