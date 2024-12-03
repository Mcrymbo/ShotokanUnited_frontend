import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, AlertCircle } from 'lucide-react';
import DefaultLayout from '../../layout/DefaultLayout';
import { useLogin } from '../../hooks';
import { useUser } from '../../hooks';

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
      <div className="bg-inherit flex items-center justify-center">
        <div className="max-w-md w-full bg-white shadow-sm rounded-md overflow-hidden">
          <div className="p-6 space-y-6">
            <h2 className="text-center text-3xl font-semibold text-gray-900">Sign In</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className={`w-full pl-10 pr-4 py-2 rounded-lg border transition ${
                      errors.email 
                        ? 'border-red-500 text-red-600 placeholder-red-300 focus:ring-red-500 focus:border-red-500' 
                        : 'border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500'
                    }`}
                    {...register('email', { 
                      required: 'Email is required', 
                      pattern: {
                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-500" />}
                </div>
                {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative mt-1">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className={`w-full pl-10 pr-10 py-2 rounded-lg border transition ${
                      errors.password 
                        ? 'border-red-500 text-red-600 placeholder-red-300 focus:ring-red-500 focus:border-red-500' 
                        : 'border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500'
                    }`}
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
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                  </button>
                </div>
                {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Sign In
              </button>
            </form>

            {/* Alternative Sign-In */}
            <div className="flex items-center justify-center mt-6">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to="/auth/register" className="font-medium text-orange-500 hover:text-orange-600">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SignIn;