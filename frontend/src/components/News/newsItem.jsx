import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DefaultLayout from '../../layout/DefaultLayout';
import { auth } from '../../hooks'
import Likes from '../like';
import { ChevronLeft, Clock, User, Share2, BookmarkIcon, Eye, MessageCircle, Heart } from 'lucide-react';


export default function SingleNewsPage() {

  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);

  const { id } = useParams();

  const handleNewsDetails = async () => {
    try {
      setLoading(true);
      const response = await auth.get(`/api/news/${id}`);
      setNewsItem(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setError('Failed to load news details');
      setLoading(false);
    }
  };

  const handleRelatedNews = async () => {
    try {
      setLoading(true);
      const response = await auth.get('/api/news');
      setRelatedNews(response.data.results);
      setLoading(false);
    } catch (error) {
      setError("Failed to load other news items");
      console.log(error.message);
    }
  }
  useEffect(() => {
    handleNewsDetails();
    handleRelatedNews();
  }, [id]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 rounded-full"></div>
            <p className="text-gray-600">Loading news details...</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <DefaultLayout>
      <div className="bg-gray-50 min-h-screen">
        <div className="px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2.5fr_1fr] gap-x-4 gap-y-8">
            {/* First Column: Image and Date */}
            <div className='relative'>
              <div className="top-4 md:h-full">
                <div className="relative mb-6 rounded-md overflow-hidden shadow-md">
                  <img
                    src={newsItem?.images[0]?.image_url}
                    alt={newsItem?.title}
                    className="w-full h-[300px] md:h-[400px] object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Author Metadata */}
                <div className="flex items-center gap-2 p-2 md:absolute md:bottom-0">
                  
                  <div className="flex justify-center items-center h-10 w-10 rounded-full bg-white">
                    <User className="w-6 h-6 text-orange-500" />
                  </div>
                  <span className="font-medium">{newsItem?.author}</span>
                </div>
              </div>
            </div>

            {/* Second Column: News Content and Additional Metadata */}
            <div>
              <div className="bg-white p-6 rounded-md shadow-md md:h-full">
                <div className="flex justify-end items-center space-x-3">
                    <Clock className="w-6 h-6 text-orange-500" />
                    <span className="font-medium text-gray-700">{newsItem?.date}</span>
                </div>
                <h1 className="text-3xl font-extrabold text-gray-900 mb-6 leading-tight">
                  {newsItem?.title}
                </h1>
                <p className="text-xl text-gray-700 mb-6 italic">{newsItem?.description}</p>

                <article className="prose max-w-none">
                  {newsItem?.content?.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-800 mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </article>

                {/* Views, Likes, Comments */}
                <div className="mt-8 flex items-center space-x-6 border-t pt-4">
                  <div className="flex items-center space-x-2">
                    <Eye className="w-6 h-6 text-orange-500" />
                    <span>{newsItem?.views} <span className="hidden md:inline">Views</span></span>
                  </div>
                  <Likes newsId={id} newsItem={newsItem} setNewsItem={setNewsItem}>
                    <div className="flex items-center space-x-2">
                      <Heart className="w-6 h-6 text-orange-500" />
                        <span>{newsItem?.likes_count} <span className='hidden md:inline'>Likes</span></span>
                    </div>
                  </Likes>
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-6 h-6 text-orange-500" />
                    <span>{newsItem?.comment_count} <span className='hidden md:inline'>Comments</span></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Column: Related News and Events */}
            <div >
              <div className="space-y-2" style={{ maxHeight: '80%', overflowY: 'auto' }}>
                {/* Related News Section */}
                <div className="bg-white p-6 rounded-t-md shadow-md">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">Related News</h2>
                  {relatedNews.length > 0 ? (
                    <div className="space-y-4">
                      {relatedNews.map((news) => (
                        <div
                          key={news.id}
                          className="flex items-center space-x-4 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <div>
                            <h3 className="text-gray-800 text-xs">{news.title}</h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500">No related news found.</p>
                  )}
                </div>

                {/* Upcoming Events Section */}
                <div className="bg-white p-6 rounded-b-md">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">Upcoming Events</h2>
                  <div className="space-y-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-orange-800">Tech Conference 2024</h3>
                      <p className="text-sm text-gray-600">July 15-17, San Francisco</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-orange-800">Digital Innovation Summit</h3>
                      <p className="text-sm text-gray-600">August 22-24, New York</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="fixed bottom-6 right-6 flex space-x-4">
            <button
              className="bg-white shadow-lg rounded-full p-4 hover:bg-orange-500 hover:text-white transition-all group"
              onClick={() => alert('Share functionality coming soon!')}
            >
              <Share2 className="w-6 h-6 text-gray-600 group-hover:text-white" />
            </button>
            <button
              className="bg-white shadow-lg rounded-full p-4 hover:bg-orange-500 hover:text-white transition-all group"
              onClick={() => alert('Bookmark functionality coming soon!')}
            >
              <BookmarkIcon className="w-6 h-6 text-gray-600 group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
