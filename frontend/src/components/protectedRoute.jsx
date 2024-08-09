import { Navigate } from "react-router-dom";
import { useUser } from "../hooks";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";

const getStoredUserData = () => {
  const data = localStorage.getItem('userData');
  if (data) {
    try {
      return JSON.parse(data);
    } catch (error) {
      console.error('Error parsing stored user data:', error);
      return null;
    }
  }
  return null;
};

export const ProtectedRoute = ({ children }) => {
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUserData = getStoredUserData();
    if (storedUserData) {
      setUser(storedUserData);
    }
    setLoading(false);
  }, [setUser]);

  useEffect(() => {
    sessionStorage.setItem('previousPath', window.location.pathname);
  }, []);

  if (loading) {
    return <div></div>;
  }

  if (!user || !user.id) {
    sessionStorage.setItem('intendedDestination', window.location.pathname);
    return <Navigate to="/auth/login" />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};