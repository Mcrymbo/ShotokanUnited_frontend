import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { api } from '../../hooks';

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

    console.log("UID:", uid);
    console.log("Token:", token);

    const activateAccount = async () => {
      try {
        const response = await api.post(`/auth/users/activation/`, {
          uid,
          token,
        });
        console.log("Activation Response:", response.data);
        setMessage('Account activated successfully!');
      } catch (error) {
        console.error("Activation Error:", error);
        if (error.response && error.response.data) {
          setMessage(error.response.data.detail || 'Activation failed. Please try again.');
        } else {
          setMessage('Activation failed. Please try again.');
        }
      } finally {
        setLoading(false);
      }
    };

    activateAccount();
  }, [location.search]);

  useEffect(() => {
    if (message === 'Account activated successfully!') {
      const timer = setTimeout(() => {
        navigate('/auth/login');
      }, 5000); // Redirect after 5 seconds
      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }
  }, [message, navigate]);

  return (
    <div className="activation-container">
      {loading ? (
        <p>Activating your account...</p>
      ) : (
        <>
          <p>{message}</p>
          {message === 'Account activated successfully!' && (
            <button onClick={() => navigate('/auth/login')}>Go to Login</button>
          )}
        </>
      )}
    </div>
  );
};

export default ActivateAccount;