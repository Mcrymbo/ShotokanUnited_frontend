import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, AlertCircle } from 'lucide-react';
import DefaultLayout from '../../layout/DefaultLayout';
import { useLogin } from '../../hooks';
import { useUser } from '../../hooks';
import { sparrow_fight } from '../../assets';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm({ mode: 'onBlur' });
  const navigate = useNavigate();
  const { login } = useLogin();
  const { user } = useUser();
  const dest = sessionStorage.getItem('intendedDestination');
  
  const onSubmit = async (data) => {
    try {
      await login(data);
      reset();
      navigate(dest || (user?.role === 4 ? '/' : '/admin'));
      sessionStorage.removeItem('intendedDestination');
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <DefaultLayout>
      <div className="min-h-screen flex flex-col lg:flex-row bg-gray-50">
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                Welcome Back
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Sign in to continue to your account
              </p>
            </div>

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
                    placeholder="Enter your email"
                    className={`
                      block w-full pl-10 pr-4 py-2.5 rounded-lg border 
                      transition duration-300 ease-in-out
                      ${errors.email 
                        ? 'border-red-500 text-red-600 placeholder-red-300 focus:ring-2 focus:ring-red-500' 
                        : 'border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500'
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
                    placeholder="Enter your password"
                    className={`
                      block w-full pl-10 pr-10 py-2.5 rounded-lg border 
                      transition duration-300 ease-in-out
                      ${errors.password 
                        ? 'border-red-500 text-red-600 placeholder-red-300 focus:ring-2 focus:ring-red-500' 
                        : 'border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500'
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
                    aria-label="Toggle password visibility"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
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
                  className="text-sm text-orange-500 hover:text-orange-600 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="
                  w-full py-3 px-4 
                  bg-orange-500 text-white 
                  rounded-lg 
                  hover:bg-orange-600 
                  focus:outline-none 
                  focus:ring-2 focus:ring-offset-2 focus:ring-orange-500
                  transition duration-300 ease-in-out
                  transform hover:scale-[1.02]
                "
              >
                Sign In
              </button>
            </form>

            {/* Alternative Sign-In */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link 
                  to="/auth/register" 
                  className="font-medium text-orange-500 hover:text-orange-600 hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden lg:block lg:w-1/2 bg-gray-100">
          <div className="h-full flex items-center justify-center p-8">
            <img 
              src={sparrow_fight} 
              alt="sparrow" 
              className="
                max-h-[500px] w-full object-contain 
                rounded-lg shadow-lg 
                transition duration-300 ease-in-out 
                transform hover:scale-105
              " 
            />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SignIn;