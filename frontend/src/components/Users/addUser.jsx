import { useForm } from 'react-hook-form';
import { useState, useRef, useEffect } from 'react';
import { useRegister } from '../../hooks';

const AddUser = ({ onUserAdd }) => {
  const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm();
  const { Register } = useRegister();
  
  const [isOpen, setIsOpen] = useState(false);
  
  const trigger = useRef(null);
  const modal = useRef(null);

  const onSubmit = async (data) => {
    try {
      const response = await Register(data);
      onUserAdd(response);
      setIsOpen(false);
      reset();
    } catch (error) {
      console.log(error.message);
    }
  };

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (isOpen && !modal.current.contains(target) && !trigger.current.contains(target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [isOpen]);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (isOpen && keyCode === 27) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, [isOpen]);

  return (
    <>
      <button
        ref={trigger}
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add User
      </button>

      {isOpen && (
        <div className="absolute overflow-y-auto top-30 left-40 w-1/2 flex items-center justify-center shadowed-lg">

          <div ref={modal} className="relative bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
              Sign Up
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='flex space-x-4'>
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Username
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter your username"
                    {...register('username', { required: 'Username is required' })}
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                  {errors.username && (
                    <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Email
                </label>
                <div className="relative">
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
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>
              </div>

              <div className='flex space-x-4'>
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  First Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter your first name (optional)"
                    {...register('first_name')}
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Last Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter your last name (optional)"
                    {...register('last_name')}
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>
              </div>

              <div className='flex space-x-4'>
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Password
                </label>
                <div className="relative">
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
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Re-type Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Re-enter your password"
                    {...register('confirmPassword', {
                      required: 'Please confirm your password',
                      validate: value =>
                        value === getValues('password') || 'Passwords do not match',
                    })}
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
                  )}
                </div>
              </div>
              </div>
              
              <div className="mb-5">
                <input
                  type="submit"
                  value="Create account"
                  className="w-full cursor-pointer rounded-lg border border-primary bg-primary py-2 px-4 text-white transition hover:bg-opacity-90"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddUser;
