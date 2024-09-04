import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { 
  homePic, teamSpirit2, allTeam1, ladiesTeam1
} from '../../assets';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const items = [
  {
    image: allTeam1,
  },
  {
    image: ladiesTeam1,
  },
  {
    image: teamSpirit2,
  },
  // {
  //   image: "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
  // }
];

const Hero = () => {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      // setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row items-center md:mb-8 w-full">
        <section className="relative flex flex-col w-full sm:w-1/2 md:p-6">
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
          src={homePic}
          alt="SUK"
          loading="eager"
          width={240}
          height={192}
          title='logo'
          className="w-full h-auto sm:w-1/2 mt-6 sm:mt-0"
        />
        
      </div>

      {/* ---Slider--- */}
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
};

export default Hero;
