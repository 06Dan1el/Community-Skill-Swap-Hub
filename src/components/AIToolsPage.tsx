import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../contexts/DataContext';
import { Sparkles, Star, ThumbsUp, ExternalLink, Zap } from 'lucide-react';

export default function AIToolsPage() {
  const { resources } = useData();
  const aiResources = resources.filter(r => r.category === 'AI Tools');

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10" />
            </div>
            <h1 className="text-gray-900 mb-4">AI Tools for Your Hobbies</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Discover artificial intelligence tools that can enhance your creative process, 
              accelerate learning, and unlock new possibilities in your favorite hobbies.
            </p>
          </div>
        </div>
      </section>

      {/* Featured AI Categories */}
      <section className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-white mb-8 text-center">AI Tools by Category</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white mb-2">Creative AI</h3>
              <p className="text-gray-400 mb-4">
                AI tools for art generation, music composition, writing assistance, and creative design.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Image & Art Generation</li>
                <li>• Music Composition</li>
                <li>• Content Writing</li>
              </ul>
            </div>
            
            <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white mb-2">Learning AI</h3>
              <p className="text-gray-400 mb-4">
                AI assistants to help you learn new skills faster and more effectively.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Language Learning</li>
                <li>• Code Assistance</li>
                <li>• Tutoring & Explanation</li>
              </ul>
            </div>
            
            <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white mb-2">Productivity AI</h3>
              <p className="text-gray-400 mb-4">
                Tools to automate tasks, organize projects, and boost your efficiency.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Task Automation</li>
                <li>• Project Planning</li>
                <li>• Research Assistance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Resources */}
      <section className="py-12 bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-white mb-2">Recommended AI Tools</h2>
              <p className="text-gray-400">
                Curated by our community of creators and learners
              </p>
            </div>
            <Link
              to="/browse?category=AI%20Tools"
              className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
            >
              View All
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {aiResources.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiResources.slice(0, 6).map((resource) => (
                <div
                  key={resource.id}
                  className="bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-800 hover:border-gray-700"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 bg-purple-900/50 rounded-lg flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-purple-400" />
                      </div>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-gray-300">{resource.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-white mb-2 line-clamp-2">
                      {resource.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-gray-500 mb-4">
                      <span className="text-gray-400">by {resource.authorName}</span>
                      <div className="flex items-center gap-1 text-gray-400">
                        <ThumbsUp className="w-4 h-4" />
                        {resource.upvotes}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link
                        to={`/resource/${resource.id}`}
                        className="flex-1 px-4 py-2 bg-purple-600 text-white text-center rounded-lg hover:bg-purple-700 transition-colors"
                      >
                        View Details
                      </Link>
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        title="Visit resource"
                      >
                        <ExternalLink className="w-5 h-5 text-gray-600" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-gray-900 rounded-lg shadow-lg border border-gray-800 p-12 text-center">
              <Sparkles className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-white mb-2">No AI Tools Yet</h3>
              <p className="text-gray-400 mb-6">
                Be the first to share an AI tool with the community!
              </p>
              <Link
                to="/post-resource"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Sparkles className="w-5 h-5" />
                Share AI Tool
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Why Use AI Section */}
      <section className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-white mb-8 text-center">Why Use AI in Your Hobbies?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white mb-2">Accelerate Learning</h3>
                <p className="text-gray-400">
                  AI tools can provide instant feedback, personalized guidance, and help you 
                  overcome learning plateaus faster than traditional methods.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-white mb-2">Enhance Creativity</h3>
                <p className="text-gray-400">
                  Use AI as a creative partner to generate ideas, explore variations, and 
                  push the boundaries of what's possible in your craft.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-green-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Star className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-white mb-2">Automate Tedious Tasks</h3>
                <p className="text-gray-400">
                  Free up time for the aspects you love by automating repetitive work, 
                  allowing you to focus on the creative and enjoyable parts.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-orange-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white mb-2">Unlock New Possibilities</h3>
                <p className="text-gray-400">
                  Discover techniques and approaches that weren't possible before, 
                  opening up entirely new dimensions in your hobby.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}