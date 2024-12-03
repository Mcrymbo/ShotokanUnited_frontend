import { useState, useEffect } from 'react';
import { auth } from '../../hooks';
import { Link } from 'react-router-dom';
import { hdki_cover } from '../../assets';


export default function Event() {
  const [newsItems, setNewsItems] = useState([]);

  const handleNews = async () => {
    try {
      const response = await auth.get('/api/events/');
      setNewsItems(response.data.results);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    handleNews();
  }, [])

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {newsItems.slice(0, 3).map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <Link to={`/events/${item.id}`} >
            <img
              src={item.images[0]?.image_url || hdki_cover}
              alt='img'
              className="w-full h-52 object-cover rounded-md"
            />
            <h3 className="mt-4 text-xl font-semibold text-eerieBlack">
              {item.title}
            </h3>
            <p className="mt-2 text-gray-600">
              {item.description}
            </p>
            <p className="mt-6 text-gray-900 font-semibold text-sm">
              <strong>Date: </strong>{item.date}
            </p>
            </Link>
          </div>
        ))}
      </div>
      { newsItems.length > 3 ?
        <div className="text-center mt-2 flex justify-end">
        <Link to='/events'>
        <button className="hover:bg-orange-500 hover:text-white w-[48px] h-[48px] rounded-full text-2xl text-orange-500">
          {'>'}
        </button>
        </Link>
       
      </div> : ''
      }
    
    </div>
  );
}
