import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useAuth } from './useAuth';

export const useNews = ({ page = 1, category = 'all', search = '' } = {}) => {
  const [news, setNews] = useState({
    items: [],
    total: 0,
    categories: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getAuthHeaders } = useAuth();

  const fetchCategories = useCallback(async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/news/categories`,
        { headers: getAuthHeaders() }
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  }, [getAuthHeaders]);

  const fetchNews = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const params = new URLSearchParams({
        page,
        limit: 9, // Items per page
        category: category !== 'all' ? category : '',
        search: search.trim()
      });

      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/news?${params}`,
        { headers: getAuthHeaders() }
      );

      const categories = await fetchCategories();

      setNews({
        items: response.data.items.map(item => ({
          ...item,
          publishedAt: new Date(item.publishedAt),
          updatedAt: new Date(item.updatedAt)
        })),
        total: response.data.total,
        categories
      });
    } catch (error) {
      setError(
        error.response?.data?.message || 
        'An error occurred while fetching news'
      );
    } finally {
      setIsLoading(false);
    }
  }, [page, category, search, getAuthHeaders, fetchCategories]);

  const createNews = async (newsData) => {
    try {
      const formData = new FormData();
      
      // Append text fields
      Object.keys(newsData).forEach(key => {
        if (key !== 'image') {
          formData.append(key, newsData[key]);
        }
      });

      // Append image if exists
      if (newsData.image) {
        formData.append('image', newsData.image);
      }

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/news`,
        formData,
        {
          headers: {
            ...getAuthHeaders(),
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || 
        'Failed to create news article'
      );
    }
  };

  const updateNews = async (id, newsData) => {
    try {
      const formData = new FormData();
      
      // Append text fields
      Object.keys(newsData).forEach(key => {
        if (key !== 'image') {
          formData.append(key, newsData[key]);
        }
      });

      // Append image if exists
      if (newsData.image instanceof File) {
        formData.append('image', newsData.image);
      }

      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/news/${id}`,
        formData,
        {
          headers: {
            ...getAuthHeaders(),
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || 
        'Failed to update news article'
      );
    }
  };

  const deleteNews = async (id) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/news/${id}`,
        { headers: getAuthHeaders() }
      );
    } catch (error) {
      throw new Error(
        error.response?.data?.message || 
        'Failed to delete news article'
      );
    }
  };

  const getNewsById = async (id) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/news/${id}`,
        { headers: getAuthHeaders() }
      );

      return {
        ...response.data,
        publishedAt: new Date(response.data.publishedAt),
        updatedAt: new Date(response.data.updatedAt)
      };
    } catch (error) {
      throw new Error(
        error.response?.data?.message || 
        'Failed to fetch news article'
      );
    }
  };

  const toggleLike = async (id) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/news/${id}/like`,
        {},
        { headers: getAuthHeaders() }
      );
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || 
        'Failed to toggle like'
      );
    }
  };

  const addComment = async (id, content) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/news/${id}/comments`,
        { content },
        { headers: getAuthHeaders() }
      );
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || 
        'Failed to add comment'
      );
    }
  };

  const deleteComment = async (newsId, commentId) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/news/${newsId}/comments/${commentId}`,
        { headers: getAuthHeaders() }
      );
    } catch (error) {
      throw new Error(
        error.response?.data?.message || 
        'Failed to delete comment'
      );
    }
  };

  const shareNews = async (id, platform) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/news/${id}/share`,
        { platform },
        { headers: getAuthHeaders() }
      );
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || 
        'Failed to share news'
      );
    }
  };

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return {
    news: news.items,
    total: news.total,
    categories: news.categories,
    isLoading,
    error,
    createNews,
    updateNews,
    deleteNews,
    getNewsById,
    toggleLike,
    addComment,
    deleteComment,
    shareNews
  };
};
