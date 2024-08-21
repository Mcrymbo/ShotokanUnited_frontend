import { api } from "../../hooks";
import { useEffect, useState } from "react";
import AddNews from "./addNews";
import Modal from "../modal";
import NewsView from "./NewsView";
import NewsEdit from "./EditNews";
import DelNews from "./DelNews";

const ListNews = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [previousPageUrl, setPreviousPageUrl] = useState(null);
  const countPerPage = 10;

  useEffect(() => {
    handleNews(currentPage);
  }, [currentPage]);

  const truncateText = (text, wordLimit) => {
    if (!text) return '';
    
    const words = text.split(' ');
    if (words.length <= wordLimit) {
      return text;
    } else {
      return words.slice(0, wordLimit).join(' ') + ' ...'
    }
  }

  const handleNews = async (page) => {
    try {
      const response = await api.get('/api/news/', {
        params: {
          page: page,
        },
      });
      setNews(response.data.results);
      setNextPageUrl(response.data.next);
      setPreviousPageUrl(response.data.previous);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onNewsAdd = (newNews) => {
    setNews((prevNews) => [...prevNews, newNews]);
  };

  const handleDelete = (newsId) => {
    setNews((prevNews) => prevNews.filter(news => news.id !== newsId));
  }

  const handleEdit = (editedNews) => {
    setNews(prevNews => prevNews.map(news => (news.id === editedNews.id ? editedNews : news)));
  }

  const handleNextPage = () => {
    if (nextPageUrl) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (previousPageUrl) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Calculate current index
  const calculateIndex = (pageIndex, index) => {
    return (pageIndex - 1) * countPerPage + index + 1;
  };

  return (
    <div className="rounded-sm border border-stroke h-screen bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className='flex justify-end'>
        <Modal id="addNewsModal" title="Add News" name="Add News"
          styles="py-2 px-4 bg-orange-500 rounded-md text-white hover:bg-orange-400"        
        >
          <AddNews onNewsAdd={onNewsAdd} />
        </Modal>
      </div>
      
      <div className="overflow-x-auto">
        <table className="table table-zebra table-pin-rows table-xsm">
          <thead className='text-lg font-bold'>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Date</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {news.map((item, index) => (
              <tr key={item.id}>
                <td>
                  <p>{calculateIndex(currentPage, index)}</p>
                </td>
                <td>
                  <p>{item?.title}</p>
                </td>
                <td>
                  <p>{item?.date}</p>
                </td>
                <td>
                  <p>{truncateText(item?.description, 7)}</p>
                </td>
                <td>
                  <div className="flex items-center space-x-2">
                    <Modal id={`ViewNewsModal-${index}`}
                      title="View News Details"
                      styles="text-blue"
                      name={<svg className="fill-current cursor-pointer" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z" fill=""/>
                        <path d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z" fill=""/>
                      </svg>}
                    >
                      <NewsView news={item} />
                    </Modal>

                    <Modal id={`EditNewsModal-${index}`}
                      title="Edit News"
                      name={ <svg 
                        xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24" className='cursor-pointer'>
                          <path
                            d="M 18.400391 2 C 18.100391 2 17.899219 2.1007812 17.699219 2.3007812 L 15.707031 4.2929688 L 14.292969 5.7070312 L 3 17 L 3 21 L 7 21 L 21.699219 6.3007812 C 22.099219 5.9007812 22.099219 5.3003906 21.699219 4.9003906 L 19.099609 2.3007812 C 18.899609 2.1007812 18.700391 2 18.400391 2 z M 18.400391 4.4003906 L 19.599609 5.5996094 L 18.306641 6.8925781 L 17.107422 5.6933594 L 18.400391 4.4003906 z M 15.693359 7.1074219 L 16.892578 8.3066406 L 6.1992188 19 L 5 19 L 5 17.800781 L 15.693359 7.1074219 z">
                            </path>
                      </svg>}
                    >
                      <NewsEdit onEdit={handleEdit} news={item} />
                    </Modal>

                    <Modal id={`DelNewsModal-${index}`}
                      title="Delete News"
                      name={<svg xmlns="http://www.w3.org/2000/svg" className='cursor-pointer' width="20" height="20" viewBox="0 0 24 24" style={{ fill: '#000000' }}>
                      <path d="M20 2H15.41l-.83-.83C14.21 1.08 14 1 13.77 1H10.24C10.01 1 9.8 1.08 9.42 1.42L8.59 2H4c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1S20.55 2 20 2zM17.71 6.29C17.54 6.11 17.28 6 17 6H7c-.28 0-.54.11-.71.29C6.11 6.46 6 6.72 6 7v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7c0-.28-.11-.54-.29-.71zM9.17 9.17c.31-.31.85-.09.85.35v7.31c0 .44-.54.66-.85.35-.19-.2-.19-.51 0-.71V9.88C8.98 9.68 9.06 9.36 9.17 9.17zM15.83 9.17c.31-.31.85-.09.85.35v7.31c0 .44-.54.66-.85.35-.19-.2-.19-.51 0-.71V9.88C15.63 9.68 15.72 9.36 15.83 9.17zM12.5 9.5c.44 0 .5.6.5 1v6c0 .4-.06 1-.5 1s-.5-.6-.5-1v-6C12 10.1 12.06 9.5 12.5 9.5z"/>
                    </svg> }
                    >
                      <DelNews onDel={handleDelete} id={item.id} />
                    </Modal>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="max-w-40 justify-end join grid grid-cols-2">
        <button
          onClick={handlePreviousPage}
          disabled={!previousPageUrl}
          className={`join-item btn btn-outline ${previousPageUrl ? 'bg-orange-500 text-white' : 'bg-gray-100 text-white'}`}
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={!nextPageUrl}
          className={`join-item btn btn-outline ${nextPageUrl ? 'bg-orange-500 text-white' : 'bg-gray-100 text-white'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ListNews;