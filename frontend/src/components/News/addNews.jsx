import { useForm } from 'react-hook-form';
import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { api } from '../../hooks';

const AddNews = ({ onNewsAdd }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  
  const [isOpen, setIsOpen] = useState(false);
  
  const trigger = useRef(null);
  const modal = useRef(null);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('date', data.date);
      formData.append('description', data.description);
      if (data.file[0]) {
        formData.append('cover_image', data.file[0]);
      }

      const response = await api.post('/api/news/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      onNewsAdd(response.data);
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
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
              Title
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter the title"
                {...register('title', { required: 'Title is required' })}
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
              Date scheduled
            </label>
            <div className="relative">
              <input
                type="date"
                {...register('date', { required: 'Date is required' })}
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
              {errors.date && (
                <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
              Description
            </label>
            <div className="relative">
              <textarea
                type="text"
                placeholder="Enter the description"
                {...register('description')}
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
              Cover Image
            </label>
            <div className="relative">
              <input
                type="file"
                {...register('file')}
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>

        <div className="mb-5">
          <input
            type="submit"
            value="Add News"
            className="w-full cursor-pointer rounded-lg border border-primary bg-primary py-2 px-4 text-white transition hover:bg-opacity-90"
          />
        </div>
      </form>
    </>
  );
};

AddNews.propTypes = {
  onNewsAdd: PropTypes.func.isRequired,
};

export default AddNews;