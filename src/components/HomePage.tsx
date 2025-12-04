import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Sparkles, Search, Users, BookOpen, TrendingUp, Heart, Zap, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function HomePage() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-gray-900/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 mb-8">
              <Sparkles className="w-5 h-5 text-purple-300" />
              <span className="text-purple-200">Welcome to the Community</span>
            </div>
            
            <h1 className="text-white mb-8 max-w-4xl mx-auto bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Share Your Skills, Learn New Hobbies
            </h1>
            
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join our vibrant community of passionate learners and creators. Share resources, 
              discover new hobbies, and connect with like-minded individuals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/post-resource"
                    className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-lg rounded-2xl hover:from-purple-600 hover:to-blue-600 transition-all shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105"
                  >
                    <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                    Share a Resource
                  </Link>
                  <Link
                    to="/browse"
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-purple-400/50 text-white text-lg rounded-2xl hover:bg-white/20 transition-all shadow-xl"
                  >
                    <Search className="w-6 h-6" />
                    Browse Resources
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/signup"
                    className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-lg rounded-2xl hover:from-purple-600 hover:to-blue-600 transition-all shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105"
                  >
                    <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                    Get Started Free
                  </Link>
                  <Link
                    to="/browse"
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-purple-400/50 text-white text-lg rounded-2xl hover:bg-white/20 transition-all shadow-xl"
                  >
                    <Search className="w-6 h-6" />
                    Browse as Guest
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform makes it easy to share your expertise and discover new passions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative text-center p-10 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-white text-2xl mb-4">Create Your Profile</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Sign up and showcase your hobbies, skills, and interests to connect with the community.
                </p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative text-center p-10 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-white text-2xl mb-4">Share Resources</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Post links to your favorite tutorials, tools, articles, and AI resources that helped you learn.
                </p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative text-center p-10 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-white text-2xl mb-4">Discover & Learn</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Browse resources by category, read reviews, and find the perfect materials for your learning journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-purple-900/30"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 mb-6">
                <Heart className="w-5 h-5 text-pink-300" />
                <span className="text-purple-200">Join 10,000+ Happy Learners</span>
              </div>
              
              <h2 className="text-white text-5xl mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Join Our Growing Community
              </h2>
              
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                Connect with passionate learners and creators from around the world. Whether you're into 
                coding, baking, gardening, or AI tools, there's a place for you here.
              </p>
              
              <ul className="space-y-5 mb-10">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-200 text-lg pt-1">Access thousands of curated resources across diverse hobbies</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-200 text-lg pt-1">Discover AI tools specifically tailored to your interests</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-200 text-lg pt-1">Rate and review resources to help others find quality content</span>
                </li>
              </ul>
              
              {!isAuthenticated && (
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-lg rounded-2xl hover:from-purple-600 hover:to-blue-600 transition-all shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105"
                >
                  <Zap className="w-6 h-6" />
                  Create Free Account
                </Link>
              )}
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-3xl blur-2xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758270705317-3ef6142d306f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBjb2xsYWJvcmF0aW9uJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzYzNjQ2NzI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Community learning together"
                className="relative rounded-3xl shadow-2xl w-full h-auto border border-purple-500/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white text-5xl mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Explore Categories
            </h2>
            <p className="text-xl text-gray-300">
              Browse popular categories or explore all resources
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {['Web Development', 'Baking', 'AI Tools', 'Digital Art', 'Photography', 'Music', '3D Printing', 'Gardening'].map((category, index) => {
              const gradients = [
                'from-blue-500 to-cyan-500',
                'from-pink-500 to-rose-500',
                'from-purple-500 to-indigo-500',
                'from-orange-500 to-amber-500',
                'from-teal-500 to-emerald-500',
                'from-violet-500 to-purple-500',
                'from-cyan-500 to-blue-500',
                'from-green-500 to-teal-500',
              ];
              
              return (
                <Link
                  key={category}
                  to={`/browse?category=${encodeURIComponent(category)}`}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-20 rounded-2xl blur-lg group-hover:blur-xl transition-all`}></div>
                  <div className="relative p-8 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl hover:from-gray-700/80 hover:to-gray-800/80 border border-purple-500/20 hover:border-purple-500/40 transition-all text-center">
                    <div className={`w-14 h-14 bg-gradient-to-br ${gradients[index]} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <Star className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-white text-lg">{category}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          
          <div className="text-center">
            <Link
              to="/browse"
              className="inline-flex items-center gap-3 text-purple-300 hover:text-purple-200 text-lg group"
            >
              View All Resources
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
