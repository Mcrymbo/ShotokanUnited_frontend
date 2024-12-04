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
    <nav className="sticky top-0 z-50 flex justify-between items-center h-20 max-w-full mx-auto px-6 shadow-lg bg-gray-800">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <img
          src={logo}
          alt="Shotokan United"
          title="Shotokan United"
          width={240}
          height={192}
          className="w-[60px] h-[60px] object-contain"
        />
        <span className="text-2xl font-bold text-orange-500">Shotokan United</span>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 text-gray-200">
        {/* Home */}
        <li className="hover:text-orange-500 transition duration-300">
          <Link to="/">HOME</Link>
        </li>
        
        {/* About dropdown */}
        <li className="relative group">
          <div className="flex items-center space-x-2 cursor-pointer hover:text-orange-500 transition duration-300">
            <span>ABOUT US</span>
            <svg xmlns="http://www.w3.org/2000/svg" className='fill-orange-400 hover:fill-orange-600' height="20" viewBox="0 0 20 20" width="20">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            </svg>
          </div>
          <ul className="absolute left-0 hidden group-hover:block bg-gray-700 text-gray-200 p-2 w-60 shadow-lg">
            <li className="border-b border-gray-600 hover:text-orange-500 transition duration-300"><Link to="/about">About Shotokan United Kenya</Link></li>
            <li className="border-b border-gray-600 hover:text-orange-500 transition duration-300"><Link to="/technical-team">Technical Committee</Link></li>
            <li className="border-b border-gray-600 hover:text-orange-500 transition duration-300"><Link to="/executive-commitee">Executive Committee</Link></li>
            <li className="border-b border-gray-600 hover:text-orange-500 transition duration-300"><Link to="/suk-squard">SUK/HDKI Kenya Squad</Link></li>
          </ul>
        </li>

        {/* Affiliation dropdown */}
        <li className="relative group">
          <div className="flex items-center space-x-2 cursor-pointer hover:text-orange-500 transition duration-300">
            <span>AFFILIATION</span>
            <svg xmlns="http://www.w3.org/2000/svg" className='fill-orange-400 hover:fill-orange-600' height="20" viewBox="0 0 20 20" width="20">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            </svg>
          </div>
          <ul className="absolute left-0 hidden group-hover:block bg-gray-700 text-gray-200 p-2 w-60 shadow-lg">
            <li className="border-b border-gray-600 hover:text-orange-500 transition duration-300"><Link to="/suk-affiliation">SUK/HDKI-K Affiliation</Link></li>
            <li className="border-b border-gray-600 hover:text-orange-500 transition duration-300"><Link to="/club-affiliation">Club Affiliation</Link></li>
          </ul>
        </li>

         {/* Karate dropdown */}
         <li className="relative group">
          <div className="flex items-center space-x-2 cursor-pointer hover:text-orange-500 transition duration-300">
            <span>KARATE</span>
            <svg xmlns="http://www.w3.org/2000/svg" className='fill-orange-400 hover:fill-orange-600' height="20" viewBox="0 0 20 20" width="20">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            </svg>
          </div>
          <ul className="absolute left-0 hidden group-hover:block bg-gray-700 text-gray-200 p-2 w-60 shadow-lg">
            <li className="border-b border-gray-600 hover:text-orange-500 transition duration-300"><Link to="/news">News</Link></li>
            <li className="border-b border-gray-600 hover:text-orange-500 transition duration-300"><Link to="/blogs">Blogs</Link></li>
          </ul>
        </li>

        {/* Contact */}
        <li className="hover:text-orange-500 transition duration-300">
          <Link to="/contact">CONTACT</Link>
        </li>

        {/* Login/Logout */}
        {user.id ? (
          <li className="hover:text-orange-500 transition duration-300 cursor-pointer" onClick={handleLogout}>
            Logout
          </li>
        ) : (
          <li className="hover:text-orange-500 transition duration-300">
            <Link to="/auth/login">Login</Link>
          </li>
        )}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="md:hidden text-gray-200">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`fixed top-0 left-0 w-[60%] h-screen bg-gray-800 text-gray-200 transform ${
          nav ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-50`}
      >
        <div className="flex justify-end p-4">
          <AiOutlineClose size={30} onClick={handleNav} />
        </div>
        <div className="flex justify-center mt-4 mb-6">
          <Link to="/">
            <img src={logo} alt="logo" className="w-32 h-auto" />
          </Link>
        </div>
        <div className="text-lg font-semibold text-gray-400 mb-4 border-b mx-auto max-w-[90%]">MENU</div>

        <div className="max-h-[300px] overflow-y-auto">
          {/* Home */}
          <li>
            <Link to="/" className="block px-4 py-2 hover:text-orange-500">
              Home
            </Link>
          </li>

          {/* About Dropdown */}
          <li>
            <div className="collapse collapse-arrow">
              <input type="checkbox" className="peer" />
              <div className="collapse-title cursor-pointer">About</div>
              <ul className="collapse-content peer-checked:block text-sm text-gray-300">
                <li><Link to="/about">About SUK</Link></li>
                <li><Link to="/technical-team">Technical Committee</Link></li>
                <li><Link to="/executive-commitee">Executive Committee</Link></li>
                <li><Link to="/suk-squard">SUK/HDKI-K Squad</Link></li>
              </ul>
            </div>
          </li>

          {/* Affiliation Dropdown */}
          <li>
            <div className="collapse collapse-arrow">
              <input type="checkbox" className="peer" />
              <div className="collapse-title cursor-pointer">Affiliation</div>
              <ul className="collapse-content peer-checked:block text-sm text-gray-300">
                <li><Link to="/suk-affiliation">SUK/HDKI-K Affiliation</Link></li>
                <li><Link to="/club-affiliation">Club Affiliation</Link></li>
              </ul>
            </div>
          </li>

           {/* Karate Dropdown */}
           <li>
            <div className="collapse collapse-arrow">
              <input type="checkbox" className="peer" />
              <div className="collapse-title cursor-pointer">KARATE</div>
              <ul className="collapse-content peer-checked:block text-sm text-gray-300">
                <li><Link to="/news">News</Link></li>
                <li><Link to="/blogs">Blog</Link></li>
              </ul>
            </div>
          </li>

          {/* Contact */}
          <li>
            <Link to="/contact" className="block px-4 py-2 hover:text-orange-500">
              Contact Us
            </Link>
          </li>

          {/* Login/Logout */}
          {user.id ? (
            <li className="py-4 block px-4 hover:text-orange-500 cursor-pointer" onClick={handleLogout}>
              Logout
            </li>
          ) : (
            <li className="py-4 block px-4 hover:text-orange-500">
              <Link to="/auth/login">Login</Link>
            </li>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
