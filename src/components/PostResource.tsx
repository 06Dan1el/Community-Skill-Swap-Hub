import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useData } from '../contexts/DataContext';
import { Plus, AlertCircle, CheckCircle } from 'lucide-react';

export default function PostResource() {
  const { user } = useAuth();
  const { addResource, categories } = useData();
  const navigate = useNavigate();
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [link, setLink] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!title || !description || !category || !link) {
      setError('Please fill in all required fields');
      return;
    }

    // Basic URL validation
    try {
      new URL(link);
    } catch {
      setError('Please enter a valid URL');
      return;
    }

    if (user) {
      addResource({
        title,
        description,
        category,
        link,
        authorId: user.id,
        authorName: user.fullName,
      });

      setSuccess(true);
      setTimeout(() => {
        navigate('/browse');
      }, 2000);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-950 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-white mb-2">Share a Resource</h1>
          <p className="text-gray-400">
            Help others learn by sharing your favorite tools, tutorials, and resources
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg shadow-lg border border-gray-800 p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-900/20 border border-red-800 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-red-300">{error}</p>
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-green-900/20 border border-green-800 rounded-lg flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-green-300">Resource posted successfully! Redirecting...</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-gray-300 mb-2">
                Resource Title <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Complete Web Development Course"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-gray-300 mb-2">
                Category <span className="text-red-400">*</span>
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-gray-300 mb-2">
                Description <span className="text-red-400">*</span>
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe what makes this resource valuable and who would benefit from it..."
                rows={5}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                required
              />
            </div>

            <div>
              <label htmlFor="link" className="block text-gray-300 mb-2">
                Resource Link <span className="text-red-400">*</span>
              </label>
              <input
                type="url"
                id="link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="https://example.com/resource"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <p className="mt-1 text-gray-500">
                Enter the full URL including https://
              </p>
            </div>

            <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4">
              <p className="text-blue-300">
                <strong>Tip:</strong> Add resources like online courses, GitHub repositories, 
                tutorials, articles, books, tools, or any helpful content related to your hobbies and skills.
              </p>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-5 h-5" />
                Post Resource
              </button>
              <button
                type="button"
                onClick={() => navigate('/browse')}
                className="px-6 py-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
