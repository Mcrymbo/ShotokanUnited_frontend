import { logo } from '../../assets';
import { Link } from 'react-router-dom';
import { SeoOptimizer } from '../../common';

function FooterComponent() { 
  return (
    <footer className="footer bg-gray-300 text-gray-800 font-medium p-4 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
      <aside className="col-span-2 md:col-span-1 flex flex-col items-start">
        <img 
          src={logo} 
          title='logo'
          width={240}
          height={192}
          loading='lazy'
          className='w-[60px] h-[60px] mb-4' 
          alt="Shotokan United" 
        />
        <p className="text-sm md:text-base">
          Shotokan United Kenya
          <br />
          Strength, discipline, and community
        </p>
      </aside>
      
      <nav className="flex flex-col">
        <h6 className="footer-title text-sm md:text-base mb-2">Programmes</h6>
        <a className="link link-hover text-xs md:text-sm mb-1">Kids karate</a>
        <a className="link link-hover text-xs md:text-sm mb-1">Women in Karate</a>
        <a className="link link-hover text-xs md:text-sm mb-1">Adults Karate</a>
        <a className="link link-hover text-xs md:text-sm">Karate for schools</a>
      </nav>
      
      <nav className="flex flex-col">
        <h6 className="footer-title text-sm md:text-base mb-2">Organization</h6>
        <Link to={"/about"} className="link link-hover text-xs md:text-sm mb-1">About us</Link>
        <Link to={"/contact"} className="link link-hover text-xs md:text-sm mb-1">Contact</Link>
        <Link to={"/news"} className="link link-hover text-xs md:text-sm mb-1">News</Link>
        <Link to={"#"} className="link link-hover text-xs md:text-sm">Blog</Link>
      </nav>
      
      <nav className="flex flex-col col-span-2 md:col-span-1">
        <h6 className="footer-title text-sm md:text-base mb-2">Legal</h6>
        <SeoOptimizer />
        <Link to='/terms-of-use' className="link link-hover text-xs md:text-sm mb-1">Terms of use</Link>
        <a className="link link-hover text-xs md:text-sm mb-1">Privacy policy</a>
        <a className="link link-hover text-xs md:text-sm">Cookie policy</a>
      </nav>
    </footer>
  );
}

export default FooterComponent;