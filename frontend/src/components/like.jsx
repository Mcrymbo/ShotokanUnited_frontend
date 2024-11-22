import { useState } from 'react';
import { useUser, api } from '../hooks';

const Likes = ({ newsId, newsItem, setNewsItem, children }) => {
  const [error, setError] = useState('');
  const { user } = useUser();
  const [hasLiked, setHasLiked] = useState(
    newsItem?.liked_by?.includes(user?.id) || false
  );

  const handleClick = async () => {
    try {
      const response = await api.post(`api/news/${newsId}/like/`);

      // Toggle like state
      setHasLiked(!hasLiked);

      if (response.status === 201) {
        setNewsItem((prev) => ({
          ...prev,
          likes_count: prev.likes_count + 1,
        }));
      } else if (response.status === 200) {
        setNewsItem((prev) => ({
          ...prev,
          likes_count: prev.likes_count - 1,
        }));
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div>
      <button onClick={handleClick}>
        {children}
      </button>
    </div>
  );
};

export default Likes;
