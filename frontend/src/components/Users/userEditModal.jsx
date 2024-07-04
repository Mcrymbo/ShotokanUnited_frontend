import { useForm } from 'react-hook-form';
import { api } from '../../hooks';

const UserEditModal = ({ isOpen, onCancel, message, user }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      username: user.username,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
    }
  });

  const onSubmit = async (data) => {
    try {
      const response = await api.put(`/api/users/${user.id}/`, data);
      onConfirm();
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full p-6 m-4">
            <p className="text-lg text-center mb-4">{message}</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black">Username</label>
                <div className="relative">
                  <input
                    type="text"
                    {...register('username', { required: 'Username is required' })}
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary"
                  />
                  {errors.username && (
                    <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: 'Invalid email address',
                      },
                    })}
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black">First Name</label>
                <div className="relative">
                  <input
                    type="text"
                    {...register('first_name')}
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black">Last Name</label>
                <div className="relative">
                  <input
                    type="text"
                    {...register('last_name')}
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className='flex justify-between'>
                <div className="">
                    <input
                    type="submit"
                    value="Update User"
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary py-2 px-4 text-white transition hover:bg-opacity-90"
                    />
                </div>
                <button onClick={onCancel} className="bg-neutral-400 text-white px-4 rounded">
                    Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UserEditModal;