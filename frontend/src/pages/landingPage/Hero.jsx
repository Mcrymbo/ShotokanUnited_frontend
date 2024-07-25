import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { homePic } from '../../assets';
import { heroimages } from '../../constants';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: windowWidth >= 1024 ? 3 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="mx-auto max-w-screen-lg py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row items-center w-full">
        <section className="relative flex flex-col w-full sm:w-1/2 lg:p-6">
          <div>
            <h1 className="text-2xl md:text-5xl lg:text-4xl font-bold text-eerieBlack font-poppins uppercase">
              Unleashing Inner Warrior
            </h1>
            <h2 className="text-xl md:text-2xl lg:mt-4 text-eerieBlack w-full">
              Join Shotokan United and become part of a legacy of strength, discipline, and community.
            </h2>
          </div>
          <Link to="/auth/register">
            <button className="sm:mx-auto mt-4 bg-orange-500 w-[30%] py-2 rounded-md text-white">
              Explore more
            </button>
          </Link>
        </section>
        <img
          className="w-full h-auto sm:w-1/2 mt-6 sm:mt-0 sm:ml-6"
          src={homePic}
          alt="SUK"
          loading="lazy"
        />
      </div>
      <div className="relative mt-6">
        <Slider {...sliderSettings}>
          {heroimages.map((image, index) => (
            <div key={index} className="px-2">
              <img src={image.icon} alt={`Hero Image ${index}`} className="h-[50vh] w-full object-cover" loading="lazy" />
              <p className="text-center mt-2">{image.title}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-black bg-opacity-50 p-2 rounded-full"
    onClick={onClick}
  >
    <FontAwesomeIcon icon={faChevronLeft} size="2x" className="text-white" />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-black bg-opacity-50 p-2 rounded-full"
    onClick={onClick}
  >
    <FontAwesomeIcon icon={faChevronRight} size="2x" className="text-white" />
  </div>
);

CustomPrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

CustomNextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Hero;
