import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useLogout } from '../hooks';
import { useUser } from '../hooks';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useUser();
  const [nav, setNav] = useState(false);
  const history = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    setNav(false);
    history('/auth/login');
  };


  return (
    <nav className='sticky -top-4 z-50 flex justify-between items-center h-20 max-w-[100vw] mx-auto px-4 shadow-md bg-white'>
      {/* Logo */}
      <Link to='/' className='flex items-center space-x-2'>
        <img src={logo} alt="Shotokan United"
            title='shotokan united'
            width={240}
            height={192}
            loading='eager'
            className='w-[60px] h-[60px]' />
        <section className='text-2xl font-bold text-red-400'>Shotokan United</section>
      </Link>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex space-x-4'>
        {/* Home */}
        <li className='hover:text-red-600 transition'><Link to={'/'}>HOME</Link></li>
        {/* About dropdown */}
          <li>
          <div className="dropdown dropdown-hover">
          <div
              tabIndex={0}
              role="button"
              className="flex items-center space-x-4 cursor-pointer hover:text-red-600 transition"
            >
              ABOUT US
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 20 20"
                  width="20"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                </svg>
              </span>
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 z-[1] w-60 p-2 shadow">
              <li className='border-b border-neutral-300'><Link to='/about'>About Shotokan United Kenya</Link></li>
              {/* <li className='border-b border-neutral-300'><Link to='#'>HDKI Kenya</Link></li> */}
              <li className='border-b border-neutral-300'><Link to='/technical-team'>Technical Commitee</Link></li>
              <li className='border-b border-neutral-300'><Link to='/executive-commitee'>Executive commitee</Link></li>
              <li className='border-b border-neutral-300'><Link to='/suk-squard'>SUK/HDKI Kenya Squad</Link></li>
            </ul>
          </div>
          </li>

          {/* Affiliation dropdown */}
          <li>
          <div className="dropdown dropdown-hover">
          <div
              tabIndex={0}
              role="button"
              className="flex items-center space-x-4 cursor-pointer hover:text-red-600 transition"
            >
              AFFILIATION
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 20 20"
                  width="20"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                </svg>
              </span>
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 z-[1] w-60 p-2 shadow">
              <li className='border-b border-neutral-300'><Link to='/suk-affiliation'>SUK/HDKI-K Affiliation</Link></li>
              <li className='border-b border-neutral-300'><Link to='/club-affiliation'>Club Affiliation</Link></li>
            </ul>
          </div>
          </li>

          {/* News Link */}
          <li className='hover:text-red-600 transition'><Link to={'/news'}>NEWS</Link></li>
          {/* Contact */}
          <li className='hover:text-red-600 transition'><Link to={'/contact'}>CONTACT</Link></li>
          {/* Blog */}
          <li className='hover:text-red-600 transition'><Link to={'/blogs'}>BLOG</Link></li>
          {/* Login */}
          {
            user.id ?
            <li className='hover:text-red-600 transition' onClick={handleLogout}>Logout</li>
            :          
          <li className='hover:text-red-600 transition'><Link to={'/auth/login'}>Login</Link></li>
          }
      </ul>


      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='md:hidden'>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`fixed top-0 left-0 w-[50%] h-screen bg-black text-white transform ${
          nav ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-50`}
      >
        <div className='flex justify-end p-2'> <AiOutlineClose size={30} onClick={handleNav} /></div>
        
        <div className='flex justify-center mt-2 mb-4'>
          <Link to='/'>
            <img src={logo} alt="logo" className='size-30'/>
          </Link>
        </div>
    
        <div className='text-lg font-medium text-neutral-400 mb-2 border-b mx-auto max-w-[90%]'>MENU</div>
        
        <div className='max-h-[300px] overflow-y-auto'>
        {/* Home */}
        <li><Link to={'/'} className='px-4'>Home</Link></li>
        {/* About dropdown */}
        <li>
          <div tabIndex={0}  className="collapse collapse-arrow">
            <input type="checkbox" className="peer" /> 
            <div className="collapse-title p-y cursor-pointer">
              About
            </div>
            <ul className="collapse-content peer-checked:block max-h-[80px] overflow-y-auto text-sm text-battleGray">
              <li className='border-b border-neutral-300'><Link to='/about'>About SUK</Link></li>
              {/* <li className='border-b border-neutral-300'><Link to='#'>HDKI Kenya</Link></li> */}
              <li className='border-b border-neutral-300'><Link to='/technical-team'>Technical Commitee</Link></li>
              <li className='border-b border-neutral-300'><Link to='/executive-commitee'>Executive commitee</Link></li>
              <li className='border-b border-neutral-300'><Link to='/suk-squard'>SUK/HDKI-K Squad</Link></li>
            </ul>
          </div>
        </li>

        {/* About dropdown */}
        <li>
          <div tabIndex={0}  className="collapse collapse-arrow">
            <input type="checkbox" className="peer" /> 
            <div className="collapse-title p-y cursor-pointer">
              Affiliation
            </div>
            <ul className="collapse-content peer-checked:block max-h-[80px] overflow-y-auto text-sm text-battleGray">
              <li className='border-b border-neutral-300'><Link to='/suk-affiliation'>SUK/HDKI-K Affiliation</Link></li>
              <li className='border-b border-neutral-300'><Link to='/club-affiliation'>Club Affiliation</Link></li>
            </ul>
          </div>
        </li>

          {/* News Link */}
          <li><Link to={'/news'} className='px-4'>
                    
          News</Link></li>
          {/* Contact */}
          <li className='py-4'><Link to={'/contact'} className='px-4'>Contact Us</Link></li>
          {/* Blog */}
          <li><Link to={'/blogs'} className='px-4'>Blog</Link></li>
          {/* Login */}
          {
            user.id ?
            <li className='py-4' onClick={handleLogout}>Logout</li>
            :          
          <li  className='py-4'><Link to={'/auth/login'} className='px-4'>Login</Link></li>
          }
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
