import { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import { useAuth } from './useAuth';
import { z } from 'zod'; // For data validation

// Data validation schema
const NewsSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200),
  description: z.string().min(1, 'Description is required').max(500),
  content: z.string().optional(),
  category: z.string().min(1, 'Category is required'),
  is_featured: z.boolean().optional(),
  is_trending: z.boolean().optional(),
  date: z.string().datetime(),
  registration_link: z.string().url().optional().nullable(),
  images: z.array(z.instanceof(File)).optional()
});

export const useNews = ({ page = 1, category = 'all', search = '' } = {}) => {
  const [newsData, setNewsData] = useState({
    items: [],
    total: 0,
    nextPage: null,
    previousPage: null,
    isLoading: true,
    error: null
  });

  const { getAuthHeaders } = useAuth();
  const cache = useRef(new Map());
  const wsRef = useRef(null);
  const abortControllerRef = useRef(null);

  // Cache management
  const getCacheKey = (page, category, search) => `${page}-${category}-${search}`;
  
  const setCachedData = (key, data) => {
    cache.current.set(key, {
      data,
      timestamp: Date.now()
    });
  };

  const getCachedData = (key) => {
    const cached = cache.current.get(key);
    if (!cached) return null;
    
    // Cache expires after 5 minutes
    if (Date.now() - cached.timestamp > 5 * 60 * 1000) {
      cache.current.delete(key);
      return null;
    }
    
    return cached.data;
  };

  // WebSocket connection for real-time updates
  const setupWebSocket = useCallback(() => {
    if (wsRef.current) return;

    const ws = new WebSocket(`${import.meta.env.VITE_API_URL}/ws/news/`);
    
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      
      if (data.type === 'news_update') {
        setNewsData(prev => ({
          ...prev,
          items: prev.items.map(item => 
            item.id === data.news.id ? { ...item, ...data.news } : item
          )
        }));
      } else if (data.type === 'news_create') {
        setNewsData(prev => ({
          ...prev,
          items: [data.news, ...prev.items],
          total: prev.total + 1
        }));
      } else if (data.type === 'news_delete') {
        setNewsData(prev => ({
          ...prev,
          items: prev.items.filter(item => item.id !== data.news_id),
          total: prev.total - 1
        }));
      }
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    wsRef.current = ws;

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
      }
    };
  }, []);

  const fetchNews = useCallback(async (options = {}) => {
    const { silently = false } = options;
    
    try {
      if (!silently) {
        setNewsData(prev => ({ ...prev, isLoading: true, error: null }));
      }

      // Cancel previous request if exists
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      abortControllerRef.current = new AbortController();

      const cacheKey = getCacheKey(page, category, search);
      const cachedData = getCachedData(cacheKey);
      
      if (cachedData && !silently) {
        setNewsData(cachedData);
        return;
      }

      const params = new URLSearchParams({
        page,
        category: category !== 'all' ? category : '',
        search: search.trim()
      });

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/news/?${params}`,
        { 
          headers: getAuthHeaders(),
          signal: abortControllerRef.current.signal
        }
      );

      const transformedNews = response.data.results.map(item => ({
        id: item.id,
        title: item.title,
        slug: item.slug,
        description: item.description,
        content: item.content,
        author: item.author,
        category: item.category,
        isFeatured: item.is_featured,
        isTrending: item.is_trending,
        publishedAt: new Date(item.date),
        createdAt: new Date(item.created_at),
        registrationLink: item.registration_link,
        image: item.images?.[0]?.image_url || null,
        images: item.images?.map(img => ({
          id: img.id,
          url: img.image_url
        })) || []
      }));

      const newData = {
        items: transformedNews,
        total: response.data.count,
        nextPage: response.data.next,
        previousPage: response.data.previous,
        isLoading: false,
        error: null
      };

      setCachedData(cacheKey, newData);
      setNewsData(newData);
    } catch (error) {
      if (error.name === 'AbortError') return;

      setNewsData(prev => ({
        ...prev,
        isLoading: false,
        error: error.response?.data?.message || 'Failed to fetch news'
      }));
    }
  }, [page, category, search, getAuthHeaders]);

  const createNews = async (newsData) => {
    try {
      // Validate data
      await NewsSchema.parseAsync(newsData);

      const formData = new FormData();
      
      Object.keys(newsData).forEach(key => {
        if (key !== 'images') {
          formData.append(key, newsData[key]);
        }
      });

      if (newsData.images?.length) {
        newsData.images.forEach(image => {
          formData.append('images', image);
        });
      }

      // Optimistic update
      const tempId = `temp-${Date.now()}`;
      const optimisticNews = {
        id: tempId,
        ...newsData,
        images: [],
        isLoading: true
      };

      setNewsData(prev => ({
        ...prev,
        items: [optimisticNews, ...prev.items],
        total: prev.total + 1
      }));

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/news/`,
        formData,
        {
          headers: {
            ...getAuthHeaders(),
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      // Update with real data
      setNewsData(prev => ({
        ...prev,
        items: prev.items.map(item => 
          item.id === tempId ? { ...response.data, isLoading: false } : item
        )
      }));

      return response.data;
    } catch (error) {
      // Rollback optimistic update
      setNewsData(prev => ({
        ...prev,
        items: prev.items.filter(item => !item.id.startsWith('temp-')),
        total: prev.total - 1
      }));

      if (error instanceof z.ZodError) {
        throw new Error(error.errors[0].message);
      }
      throw new Error(error.response?.data?.message || 'Failed to create news');
    }
  };

  const updateNews = async (id, newsData) => {
    try {
      const formData = new FormData();
      
      // Add text fields
      Object.keys(newsData).forEach(key => {
        if (key !== 'images') {
          formData.append(key, newsData[key]);
        }
      });

      // Add new images
      if (newsData.images?.length) {
        newsData.images.forEach(image => {
          if (image instanceof File) {
            formData.append('images', image);
          }
        });
      }

      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/news/${id}/`,
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
      throw new Error(error.response?.data?.message || 'Failed to update news');
    }
  };

  const deleteNews = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/news/${id}/`,
        { headers: getAuthHeaders() }
      );
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to delete news');
    }
  };

  const getNewsById = async (id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/news/${id}/`,
        { headers: getAuthHeaders() }
      );

      // Transform the data to match our frontend structure
      return {
        id: response.data.id,
        title: response.data.title,
        slug: response.data.slug,
        description: response.data.description,
        content: response.data.content,
        author: response.data.author,
        category: response.data.category,
        isFeatured: response.data.is_featured,
        isTrending: response.data.is_trending,
        publishedAt: new Date(response.data.date),
        createdAt: new Date(response.data.created_at),
        registrationLink: response.data.registration_link,
        image: response.data.images?.[0]?.image_url || null,
        images: response.data.images?.map(img => ({
          id: img.id,
          url: img.image_url
        })) || []
      };
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch news');
    }
  };

  const toggleLike = async (id) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/news/${id}/like`,
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
        `${import.meta.env.VITE_API_URL}/api/news/${id}/comments`,
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
        `${import.meta.env.VITE_API_URL}/api/news/${newsId}/comments/${commentId}`,
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
        `${import.meta.env.VITE_API_URL}/api/news/${id}/share`,
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
    setupWebSocket();

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [fetchNews, setupWebSocket]);

  // Auto-refresh data every 5 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      fetchNews({ silently: true });
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [fetchNews]);

  return {
    news: newsData.items,
    total: newsData.total,
    nextPage: newsData.nextPage,
    previousPage: newsData.previousPage,
    isLoading: newsData.isLoading,
    error: newsData.error,
    createNews,
    updateNews,
    deleteNews,
    getNewsById,
    toggleLike,
    addComment,
    deleteComment,
    shareNews,
    refetch: fetchNews
  };
};
