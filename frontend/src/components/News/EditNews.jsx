import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { api } from '../../hooks';

const NewsEdit = ({ onEdit, news, closeModal }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: news?.title,
      date: news?.date,
      description: news?.description,
      cover_image: news?.cover_image,
    }
  });

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('date', data.date);
      formData.append('description', data.description);
      if (data.file[0]) {
        formData.append('cover_image', data.file[0]);
      }

      const response = await api.put(`/api/news/${news.id}/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      onEdit(response.data);
      closeModal();
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className="mb-2.5 block font-medium text-black">Title</label>
        <div className="relative">
          <input
            type="text"
            {...register('title', { required: 'Title is required' })}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>
      </div>

      <div className="mb-4">
        <label className="mb-2.5 block font-medium text-black">Date</label>
        <div className="relative">
          <input
            type="date"
            {...register('date', { required: 'Date is required' })}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary"
          />
          {errors.date && (
            <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
          )}
        </div>
      </div>

      <div className="mb-4">
        <label className="mb-2.5 block font-medium text-black">Description</label>
        <div className="relative">
          <textarea
            type="text"
            {...register('description')}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="mb-2.5 block font-medium text-black">Cover Image</label>
        <div className="relative">
          <input
            type="file"
            {...register('file')}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary"
          />
        </div>
      </div>

      <div className='flex justify-between'>
        <div className="">
          <input
            type="submit"
            value="Update News"
            className="w-full cursor-pointer rounded-lg border border-primary bg-primary py-2 px-4 text-white transition hover:bg-opacity-90"
          />
        </div>
        <button onClick={closeModal} className="bg-neutral-400 text-white px-4 rounded">
          Cancel
        </button>
      </div>
    </form>
  );
};

NewsEdit.propTypes = {
  onEdit: PropTypes.func.isRequired,
  news: PropTypes.object,
  closeModal: PropTypes.func,
}

export default NewsEdit;