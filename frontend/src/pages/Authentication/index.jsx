import { Routes, Route, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ActivateAccount from './ActivateAccount';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import Account from './Account';
import { useUser } from '../../hooks';

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Authentication - Shotokan United Kenya</title>
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="container mx-auto px-4 py-8"
      >
        {children}
      </motion.div>
    </div>
  );
};

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-wine-700"></div>
      </div>
    );
  }

  if (!user) {
    sessionStorage.setItem('intendedDestination', window.location.pathname);
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

const PublicRoute = ({ children }) => {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-wine-700"></div>
      </div>
    );
  }

  if (user) {
    return <Navigate to={user.role === 4 ? '/' : '/admin'} replace />;
  }

  return children;
};

const Authentication = () => {
  return (
    <AuthLayout>
      <Routes>
        <Route 
          path="login" 
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          } 
        />
        <Route 
          path="register" 
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          } 
        />
        <Route 
          path="activate" 
          element={
            <PublicRoute>
              <ActivateAccount />
            </PublicRoute>
          } 
        />
        <Route 
          path="forgot-password" 
          element={
            <PublicRoute>
              <ForgotPassword />
            </PublicRoute>
          } 
        />
        <Route 
          path="reset-password" 
          element={
            <PublicRoute>
              <ResetPassword />
            </PublicRoute>
          } 
        />
        <Route 
          path="account" 
          element={
            <PrivateRoute>
              <Account />
            </PrivateRoute>
          } 
        />
        <Route path="*" element={<Navigate to="/auth/login" replace />} />
      </Routes>
    </AuthLayout>
  );
};

export default Authentication;