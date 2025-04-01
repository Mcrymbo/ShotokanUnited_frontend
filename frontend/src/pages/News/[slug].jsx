import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, User, Clock, Share2, 
  Facebook, Twitter, LinkedIn, Link as LinkIcon,
  MessageCircle, ThumbsUp, Flag, ArrowLeft,
  Bookmark, BookmarkCheck
} from 'lucide-react';
import DefaultLayout from '../../layout/DefaultLayout';
import { useArticle, useComments } from '../../hooks';
import { formatDate, timeAgo } from '../../utils/dateUtils';
import { ShareModal } from '../../components/Modals';
import { CommentForm } from '../../components/Forms';
import { RichTextRenderer } from '../../components/RichText';

const NewsArticle = () => {
  const { slug } = useParams();
  const [showShareModal, setShowShareModal] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [commentSort, setCommentSort] = useState('newest');

  const { 
    article, 
    isLoading: articleLoading, 
    error: articleError 
  } = useArticle(slug);

  const {
    comments,
    isLoading: commentsLoading,
    error: commentsError,
    addComment,
    likeComment,
    reportComment
  } = useComments(slug);

  useEffect(() => {
    // Check if article is bookmarked
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    setIsBookmarked(bookmarks.includes(slug));
  }, [slug]);

  const handleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    if (isBookmarked) {
      const newBookmarks = bookmarks.filter(b => b !== slug);
      localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
    } else {
      bookmarks.push(slug);
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = article.title;
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
    };

    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  if (articleError) {
    return (
      <DefaultLayout>
        <div className="min-h-screen bg-gray-50 py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-red-600 text-lg">
              {articleError}. Please try again later.
            </p>
            <Link 
              to="/news"
              className="mt-4 inline-flex items-center text-wine-600 hover:text-wine-700"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to News
            </Link>
          </div>
        </div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <Helmet>
        <title>{article?.title || 'Loading...'} | HDKI News</title>
        <meta name="description" content={article?.excerpt} />
        {/* Open Graph tags */}
        <meta property="og:title" content={article?.title} />
        <meta property="og:description" content={article?.excerpt} />
        <meta property="og:image" content={article?.image} />
        <meta property="og:url" content={window.location.href} />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Back Button */}
          <Link 
            to="/news"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to News
          </Link>

          {articleLoading ? (
            <div className="space-y-4 animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-3/4" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
              <div className="h-96 bg-gray-200 rounded" />
            </div>
          ) : (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              {/* Hero Image */}
              <div className="relative h-96">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                {article.category && (
                  <span className="absolute top-4 left-4 px-4 py-2 bg-wine-600 text-white text-sm font-medium rounded-full">
                    {article.category}
                  </span>
                )}
              </div>

              {/* Article Content */}
              <div className="p-8">
                {/* Title and Meta */}
                <div className="mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {article.title}
                  </h1>
                  
                  <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(article.publishedAt)}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime} min read
                    </div>
                  </div>
                </div>

                {/* Actions Bar */}
                <div className="flex items-center justify-between py-4 border-t border-b border-gray-100 mb-8">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setShowShareModal(true)}
                      className="flex items-center text-gray-600 hover:text-gray-900"
                    >
                      <Share2 className="h-5 w-5 mr-1" />
                      Share
                    </button>
                    <button
                      onClick={handleBookmark}
                      className="flex items-center text-gray-600 hover:text-gray-900"
                    >
                      {isBookmarked ? (
                        <BookmarkCheck className="h-5 w-5 mr-1 text-wine-600" />
                      ) : (
                        <Bookmark className="h-5 w-5 mr-1" />
                      )}
                      {isBookmarked ? 'Saved' : 'Save'}
                    </button>
                  </div>
                </div>

                {/* Article Body */}
                <div className="prose prose-lg max-w-none">
                  <RichTextRenderer content={article.content} />
                </div>

                {/* Tags */}
                {article.tags && article.tags.length > 0 && (
                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map(tag => (
                        <Link
                          key={tag}
                          to={`/news/tag/${tag}`}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200"
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.article>
          )}

          {/* Comments Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Comments ({comments?.length || 0})
            </h2>

            {/* Comment Form */}
            <CommentForm onSubmit={addComment} />

            {/* Comment Sort */}
            <div className="flex items-center justify-between mt-8 mb-4">
              <select
                value={commentSort}
                onChange={(e) => setCommentSort(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>

            {/* Comments List */}
            {commentsLoading ? (
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-2" />
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                  </div>
                ))}
              </div>
            ) : commentsError ? (
              <p className="text-red-600">
                Error loading comments. Please try again.
              </p>
            ) : (
              <div className="space-y-6">
                {comments.map((comment) => (
                  <motion.div
                    key={comment.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white rounded-lg p-6 shadow-sm"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <img
                          src={comment.author.avatar}
                          alt={comment.author.name}
                          className="h-10 w-10 rounded-full"
                        />
                        <div className="ml-3">
                          <p className="font-medium text-gray-900">
                            {comment.author.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {timeAgo(comment.createdAt)}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => reportComment(comment.id)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <Flag className="h-5 w-5" />
                      </button>
                    </div>
                    <p className="mt-4 text-gray-600">
                      {comment.content}
                    </p>
                    <div className="mt-4 flex items-center space-x-4">
                      <button
                        onClick={() => likeComment(comment.id)}
                        className="flex items-center text-gray-500 hover:text-wine-600"
                      >
                        <ThumbsUp className="h-5 w-5 mr-1" />
                        {comment.likes}
                      </button>
                      <button className="flex items-center text-gray-500 hover:text-wine-600">
                        <MessageCircle className="h-5 w-5 mr-1" />
                        Reply
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Share Modal */}
      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        onShare={handleShare}
        url={window.location.href}
        title={article?.title}
      />
    </DefaultLayout>
  );
};

export default NewsArticle;
