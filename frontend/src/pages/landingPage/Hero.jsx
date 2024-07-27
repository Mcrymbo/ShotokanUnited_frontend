import { Link } from 'react-router-dom';
import { 
  homePic,
  teamSpirit2,
 } from '../../assets';

 const items = [
  {
    image: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
  },
  {
    image: "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
  },
  {
    image: "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
  },
  {
    image: "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
  }
 ]


const Hero = () => {

  return (
    <>
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
          <Link to='/auth/register'>
            <button className="sm:mx-auto mt-4 bg-orange-500 w-[30%] py-2 rounded-md text-white">
              Explore more
            </button>
          </Link>
        </section>
        <img
          className="w-full h- sm:w-1/2 mt-6 sm:mt-0 sm:ml-6"
          src={homePic}
          alt="SUK"
          loading="eager"
        />
      </div>

      <div className="carousel w-full">
        {items.map((item, index) => (
            <div key={index} id={`slide${index + 1}`} className="carousel-item relative w-full">
              <img src={item.image} className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href={`#slide${(index === 0 ? items.length : index)}`} className="btn btn-circle">❮</a>
                <a href={`#slide${(index + 2 > items.length ? 1 : index + 2)}`} className="btn btn-circle">❯</a>
              </div>
            </div>
          ))}
  </div>
    </div>
    </>
  );
};

export default Hero;