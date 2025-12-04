import React from 'react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Users, Target, Lightbulb } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-4">About Skill Swap Hub</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            A community-driven platform where passionate learners share knowledge, 
            resources, and experiences to help each other grow.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We believe that everyone has something valuable to teach and something exciting to learn. 
                Skill Swap Hub was created to break down the barriers to learning by connecting people 
                who share similar passions and interests.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Whether you're into coding, baking, gardening, or exploring AI tools, our platform 
                makes it easy to discover curated resources shared by real people who have walked 
                the same learning path.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We're building more than just a resource library – we're creating a supportive 
                community where learning is collaborative, accessible, and fun.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcGVvcGxlJTIwdGVhbXdvcmt8ZW58MXx8fHwxNzYzNTgzNDEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Community collaboration"
                className="rounded-lg shadow-2xl w-full h-auto border border-gray-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-white mb-12 text-center">What We Stand For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-900 rounded-lg border border-gray-800">
              <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-white mb-2">Community First</h3>
              <p className="text-gray-400">
                We prioritize building genuine connections and fostering a supportive environment 
                where everyone feels welcome.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-900 rounded-lg border border-gray-800">
              <div className="w-16 h-16 bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-white mb-2">Passion-Driven</h3>
              <p className="text-gray-400">
                We celebrate the joy of learning and the enthusiasm that comes from pursuing 
                what you love.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-900 rounded-lg border border-gray-800">
              <div className="w-16 h-16 bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-white mb-2">Quality Over Quantity</h3>
              <p className="text-gray-400">
                We focus on curated, high-quality resources that have been vetted and recommended 
                by real learners.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-900 rounded-lg border border-gray-800">
              <div className="w-16 h-16 bg-orange-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-white mb-2">Innovation</h3>
              <p className="text-gray-400">
                We embrace new technologies like AI to enhance learning experiences and unlock 
                new possibilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-white mb-12 text-center">How Skill Swap Hub Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-800 rounded-lg border border-gray-700">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span>1</span>
              </div>
              <h3 className="text-white mb-3">Join the Community</h3>
              <p className="text-gray-400">
                Create your free account and set up your profile with your hobbies and interests. 
                Tell us what you're passionate about!
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-800 rounded-lg border border-gray-700">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span>2</span>
              </div>
              <h3 className="text-white mb-3">Share & Discover</h3>
              <p className="text-gray-400">
                Post links to resources that helped you learn, or browse what others have shared. 
                Rate and comment on resources to help the community.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-800 rounded-lg border border-gray-700">
              <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span>3</span>
              </div>
              <h3 className="text-white mb-3">Grow Together</h3>
              <p className="text-gray-400">
                Connect with like-minded learners, exchange feedback, and watch your skills 
                flourish with community support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Ready to Join?</h2>
          <p className="text-xl text-gray-100 mb-8">
            Start your learning journey today and become part of our growing community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Create Free Account
            </Link>
            <Link
              to="/browse"
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Browse Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}