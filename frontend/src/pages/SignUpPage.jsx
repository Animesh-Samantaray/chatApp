import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore';
import { MessageSquare, Mail, User, Lock, Eye, EyeOff, Sparkles, Zap, Rocket } from 'lucide-react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '', email: '', password: ''
  });
  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    const { fullName, email, password } = formData;

    if (!fullName.trim()) {
      toast.error('Please enter your full name.');
      return false;
    }

    if (!email.trim()) {
      toast.error('Email is required.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return false;
    }

    if (!password.trim()) {
      toast.error('Password cannot be empty.');
      return false;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long.');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      signup(formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/50 via-transparent to-purple-900/50 animate-gradient-shift"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-cyan-500/20 rounded-full blur-2xl animate-float-delayed"></div>
      </div>

      {/* Signup Card */}
      <div className="relative z-10 w-full max-w-md">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
        
        <div className="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-8 message-fade-in">

          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mb-4 animate-pulse">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text mb-2">
              Create Account
            </h1>
            <p className="text-white/60 text-sm">
              Join the conversation and connect with friends
            </p>
          </div>

          {/* Form Section */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2 flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2 flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Password <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-white/60 hover:text-white transition-all duration-200"
                >
                  {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                </button>
              </div>
              <span className="text-xs text-white/50 mt-1 block">Must be at least 6 characters</span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSigningUp}
              className={`w-full py-3 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/30 active:scale-[.98] transition-all duration-300 flex items-center justify-center gap-2 group ${
                isSigningUp ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02]'
              }`}
            >
              <Sparkles className={`w-5 h-5 ${!isSigningUp ? 'group-hover:animate-pulse' : ''}`} />
              {isSigningUp ? 'Creating Account...' : 'Sign Up'}
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-white/60 text-sm mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text font-semibold hover:from-purple-300 hover:to-blue-300 transition-all duration-200">
              Sign In
            </Link>
          </p>

          {/* Decorative Elements */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse delay-100"></div>
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
  )
}

export default SignUpPage;
