import { api } from "../../hooks";
import PropTypes from 'prop-types'

const DelNews = ({onDel, id, closeModal}) => {
    const handleDelete = async () => {
        try {
          await api.delete(`/api/news/${id}/`);
          onDel(id);
          closeModal();
        } catch (error) {
          console.log(error.message);
        }
      };
  return (
    <div className='flex flex-col gap-4 items-center justify-center'>
        <h1>Are you sure you want to delete this News</h1>
        <div className='flex gap-6'>
            <button className="bg-red-500 py-2 px-4 rounded-md text-white" onClick={handleDelete}>Delete</button>
            <button className="bg-neutral-200 py-2 px-4 rounded-md" onClick={closeModal}>Cancel</button>
        </div>
    </div>
  )
}

DelNews.propTypes = {
  onDel: PropTypes.func.isRequired,
  id: PropTypes.string,
  closeModal: PropTypes.func,
}

export default DelNews;