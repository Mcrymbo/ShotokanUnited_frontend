import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCircle, faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { DefaultLayout } from '../../layout';
import {homePic} from '../../assets';
import { heroimages } from  '../../constants'

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1) % heroimages.length);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroimages.length);
  };
  return (
    <div className='mx-auto max-w-screen-lg py-10'>
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
          className="w-full sm:w-1/2 mt-6 sm:mt-0 sm:ml-6"
          src={homePic}
          alt="SUK"
        />
      </div>
      <div>
        <FontAwesomeIcon
          icon={faChevronLeft}
          size="2x"
          className="absolute left-4 sm:left-8 lg:left-12 cursor-pointer z-10"
        />

        <div className="mx-auto max-w-screen-lg flex justify-center mt-4 lg:space-x-6">
          {
            heroimages.map((image, index) => (
              <div key={index}>
                 <img src={image.icon} alt={`Hero Image ${index}`}
                 className='h-[50vh] w-[40vw]' />
                 <p>{image.title}</p>
              </div>
            ))
          }
        </div>

        <section>
          <div className="flex justify-center mt-4 space-x-2">
            {[0,1,2,3].map((image, index) => (
              <FontAwesomeIcon
                key={index}
                icon={currentImageIndex === index ? faCircleDot : faCircle}
                size="xs"
                className="cursor-pointer"
                onClick={handlePrevClick}

              />
            ))}
          </div>
        </section>

        <FontAwesomeIcon
          icon={faChevronRight}
          size="2x"
          className="absolute right-4 sm:right-8 lg:right-12 cursor-pointer z-10"
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default Hero;
