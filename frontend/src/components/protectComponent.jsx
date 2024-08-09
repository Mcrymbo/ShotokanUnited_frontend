import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../hooks';
import Alert from './Alert';

export const ProtectedComponent = ({ children, requiredRole }) => {
  const { user } = useUser();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!user || !user.id) {
      setAlertMessage('You need to log in to access this page.');
      setShowAlert(true);
      setRedirect(true); // Set redirect to true
    } else if (user.role !== requiredRole) {
      setAlertMessage('You do not have permission to access this page.');
      setShowAlert(true);
      setRedirect(true); // Set redirect to true
    }
  }, [user, requiredRole]);

  useEffect(() => {
    if (redirect) {
      const timer = setTimeout(() => {
        setRedirect(false);
      }, 30000); // Alert will disappear after 30 seconds

      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }
  }, [redirect]);


  if (redirect) {
    return (
      <>
        <Alert message={alertMessage} onClose={() => setRedirect(false)} />
        <Navigate to='/admin' />
      </>
    );
  }

  return children;
};