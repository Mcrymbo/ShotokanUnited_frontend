import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, Tag, User, Clock, 
  ChevronLeft, ChevronRight, Search,
  Filter, ArrowUpRight
} from 'lucide-react';
import DefaultLayout from '@/layout/DefaultLayout';
import { useNews } from '@/hooks/useNews';
import { formatDate } from '@/utils/dateUtils';

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const itemsPerPage = 9;

  const { 
    news, 
    categories,
    isLoading, 
    error 
  } = useNews({ page: currentPage, category: selectedCategory, search: searchQuery });

  const totalPages = Math.ceil(news?.total / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <DefaultLayout>
      <Helmet>
        <title>News & Updates | HDKI Shotokan Karate</title>
        <meta 
          name="description" 
          content="Stay updated with the latest news, events, and announcements from the HDKI Shotokan Karate community." 
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              News & Updates
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay informed about the latest developments, events, and achievements in our Shotokan Karate community.
            </p>
          </motion.div>
        </div>

        {/* Filters and Search */}
        <div className="max-w-7xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Categories */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 w-full md:w-auto">
              <Filter className="h-5 w-5 text-gray-500" />
              {categories?.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium
                    whitespace-nowrap transition-all duration-200
                    ${selectedCategory === category.slug
                      ? 'bg-wine-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                    }
                  `}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className={`
                  w-full pl-10 pr-4 py-2 rounded-lg border
                  transition-all duration-200
                  ${isSearchFocused
                    ? 'border-wine-600 ring-2 ring-wine-200'
                    : 'border-gray-300'
                  }
                `}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* News Grid */}
        {isLoading ? (
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-sm p-4 animate-pulse"
                >
                  <div className="h-48 bg-gray-200 rounded-lg mb-4" />
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                </div>
              ))}
            </div>
          </div>
        ) : error ? (
          <div className="max-w-7xl mx-auto text-center py-12">
            <p className="text-red-600">
              {error}. Please try again later.
            </p>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news?.map((item) => (
                <motion.article
                  key={item.id}
                  variants={itemVariants}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
                >
                  {/* Image */}
                  <div className="relative h-48">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    {item.category && (
                      <span className="absolute top-4 left-4 px-3 py-1 bg-wine-600 text-white text-sm font-medium rounded-full">
                        {item.category}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(item.publishedAt)}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {item.author}
                      </div>
                    </div>

                    {/* Read More Link */}
                    <div className="mt-4">
                      <a
                        href={`/news/${item.slug}`}
                        className="inline-flex items-center text-wine-600 hover:text-wine-700 font-medium"
                      >
                        Read More
                        <ArrowUpRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`
                      p-2 rounded-lg
                      ${currentPage === 1
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-600 hover:bg-gray-100'
                      }
                    `}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => handlePageChange(index + 1)}
                      className={`
                        px-4 py-2 rounded-lg font-medium
                        ${currentPage === index + 1
                          ? 'bg-wine-600 text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                        }
                      `}
                    >
                      {index + 1}
                    </button>
                  ))}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`
                      p-2 rounded-lg
                      ${currentPage === totalPages
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-600 hover:bg-gray-100'
                      }
                    `}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </nav>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default News;