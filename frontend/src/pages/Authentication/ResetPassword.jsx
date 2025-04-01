import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react';
import auth from '../../utils/auth';

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    watch
  } = useForm();

  // Get token and uid from URL parameters
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');
  const uid = searchParams.get('uid');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError('');

    try {
      await auth.post('/api/auth/password-reset/confirm/', {
        token,
        uid,
        new_password: data.password
      });

      // Show success message and redirect
      setTimeout(() => {
        navigate('/auth/login', { 
          state: { message: 'Password reset successful. Please sign in with your new password.' } 
        });
      }, 2000);
    } catch (error) {
      setError(
        error.response?.data?.detail || 
        'An error occurred. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!token || !uid) {
    return (
      <div className="max-w-md mx-auto text-center">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Invalid Reset Link
        </h2>
        <p className="text-gray-600 mb-6">
          The password reset link is invalid or has expired.
          Please request a new password reset link.
        </p>
        <button
          onClick={() => navigate('/auth/forgot-password')}
          className="text-wine-700 hover:text-wine-800"
        >
          Request New Reset Link
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Reset Password
        </h1>
        <p className="text-gray-600">
          Please enter your new password below.
        </p>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {/* New Password */}
        <div>
          <label 
            htmlFor="password" 
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            New Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your new password"
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
                  value: 8,
                  message: 'Password must be at least 8 characters'
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: 'Password must include uppercase, lowercase, number and special character'
                }
              })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="mt-2 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label 
            htmlFor="confirmPassword" 
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Confirm Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm your new password"
              className={`
                block w-full pl-10 pr-10 py-2.5 rounded-lg border 
                transition duration-300 ease-in-out
                ${errors.confirmPassword 
                  ? 'border-red-500 text-red-600 placeholder-red-300 focus:ring-2 focus:ring-red-500' 
                  : 'border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-wine-500 focus:border-wine-500'
                }
              `}
              {...register('confirmPassword', { 
                required: 'Please confirm your password',
                validate: value => value === watch('password') || 'Passwords do not match'
              })}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showConfirmPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="mt-2 text-sm text-red-600">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`
            w-full py-3 px-4 rounded-lg
            transition duration-300 ease-in-out
            transform hover:scale-[1.02]
            ${isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-wine-700 hover:bg-wine-800 text-white'
            }
          `}
        >
          {isSubmitting ? 'Resetting...' : 'Reset Password'}
        </button>
      </motion.form>
    </div>
  );
};

export default ResetPassword;
