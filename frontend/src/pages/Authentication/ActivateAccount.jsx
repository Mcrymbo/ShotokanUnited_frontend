import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ActivateAccount = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  // Function to parse query parameters
  const getQueryParams = (query) => {
    return query
      .substring(1)
      .split('&')
      .reduce((acc, param) => {
        const [key, value] = param.split('=');
        acc[key] = decodeURIComponent(value);
        return acc;
      }, {});
  };

  useEffect(() => {
    const params = getQueryParams(location.search);
    const { uid, token } = params;

    const activateAccount = async () => {
      try {
        await axios.post(`http://localhost:8000/auth/users/activation/`, {
          uid,
          token,
        });
        setMessage('Account activated successfully!');
      } catch (error) {
        setMessage('Activation failed. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    activateAccount();
  }, [location.search]);

  const handleLoginRedirect = () => {
    navigate('/auth/login');
  };

  return (
    <div className="activation-container">
      {loading ? (
        <p>Activating your account...</p>
      ) : (
        <>
          <p>{message}</p>
          {message === 'Account activated successfully!' && (
            <button onClick={handleLoginRedirect}>Go to Login</button>
          )}
        </>
      )}
    </div>
  );
};

export default ActivateAccount;