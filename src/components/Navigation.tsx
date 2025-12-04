import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Menu, X, User, LogOut, Plus, Search, Info, Mail, Sparkles } from 'lucide-react';

export default function Navigation() {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 shadow-xl sticky top-0 z-50 border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <span className="text-white text-xl">Skill Swap Hub</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/browse" className="text-gray-200 hover:text-white transition-colors flex items-center gap-2 group">
              <div className="p-1 rounded-lg group-hover:bg-white/10 transition-colors">
                <Search className="w-4 h-4" />
              </div>
              Browse
            </Link>
            <Link to="/ai-tools" className="text-gray-200 hover:text-white transition-colors flex items-center gap-2 group">
              <div className="p-1 rounded-lg group-hover:bg-white/10 transition-colors">
                <Sparkles className="w-4 h-4" />
              </div>
              AI Tools
            </Link>
            <Link to="/about" className="text-gray-200 hover:text-white transition-colors flex items-center gap-2 group">
              <div className="p-1 rounded-lg group-hover:bg-white/10 transition-colors">
                <Info className="w-4 h-4" />
              </div>
              About
            </Link>
            <Link to="/contact" className="text-gray-200 hover:text-white transition-colors flex items-center gap-2 group">
              <div className="p-1 rounded-lg group-hover:bg-white/10 transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              Contact
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link
                  to="/post-resource"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full hover:from-purple-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Plus className="w-5 h-5" />
                  Post Resource
                </Link>
                <div className="relative group">
                  <button className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/10">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    {user?.fullName}
                  </button>
                  <div className="absolute right-0 mt-2 w-56 bg-gray-800/95 backdrop-blur-lg rounded-2xl shadow-2xl py-2 hidden group-hover:block border border-purple-500/20">
                    <Link
                      to="/profile"
                      className="block px-6 py-3 text-gray-200 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20 hover:text-white transition-all"
                    >
                      My Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-6 py-3 text-gray-200 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20 hover:text-white flex items-center gap-2 transition-all"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-200 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/10"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full hover:from-purple-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-200 hover:text-white p-2 rounded-lg hover:bg-white/10"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-purple-500/20">
          <div className="px-4 py-4 space-y-2">
            <Link
              to="/browse"
              className="block text-gray-200 hover:text-white py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Browse Resources
            </Link>
            <Link
              to="/ai-tools"
              className="block text-gray-200 hover:text-white py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              AI Tools
            </Link>
            <Link
              to="/about"
              className="block text-gray-200 hover:text-white py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block text-gray-200 hover:text-white py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            {isAuthenticated ? (
              <>
                <Link
                  to="/profile"
                  className="block text-gray-200 hover:text-white py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Profile
                </Link>
                <Link
                  to="/post-resource"
                  className="block text-center py-3 px-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Post Resource
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left text-gray-200 hover:text-white py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20 transition-all"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block text-gray-200 hover:text-white py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block text-center py-3 px-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}