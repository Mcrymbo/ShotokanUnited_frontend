import { Link } from 'react-router-dom';
import { 
  homePic
 } from '../../assets';


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
          className="w-full h-auto sm:w-1/2 mt-6 sm:mt-0 sm:ml-6"
          src={homePic}
          alt="SUK"
          loading="eager"
          width={240}
          height={192}
          title='logo'
        />
      </div>
    </div>
    </>
  );
};

export default Hero;