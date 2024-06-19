import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCircle, faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { homePic } from '../../assets';
import { heroimages } from '../../constants';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width state on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine how many images to display based on window width
  const getDisplayedImages = () => {
    if (windowWidth >= 1024) {
      // For large screens, show 4 images
      return heroimages.slice(currentImageIndex, currentImageIndex + 4);
    } else {
      // For smaller screens, show only the current image
      return heroimages.slice(currentImageIndex, currentImageIndex + 1);
    }
  };

  const displayedImages = getDisplayedImages();

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + heroimages.length) % heroimages.length);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroimages.length);
  };

  return (
    <div className='mx-auto max-w-screen-lg py-10 px-4 sm:px-6 lg:px-8'>
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
          <button className="sm:mx-auto mt-4 bg-orange-500 w-[30%] py-2 rounded-md text-white">
            Explore more
          </button>
        </section>
        <img
          className="w-full h- sm:w-1/2 mt-6 sm:mt-0 sm:ml-6"
          src={homePic}
          alt="SUK"
          loading="lazy"
        />
      </div>
      <div className="relative flex justify-center items-center mt-6">
        <FontAwesomeIcon
          icon={faChevronLeft}
          size="2x"
          className="absolute -left-3 sm:left-8 lg:left-0 cursor-pointer z-10"
          onClick={handlePrevClick}
        />
        <div className="mx-auto max-w-screen-lg w-[100%] flex justify-center mt-4 lg:space-x-6">
          {displayedImages.map((image, index) => (
            <div key={index} className="w-full lg:w-1/4 px-2">
              <img src={image.icon} alt={`Hero Image ${index}`} className='h-[50vh] w-full object-cover' loading="lazy" />
              <p className="text-center mt-2">{image.title}</p>
            </div>
          ))}
        </div>
        <FontAwesomeIcon
          icon={faChevronRight}
          size="2x"
          className="absolute -right-3 sm:right-1 lg:right-0 cursor-pointer z-10"
          onClick={handleNextClick}
        />
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {heroimages.map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={currentImageIndex === index ? faCircleDot : faCircle}
            size="xs"
            className="cursor-pointer"
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;