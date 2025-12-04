import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useData } from '../contexts/DataContext';
import { 
  ThumbsUp, 
  Star, 
  ExternalLink, 
  MessageSquare, 
  ArrowLeft,
  Calendar,
  User
} from 'lucide-react';

export default function ResourceDetail() {
  const { id } = useParams<{ id: string }>();
  const { user, isAuthenticated } = useAuth();
  const { getResourceById, upvoteResource, rateResource, addComment } = useData();
  const navigate = useNavigate();
  
  const resource = id ? getResourceById(id) : undefined;
  const [comment, setComment] = useState('');
  const [userRating, setUserRating] = useState(0);
  const [hasUpvoted, setHasUpvoted] = useState(false);
  const [hasRated, setHasRated] = useState(false);

  if (!resource) {
    return (
      <div className="min-h-[calc(100vh-4rem)] bg-gray-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-lg shadow-lg border border-gray-800 p-12 text-center">
            <h2 className="text-white mb-4">Resource Not Found</h2>
            <p className="text-gray-400 mb-6">
              The resource you're looking for doesn't exist or has been removed.
            </p>
            <Link
              to="/browse"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Browse
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleUpvote = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    if (!hasUpvoted && id) {
      upvoteResource(id);
      setHasUpvoted(true);
    }
  };

  const handleRating = (rating: number) => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    if (!hasRated && id) {
      rateResource(id, rating);
      setUserRating(rating);
      setHasRated(true);
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    if (comment.trim() && user && id) {
      addComment(id, {
        userId: user.id,
        userName: user.fullName,
        text: comment,
      });
      setComment('');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-950 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        {/* Resource Card */}
        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-800">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12 text-white">
            <div className="flex items-start justify-between mb-4">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                {resource.category}
              </span>
              <div className="flex items-center gap-4">
                <button
                  onClick={handleUpvote}
                  disabled={hasUpvoted}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    hasUpvoted
                      ? 'bg-white/20 cursor-not-allowed'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  <ThumbsUp className={`w-5 h-5 ${hasUpvoted ? 'fill-current' : ''}`} />
                  {resource.upvotes + (hasUpvoted ? 1 : 0)}
                </button>
              </div>
            </div>
            <h1 className="text-white mb-4">{resource.title}</h1>
            <div className="flex items-center gap-4 text-blue-100">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {resource.authorName}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formatDate(resource.createdAt)}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Description */}
            <div className="mb-8">
              <h2 className="text-white mb-4">About This Resource</h2>
              <p className="text-gray-300 leading-relaxed">{resource.description}</p>
            </div>

            {/* Link */}
            <div className="mb-8 p-6 bg-blue-900/20 border border-blue-800 rounded-lg">
              <p className="text-gray-300 mb-3">Access this resource:</p>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Visit Resource
              </a>
            </div>

            {/* Rating Section */}
            <div className="mb-8 p-6 bg-gray-800 border border-gray-700 rounded-lg">
              <h3 className="text-white mb-4">Rate This Resource</h3>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => handleRating(rating)}
                      disabled={hasRated}
                      className={`transition-colors ${
                        hasRated ? 'cursor-not-allowed' : 'cursor-pointer hover:scale-110'
                      }`}
                    >
                      <Star
                        className={`w-8 h-8 ${
                          (hasRated ? userRating : resource.rating) >= rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <div className="text-gray-400">
                  <span className="text-white">
                    {hasRated ? userRating.toFixed(1) : resource.rating.toFixed(1)}
                  </span>
                  {' '}/ 5.0
                  <span className="text-gray-500 ml-2">
                    ({resource.ratingCount + (hasRated ? 1 : 0)} {resource.ratingCount + (hasRated ? 1 : 0) === 1 ? 'rating' : 'ratings'})
                  </span>
                </div>
              </div>
              {!isAuthenticated && (
                <p className="mt-3 text-gray-500">
                  <Link to="/login" className="text-blue-400 hover:text-blue-300">
                    Sign in
                  </Link>
                  {' '}to rate this resource
                </p>
              )}
            </div>

            {/* Comments Section */}
            <div>
              <h3 className="text-white mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Comments ({resource.comments.length})
              </h3>

              {/* Comment Form */}
              {isAuthenticated ? (
                <form onSubmit={handleCommentSubmit} className="mb-6">
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Share your thoughts about this resource..."
                    rows={3}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical mb-3"
                  />
                  <button
                    type="submit"
                    disabled={!comment.trim()}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Post Comment
                  </button>
                </form>
              ) : (
                <div className="mb-6 p-4 bg-gray-800 border border-gray-700 rounded-lg text-center">
                  <p className="text-gray-400">
                    <Link to="/login" className="text-blue-400 hover:text-blue-300">
                      Sign in
                    </Link>
                    {' '}to leave a comment
                  </p>
                </div>
              )}

              {/* Comments List */}
              <div className="space-y-4">
                {resource.comments.length > 0 ? (
                  resource.comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="p-4 bg-gray-800 rounded-lg border border-gray-700"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-white">{comment.userName}</span>
                        <span className="text-gray-500">
                          {formatDate(comment.createdAt)}
                        </span>
                      </div>
                      <p className="text-gray-300">{comment.text}</p>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    No comments yet. Be the first to share your thoughts!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}