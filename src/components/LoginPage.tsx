import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LogIn, AlertCircle } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!email || !password) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    const success = await login(email, password);
    setLoading(false);

    if (success) {
      navigate('/profile');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-400 via-blue-400 to-pink-400 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <LogIn className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-white mb-3 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-gray-300 text-lg">Sign in to your account to continue</p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl border border-purple-500/20 p-10">
            {error && (
              <div className="mb-8 p-5 bg-red-500/20 border border-red-500/50 rounded-2xl flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-300 flex-shrink-0 mt-0.5" />
                <p className="text-red-200">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-gray-200 text-lg mb-3">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-4 bg-gray-900/50 border border-purple-500/30 text-white text-lg rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-500"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-gray-200 text-lg mb-3">
                  Password <span className="text-red-400">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-5 py-4 bg-gray-900/50 border border-purple-500/30 text-white text-lg rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-500"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-lg rounded-2xl hover:from-purple-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-300 text-lg">
                Don't have an account?{' '}
                <Link to="/signup" className="text-purple-300 hover:text-purple-200 font-semibold">
                  Sign up here
                </Link>
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700/50">
              <p className="text-gray-400 text-center">
                Demo: Use any registered email/password or create a new account
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}