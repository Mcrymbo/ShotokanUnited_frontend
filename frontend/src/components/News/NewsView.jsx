import PropTypes from 'prop-types';

const NewsView = ({ news }) => {
  return (
    <>
        <div>
          <div className='flex flex-col'>
            <div className="mb-2">
              <strong>Title:</strong> {news?.title}
            </div>
            <div className="mb-2">
              <img src={news?.cover_image_url} alt="" className='object-cover w-full h-100' />
            </div>
            <div className="mb-2">
              <strong>Date:</strong> {news?.date}
            </div>
            <div className="mb-2">
              <strong>Description:</strong> {news?.description || 'N/A'}
            </div>
          </div>
        </div>
    </>
  );
};

NewsView.propTypes = {
  news: PropTypes.object.isRequired,
}

export default NewsView;