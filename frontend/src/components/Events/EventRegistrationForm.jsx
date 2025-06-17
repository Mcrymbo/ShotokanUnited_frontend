import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, CheckCircle, User, Calendar, ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';

export default function EventRegistrationForm({ eventId, eventTitle }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dietaryRestrictions: '',
      specialRequirements: '',
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError('');

    try {
      // Simulated API call - replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate 90% success rate for demonstration
      if (Math.random() > 0.1) {
        setIsSuccess(true);
        setTimeout(() => {
          navigate('/');
        }, 3000);
      } else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      setError('Failed to register. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white">
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center py-8"
          >
            <div className="flex justify-center mb-6">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Registration Successful!
            </h2>
            <p className="text-gray-600 mb-8">
              You have successfully registered for {eventTitle}. We'll send you a confirmation email shortly.
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-wine-100">
                <Calendar className="w-6 h-6 text-wine-700" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Event Registration
                </h2>
                <p className="text-gray-600">{eventTitle}</p>
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 mb-6 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-700"
              >
                <AlertCircle className="w-5 h-5" />
                <span>{error}</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    {...register('firstName', { required: 'First name is required' })}
                    className={`w-full px-4 py-2.5 rounded-lg border ${errors.firstName ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-wine-500'} focus:outline-none focus:ring-2 focus:ring-opacity-50 ${errors.firstName ? 'focus:ring-red-200' : 'focus:ring-wine-200'}`}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    {...register('lastName', { required: 'Last name is required' })}
                    className={`w-full px-4 py-2.5 rounded-lg border ${errors.lastName ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-wine-500'} focus:outline-none focus:ring-2 focus:ring-opacity-50 ${errors.lastName ? 'focus:ring-red-200' : 'focus:ring-wine-200'}`}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className={`w-full px-4 py-2.5 rounded-lg border ${errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-wine-500'} focus:outline-none focus:ring-2 focus:ring-opacity-50 ${errors.email ? 'focus:ring-red-200' : 'focus:ring-wine-200'}`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[\d\s-+()]{10,}$/,
                        message: 'Invalid phone number',
                      },
                    })}
                    className={`w-full px-4 py-2.5 rounded-lg border ${errors.phone ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-wine-500'} focus:outline-none focus:ring-2 focus:ring-opacity-50 ${errors.phone ? 'focus:ring-red-200' : 'focus:ring-wine-200'}`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dietary Restrictions
                </label>
                <textarea
                  {...register('dietaryRestrictions')}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-wine-500 focus:outline-none focus:ring-2 focus:ring-wine-200 focus:ring-opacity-50"
                  rows="3"
                  placeholder="Please list any dietary restrictions or allergies"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requirements
                </label>
                <textarea
                  {...register('specialRequirements')}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-wine-500 focus:outline-none focus:ring-2 focus:ring-wine-200 focus:ring-opacity-50"
                  rows="3"
                  placeholder="Any special requirements or accommodations needed"
                />
              </div>

              <div className="flex justify-end pt-6">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`btn btn-primary w-full md:w-auto ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Registering...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <span>Complete Registration</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}