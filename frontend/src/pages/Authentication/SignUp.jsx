import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Eye, EyeOff, Mail, Lock, User, 
  AlertCircle, Phone, CheckCircle, ArrowRight 
} from 'lucide-react';
import DefaultLayout from '../../layout/DefaultLayout';
import { useRegister } from '../../hooks';
import { karate_stance } from '../../assets';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    message: '',
    color: 'gray'
  });

  const { 
    register, 
    handleSubmit, 
    watch,
    formState: { errors }, 
    reset,
    setFocus
  } = useForm({ mode: 'onBlur' });

  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { register: registerUser } = useRegister();
  const password = watch('password', '');

  useEffect(() => {
    setFocus('firstName');
  }, [setFocus]);

  // Password strength checker
  useEffect(() => {
    if (!password) {
      setPasswordStrength({ score: 0, message: '', color: 'gray' });
      return;
    }

    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    const strengthMap = {
      0: { message: 'Very Weak', color: 'red' },
      1: { message: 'Weak', color: 'red' },
      2: { message: 'Fair', color: 'yellow' },
      3: { message: 'Good', color: 'green' },
      4: { message: 'Strong', color: 'green' },
      5: { message: 'Very Strong', color: 'green' }
    };

    setPasswordStrength({
      score,
      ...strengthMap[score]
    });
  }, [password]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError('');

    try {
      await registerUser({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        password: data.password
      });

      reset();
      navigate('/auth/signin', { 
        state: { 
          message: 'Registration successful! Please check your email to verify your account.' 
        } 
      });
    } catch (error) {
      if (error.response?.status === 409) {
        setError('An account with this email already exists');
      } else if (error.response?.status === 400) {
        setError('Invalid information provided. Please check your details.');
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
                Create Account
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Join our community of karate practitioners
              </p>
            </div>

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
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                      className={`
                        block w-full pl-10 pr-4 py-2.5 rounded-lg border
                        ${errors.firstName ? 'border-red-500' : 'border-gray-300'}
                      `}
                      {...register('firstName', { 
                        required: 'First name is required',
                        pattern: {
                          value: /^[A-Za-z\s]+$/,
                          message: 'First name should only contain letters'
                        }
                      })}
                    />
                  </div>
                  {errors.firstName && (
                    <p className="mt-2 text-sm text-red-600">{errors.firstName.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                      className={`
                        block w-full pl-10 pr-4 py-2.5 rounded-lg border
                        ${errors.lastName ? 'border-red-500' : 'border-gray-300'}
                      `}
                      {...register('lastName', { 
                        required: 'Last name is required',
                        pattern: {
                          value: /^[A-Za-z\s]+$/,
                          message: 'Last name should only contain letters'
                        }
                      })}
                    />
                  </div>
                  {errors.lastName && (
                    <p className="mt-2 text-sm text-red-600">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    className={`
                      block w-full pl-10 pr-4 py-2.5 rounded-lg border
                      ${errors.email ? 'border-red-500' : 'border-gray-300'}
                    `}
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                </div>
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Phone Number"
                    className={`
                      block w-full pl-10 pr-4 py-2.5 rounded-lg border
                      ${errors.phone ? 'border-red-500' : 'border-gray-300'}
                    `}
                    {...register('phone', { 
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[0-9+\-\s()]+$/,
                        message: 'Invalid phone number'
                      }
                    })}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    className={`
                      block w-full pl-10 pr-10 py-2.5 rounded-lg border
                      ${errors.password ? 'border-red-500' : 'border-gray-300'}
                    `}
                    {...register('password', { 
                      required: 'Password is required',
                      minLength: {
                        value: 8,
                        message: 'Password must be at least 8 characters'
                      },
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message: 'Password must contain uppercase, lowercase, number and special character'
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
                {/* Password Strength Indicator */}
                {password && (
                  <div className="mt-2">
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-300 bg-${passwordStrength.color}-500`}
                        style={{ width: `${(passwordStrength.score / 5) * 100}%` }}
                      />
                    </div>
                    <p className={`text-sm mt-1 text-${passwordStrength.color}-600`}>
                      {passwordStrength.message}
                    </p>
                  </div>
                )}
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>
                )}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm Password"
                    className={`
                      block w-full pl-10 pr-10 py-2.5 rounded-lg border
                      ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}
                    `}
                    {...register('confirmPassword', { 
                      required: 'Please confirm your password',
                      validate: value => value === password || 'Passwords do not match'
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-2 text-sm text-red-600">{errors.confirmPassword.message}</p>
                )}
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
                <span>{isSubmitting ? 'Creating Account...' : 'Create Account'}</span>
                {!isSubmitting && <ArrowRight className="w-5 h-5" />}
              </button>
            </form>

            {/* Sign In Link */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link 
                  to="/auth/signin" 
                  className="font-medium text-wine-700 hover:text-wine-800 hover:underline"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="hidden lg:block lg:w-1/2 bg-gray-100">
          <div className="h-full flex items-center justify-center">
            <motion.img 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={karate_stance} 
              alt="Karate Stance" 
              className="w-full object-contain rounded-lg shadow-lg" 
            />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SignUp;