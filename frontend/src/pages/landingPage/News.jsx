import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { auth } from '../../hooks';
import { Calendar, ArrowRight, Tag, User } from 'lucide-react';
import { hdki_cover } from '../../assets';

export default function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await auth.get('/api/news/');
      setNews(response.data.results);
    } catch (error) {
      setError('Failed to load news. Please try again later.');
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="card bg-white shadow-lg animate-pulse">
            <div className="h-48 bg-wine-100 rounded-t-xl"></div>
            <div className="p-6 space-y-4">
              <div className="h-4 bg-wine-100 rounded w-3/4"></div>
              <div className="h-4 bg-wine-100 rounded w-1/2"></div>
              <div className="h-4 bg-wine-100 rounded w-full"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-wine-700 mb-4">{error}</div>
        <button onClick={fetchNews} className="btn btn-primary">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {news.slice(0, 3).map((article, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group"
        >
          <Link to={`/news/${article.id}`} className="block">
            <div className="card bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Image Section */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img 
                  src={article.images[0]?.image_url || hdki_cover}
                  alt={article.title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wine-dark/80 via-wine-dark/40 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-gold/90 text-white text-sm font-semibold rounded-full backdrop-blur-sm">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Meta Information */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-jetGray">
                    <Calendar className="w-4 h-4 text-wine-600" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-jetGray">
                    <User className="w-4 h-4 text-wine-600" />
                    <span>{article.author}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-jet mb-3 line-clamp-2 group-hover:text-wine-700 transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-jetGray line-clamp-3 mb-4">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags?.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center gap-1 text-xs font-medium text-wine-700 bg-wine-100 px-2 py-1 rounded-full"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Link */}
                <div className="flex items-center justify-end gap-2 text-wine-700 font-semibold group-hover:text-wine-800 transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
