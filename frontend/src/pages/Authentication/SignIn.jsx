import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Eye, EyeOff, Mail, Lock, 
  AlertCircle, ArrowRight 
} from 'lucide-react';
import DefaultLayout from '../../layout/DefaultLayout';
import { useLogin } from '../../hooks';
import { useUser } from '../../hooks';
import { sparrow_fight } from '../../assets';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset,
    setFocus
  } = useForm({ mode: 'onBlur' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useLogin();
  const { user } = useUser();

  // Get intended destination from session storage or location state
  const dest = location.state?.from || sessionStorage.getItem('intendedDestination');

  useEffect(() => {
    setFocus('email');
    // Clear any success messages from previous operations
    if (location.state?.message) {
      const timer = setTimeout(() => {
        navigate(location.pathname, { replace: true, state: {} });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [setFocus, location, navigate]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError('');

    try {
      await login(data);
      reset();
      // Navigate to intended destination or default based on role
      navigate(dest || (user?.role === 4 ? '/' : '/admin'));
      sessionStorage.removeItem('intendedDestination');
    } catch (error) {
      if (error.response?.status === 401) {
        setError('Invalid email or password');
      } else if (error.response?.status === 403) {
        setError('Account is not activated. Please check your email.');
      } else {
        setError('An error occurred. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DefaultLayout>
      <div className="min-h-screen flex flex-col lg:flex-row bg-gray-50">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md space-y-8"
          >
            {/* Header */}
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                Welcome Back
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Sign in to continue to your account
              </p>
            </div>

            {/* Success Message */}
            {location.state?.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2"
              >
                <CheckCircle className="w-5 h-5 text-green-600" />
                <p className="text-green-700">{location.state.message}</p>
              </motion.div>
            )}

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2"
              >
                <AlertCircle className="w-5 h-5 text-red-600" />
                <p className="text-red-700">{error}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Email Input */}
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    className={`
                      block w-full pl-10 pr-4 py-2.5 rounded-lg border 
                      transition duration-300 ease-in-out
                      ${errors.email 
                        ? 'border-red-500 text-red-600 placeholder-red-300 focus:ring-2 focus:ring-red-500' 
                        : 'border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-wine-500 focus:border-wine-500'
                      }
                    `}
                    {...register('email', { 
                      required: 'Email is required', 
                      pattern: {
                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    </div>
                  )}
                </div>
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password Input */}
              <div>
                <label 
                  htmlFor="password" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    className={`
                      block w-full pl-10 pr-10 py-2.5 rounded-lg border 
                      transition duration-300 ease-in-out
                      ${errors.password 
                        ? 'border-red-500 text-red-600 placeholder-red-300 focus:ring-2 focus:ring-red-500' 
                        : 'border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-wine-500 focus:border-wine-500'
                      }
                    `}
                    {...register('password', { 
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters'
                      }
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Forgot Password Link */}
              <div className="text-right">
                <Link 
                  to="/auth/forgot-password" 
                  className="text-sm text-wine-700 hover:text-wine-800 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full py-3 px-4 flex items-center justify-center space-x-2
                  rounded-lg text-white font-medium
                  transition duration-300 ease-in-out
                  transform hover:scale-[1.02]
                  ${isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-wine-700 hover:bg-wine-800'
                  }
                `}
              >
                <span>{isSubmitting ? 'Signing in...' : 'Sign In'}</span>
                {!isSubmitting && <ArrowRight className="w-5 h-5" />}
              </button>
            </form>

            {/* Alternative Sign-In */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link 
                  to="/auth/register" 
                  className="font-medium text-wine-700 hover:text-wine-800 hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="hidden lg:block lg:w-1/2 bg-gray-100">
          <div className="h-full flex items-center justify-center p-8">
            <motion.img 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={sparrow_fight} 
              alt="Shotokan Karate" 
              className="max-h-[500px] w-full object-contain rounded-lg shadow-lg" 
            />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SignIn;