import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useData } from '../contexts/DataContext';
import { Search, Filter, ThumbsUp, Star, ExternalLink } from 'lucide-react';

export default function BrowseResources() {
  const { resources, categories } = useData();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');

  const filteredResources = useMemo(() => {
    return resources.filter(resource => {
      const matchesSearch = searchQuery === '' || 
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === '' || resource.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [resources, searchQuery, selectedCategory]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params: any = {};
    if (searchQuery) params.q = searchQuery;
    if (selectedCategory) params.category = selectedCategory;
    setSearchParams(params);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const params: any = {};
    if (searchQuery) params.q = searchQuery;
    if (category) params.category = category;
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSearchParams({});
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 mb-6">
            <Search className="w-5 h-5 text-purple-300" />
            <span className="text-purple-200">Discover Resources</span>
          </div>
          <h1 className="text-white mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Browse Resources
          </h1>
          <p className="text-xl text-gray-300">
            Explore curated resources shared by our vibrant community
          </p>
        </div>

        {/* Search and Filter */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl blur-xl"></div>
          <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl border border-purple-500/20 p-8">
            <form onSubmit={handleSearch} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <label htmlFor="search" className="block text-gray-200 text-lg mb-3">
                    Search Resources
                  </label>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-purple-400" />
                    <input
                      type="text"
                      id="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search by title, description, or category..."
                      className="w-full pl-14 pr-6 py-4 bg-gray-900/50 border border-purple-500/30 text-white text-lg rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-500"
                    />
                  </div>
                </div>
                <div className="md:w-80">
                  <label htmlFor="category" className="block text-gray-200 text-lg mb-3 flex items-center gap-2">
                    <Filter className="w-5 h-5 text-purple-400" />
                    Filter by Category
                  </label>
                  <select
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-900/50 border border-purple-500/30 text-white text-lg rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">All Categories</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-lg rounded-2xl hover:from-purple-600 hover:to-blue-600 transition-all shadow-lg"
                >
                  Search
                </button>
                {(searchQuery || selectedCategory) && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="px-8 py-3 bg-gray-700/50 border border-gray-600 text-gray-200 text-lg rounded-2xl hover:bg-gray-600/50 transition-all"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-300 text-lg">
            Showing <span className="text-white font-semibold">{filteredResources.length}</span> {filteredResources.length === 1 ? 'resource' : 'resources'}
            {selectedCategory && <span className="text-purple-300"> in {selectedCategory}</span>}
          </p>
        </div>

        {/* Resource Grid */}
        {filteredResources.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl blur-lg group-hover:blur-xl transition-all"></div>
                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl border border-purple-500/20 hover:border-purple-500/40 transition-all overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-4 py-2 bg-gradient-to-r from-purple-500/30 to-blue-500/30 text-purple-200 rounded-full border border-purple-400/30 text-sm">
                        {resource.category}
                      </span>
                      <div className="flex items-center gap-2 px-3 py-2 bg-yellow-500/20 rounded-full border border-yellow-500/30">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-yellow-200 font-semibold">{resource.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-white text-xl mb-3 line-clamp-2 group-hover:text-purple-200 transition-colors">
                      {resource.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 line-clamp-3 leading-relaxed">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-gray-400 mb-6 pb-6 border-b border-gray-700/50">
                      <span className="text-gray-300">by {resource.authorName}</span>
                      <div className="flex items-center gap-2 px-3 py-1 bg-gray-700/50 rounded-full">
                        <ThumbsUp className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-200">{resource.upvotes}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Link
                        to={`/resource/${resource.id}`}
                        className="flex-1 px-5 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all"
                      >
                        View Details
                      </Link>
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 border border-purple-500/30 rounded-xl hover:bg-purple-500/10 transition-all group/link"
                        title="Visit resource"
                      >
                        <ExternalLink className="w-5 h-5 text-purple-300 group-hover/link:text-purple-200" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl border border-purple-500/20 p-16 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-purple-300" />
              </div>
              <h3 className="text-white text-2xl mb-4">No Resources Found</h3>
              <p className="text-gray-300 text-lg mb-8">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={clearFilters}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-lg rounded-2xl hover:from-purple-600 hover:to-blue-600 transition-all shadow-lg"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
