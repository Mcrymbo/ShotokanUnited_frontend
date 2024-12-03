import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import DefaultLayout from '../../layout/DefaultLayout';
import { useRegister } from '../../hooks';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm();

  const { Register } = useRegister();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await Register(data);
      reset();
    } catch (error) {
      console.log(error.message);
    }
    navigate('/activate');
  };

  return (
    <DefaultLayout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full space-y-8 bg-white shadow-lg rounded-lg p-6 sm:p-8">
          <h2 className="text-center text-2xl font-bold text-gray-800">Create an Account</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Username Field */}
            <div>
              <label className="block text-sm font-medium text-gray-800">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                {...register('username', { required: 'Username is required' })}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              {errors.username && (
                <p className="text-sm text-red-500 mt-1">{errors.username.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-800">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: 'Invalid email address',
                  },
                })}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* First Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-800">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter your first name (optional)"
                {...register('first_name')}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {/* Last Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-800">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter your last name (optional)"
                {...register('last_name')}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-800">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters long',
                  },
                })}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-800">
                Re-type Password
              </label>
              <input
                type="password"
                placeholder="Re-enter your password"
                {...register('confirmPassword', {
                  required: 'Please confirm your password',
                  validate: value =>
                    value === getValues('password') || 'Passwords do not match',
                })}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              {errors.confirmPassword && (
                <p className="text-sm text-red-500 mt-1">{errors.confirmPassword.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <input
                type="submit"
                value="Create Account"
                className="w-full py-3 bg-orange-500 text-white rounded-lg shadow-lg cursor-pointer transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Google Sign-Up */}
            <button className="w-full flex items-center justify-center gap-2 p-3 border border-gray-300 rounded-lg text-gray-800 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Google Icon */}
                <g clipPath="url(#clip0_191_13499)">
                  <path
                    d="M19.999 10.2217C20.0111 9.53428 19.9387 8.84788 19.7834 8.17737H10.2031V11.8884H15.8266C15.7201 12.5391 15.4804 13.162 15.1219 13.7195C14.7634 14.2771 14.2935 14.7578 13.7405 15.1328L13.7209 15.2571L16.7502 17.5568L16.96 17.5774C18.8873 15.8329 19.9986 13.2661 19.9986 10.2217"
                    fill="#4285F4"
                  />
                  <path
                    d="M10.2055 19.9999C12.9605 19.9999 15.2734 19.111 16.9629 17.5777L13.7429 15.1331C12.8813 15.7221 11.7248 16.1333 10.2055 16.1333C8.91513 16.1259 7.65991 15.7205 6.61791 14.9745C5.57592 14.2286 4.80007 13.1801 4.40044 11.9777L4.28085 11.9877L1.13101 14.3765L1.08984 14.4887C1.93817 16.1456 3.24007 17.5386 4.84997 18.5118C6.45987 19.4851 8.31429 20.0004 10.2059 19.9999"
                    fill="#34A853"
                  />
                  {/* Additional Paths */}
                </g>
              </svg>
              Sign up with Google
            </button>

            {/* Sign-In Link */}
            <p className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/auth/login" className="text-orange-500 hover:underline">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SignUp;
