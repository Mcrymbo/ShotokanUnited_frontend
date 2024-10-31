import { memo} from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { homePic, teamSpirit2, allTeam1, ladiesTeam1 } from '../../assets';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const items = [
  { image: allTeam1 },
  { image: ladiesTeam1 },
  { image: teamSpirit2 },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

const Hero = () => (
  <div className="container mx-auto p-4 sm:p-6 lg:p-8">
    <div className="flex flex-col sm:flex-row items-center md:mb-8 w-full">
      <section className="relative flex flex-col w-full sm:w-1/2 md:p-6">
        <h1 className='sr-only'>Shotokan United Kenya</h1>
        <div className="text-2xl md:text-5xl lg:text-4xl font-bold text-eerieBlack font-poppins uppercase">
          Unleashing Inner Warrior
        </div>
        <h2 className="text-xl md:text-2xl lg:mt-4 text-eerieBlack w-full">
          Join Shotokan United and become part of a legacy of strength, discipline, and community.
        </h2>
        <Link to="/auth/register">
          <button className="sm:mx-auto mt-4 bg-orange-500 w-[30%] py-2 rounded-md text-white">
            Explore more
          </button>
        </Link>
      </section>

      <img
        src={homePic}
        alt="SUK"
        width={240}
        height={192}
        loading="eager"
        title='logo'
        className="w-full h-auto sm:w-1/2 mt-6 sm:mt-0 rounded-md"
      />
    </div>

    {/* --- Slider --- */}
    <div className="w-full h-auto mt-6 sm:mt-0 sm:ml-6">
      <Slider {...sliderSettings}>
        {items.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={`Slide ${index + 1}`} width={240} height={192} className="w-full h-[50vh] lg:max-h-56 object-cover" loading="lazy" />
          </div>
        ))}
      </Slider>
    </div>
  </div>
);

export default memo(Hero);