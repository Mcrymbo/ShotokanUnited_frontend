import { useState, useEffect } from 'react';
import { auth } from '../../hooks';
import { Link } from 'react-router-dom';
import { styles } from "../../styles"
import { hdki_cover } from '../../assets';


export default function News() {
  const [newsItems, setNewsItems] = useState([]);

  const handleNews = async () => {
    try {
      const response = await auth.get('/api/news/');
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
      <h1 className={`${styles.sectionHeadText} text-center`}>Latest News</h1>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.slice(0, 3).map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={item.cover_image_url || hdki_cover}
              alt='img'
              className="w-full h-52 object-cover rounded-t-lg"
            />
            <h3 className="mt-4 text-xl font-semibold text-eerieBlack">
              {item.title}
            </h3>
            <p className="mt-2 text-gray-600">
              {item.description}
            </p>
            <p className="mt-2 text-gray-400 text-sm">
              {item.date}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link to='/news'>
        <button className="sm:mx-auto mt-4 bg-orange-500 w-[30%] py-2 rounded-md text-white">
          See More
        </button>
        </Link>
       
      </div>
    </div>
  );
}
