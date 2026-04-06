import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, Sparkles, Zap, Shield } from "lucide-react";
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
    <div className="min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/50 via-transparent to-blue-900/50 animate-gradient-shift"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-cyan-500/20 rounded-full blur-2xl animate-float-delayed"></div>
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
        
        <div className="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-8 message-fade-in">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4 animate-pulse">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text mb-2">
              Welcome Back
            </h2>
            <p className="text-white/60 text-sm">Enter your credentials to access your account</p>
          </div>

          <form onSubmit={handleOnSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white/80 mb-2 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
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
                className="block text-sm font-medium text-white/80 mb-2 flex items-center gap-2"
              >
                <Lock className="w-4 h-4" />
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-white/60 hover:text-white transition-all duration-200"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 group"
            >
              <Zap className="w-5 h-5 group-hover:animate-pulse" />
              Sign In
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-white/60 text-sm">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold hover:from-blue-300 hover:to-purple-300 transition-all duration-200"
              >
                Create Account
              </Link>
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse delay-100"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(15px) rotate(-120deg); }
          66% { transform: translateY(-10px) rotate(-240deg); }
        }
        
        .animate-gradient-shift {
          background-size: 400% 400%;
          animation: gradient-shift 15s ease infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .delay-100 {
          animation-delay: 100ms;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
