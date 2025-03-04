import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import DefaultLayout from '../../layout/DefaultLayout';
import { auth } from '../../hooks';
import { teddy_bear } from '../../assets';

const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors }, getValues, reset, watch } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const navigate = useNavigate();
  const { token } = useParams();
  const userType = watch('user_type'); // Watch for user_type changes

  const onSubmit = async (data) => {
    try {
      await auth.post(`api/register/${token}/`, data);
      reset();
      navigate('/');
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Something went wrong. Please try again.';
    }
  };

  return (
    <DefaultLayout>
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Image Container */}
        <div className="md:w-1/2 flex items-center justify-center">
          <img 
            src={teddy_bear} 
            alt="Sign Up" 
            className="w-full h-full object-cover md:rounded-l-md max-h-96 md:max-h-full"
          />
        </div>

        {/* Form Container */}
        <div className="md:w-1/2 flex items-center justify-center p-6 sm:p-8 bg-white">
          <div className="w-full max-w-md">
            <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
              Join The Team
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">Email</label>
                <input
                  type="email"
                  autoFocus
                  placeholder="Enter your email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: 'Invalid email address',
                    },
                  })}
                  className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* First Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">First Name</label>
                <input
                  type="text"
                  placeholder="Enter your first name (optional)"
                  {...register('first_name')}
                  className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              {/* Last Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter your last name (optional)"
                  {...register('last_name')}
                  className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              {/* User Type Field */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">User Type</label>
                <select
                  {...register('user_type', { required: 'User type is required' })}
                  className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Select User Type</option>
                  <option value="player">Player</option>
                  <option value="coach">Coach</option>
                </select>
                {errors.user_type && (
                  <p className="text-sm text-red-500 mt-1">{errors.user_type.message}</p>
                )}
              </div>

              {/* Conditional Fields for Player */}
              {userType === 'player' && (
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">Belt Rank</label>
                  <input
                    type="text"
                    placeholder="Enter your belt rank"
                    {...register('belt_rank', { required: 'Belt rank is required for players' })}
                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                  {errors.belt_rank && (
                    <p className="text-sm text-red-500 mt-1">{errors.belt_rank.message}</p>
                  )}

                  <label className="block text-sm font-medium text-gray-800 mb-1">Dojo</label>
                  <input
                    type="text"
                    placeholder="Enter your dojo"
                    {...register('dojo')}
                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                  {errors.belt_rank && (
                    <p className="text-sm text-red-500 mt-1">{errors.dojo.message}</p>
                  )}
                </div>
              )}

              {/* Conditional Fields for Player */}
              {userType === 'coach' && (
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">Certifications</label>
                  <textarea
                    type="text"
                    placeholder="Enter your belt rank"
                    {...register('certifications', { required: 'coach certifications is required for coach' })}
                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                  {errors.certifications && (
                    <p className="text-sm text-red-500 mt-1">{errors.certifications.message}</p>
                  )}
                </div>
              )}

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters long',
                      },
                    })}
                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-500"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
                )}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">Re-type Password</label>
                <div className="relative">
                <input
                  type={showPassword1 ? 'text' : 'password'}
                  placeholder="Re-enter your password"
                  {...register('confirmPassword', {
                    required: 'Please confirm your password',
                    validate: value =>
                      value === getValues('password') || 'Passwords do not match',
                  })}
                  className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
                <button
                    type="button"
                    onClick={() => setShowPassword1(!showPassword1)}
                    className="absolute right-3 top-3 text-gray-500"
                  >
                    {showPassword1 ? 'Hide' : 'Show'}
                  </button>
                  </div>
                {errors.confirmPassword && (
                  <p className="text-sm text-red-500 mt-1">{errors.confirmPassword.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <input
                  type="submit"
                  value="JOIN"
                  className="w-full py-3 bg-orange-500 text-white rounded-lg shadow-lg cursor-pointer transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default RegistrationForm;
