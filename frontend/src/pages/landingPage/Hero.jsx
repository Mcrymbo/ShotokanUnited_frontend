import { Link } from 'react-router-dom';
import { 
  homePic,
  teamSpirit2,
 } from '../../assets';


const Hero = () => {

  return (
    <>
    {/* <div className='sticky -z-10 top-0'> */}
      <div
        style={{ backgroundImage: `url(${teamSpirit2})` }}
        className="w-full h-64 bg-cover bg-center relative" >

        <div className='absolute inset-0 bg-black opacity-50' />  
      </div>       
    {/* </div> */}
  
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

      <div className="carousel w-full pt-20">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full" />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
      </div>
    </div>
    </>
  );
};

export default Hero;