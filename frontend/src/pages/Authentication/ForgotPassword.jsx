import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, AlertCircle, ArrowLeft, CheckCircle } from 'lucide-react';
import auth from '../../utils/auth';

const ForgotPassword = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError('');

    try {
      await auth.post('/api/auth/password-reset/', {
        email: data.email
      });
      setIsSuccess(true);
      reset();
    } catch (error) {
      setError(
        error.response?.data?.detail || 
        'An error occurred. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Forgot Password
        </h1>
        <p className="text-gray-600">
          Enter your email address and we'll send you instructions to reset your password.
        </p>
      </div>

      {isSuccess ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
        >
          <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Check Your Email
          </h2>
          <p className="text-gray-600 mb-6">
            We've sent password reset instructions to your email address.
            Please check your inbox and follow the link to reset your password.
          </p>
          <Link
            to="/auth/login"
            className="inline-flex items-center text-wine-700 hover:text-wine-800"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to Sign In
          </Link>
        </motion.div>
      ) : (
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
            {isSubmitting ? 'Sending...' : 'Send Reset Instructions'}
          </button>

          <div className="text-center">
            <Link 
              to="/auth/login"
              className="inline-flex items-center text-wine-700 hover:text-wine-800"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Sign In
            </Link>
          </div>
        </motion.form>
      )}
    </div>
  );
};

export default ForgotPassword;
