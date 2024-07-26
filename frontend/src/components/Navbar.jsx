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

  const navItems = [
    { id: 1, text: 'Home', to: '/' },
    { id: 2, text: 'About', to: '/about' },
    { id: 3, text: 'Contact', to: '/contact' },
    { id: 4, text: user.id ? 'Logout' : 'Login', to: user ? '/auth/login' : '/login' },
  ];

  return (
    <div className='flex justify-between items-center h-20 max-w-[100vw] mx-auto px-4 shadow-md bg-white'>
      {/* Logo */}
      <Link to='/' className='flex items-center space-x-2'>
        <img src={logo} alt="Shotokan United" className='w-[60px] h-[60px]' />
        <h1 className='text-2xl font-bold text-red-400'>Shotokan United</h1>
      </Link>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex space-x-4'>
      {/* <input type="checkbox" value="light" className="toggle theme-controller" /> */}
        {navItems.map(item => (
          <li key={item.id} className='hover:text-red-500 cursor-pointer'>
            <Link
              to={item.to}
              onClick={item.text === 'Logout' ? handleLogout : undefined}
              className='p-2 rounded hover:bg-gray-200 transition'
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='md:hidden'>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`fixed top-0 left-0 w-[60%] h-full bg-black text-white border-r border-gray-900 transform ${
          nav ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-50`}
      >
        <div className='flex justify-between items-center p-4'>
          <Link to='/' onClick={handleNav}>
            <h1 className='text-2xl font-bold text-[#00df9a]'>SU</h1>
          </Link>
          <AiOutlineClose size={30} onClick={handleNav} />
        </div>

        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b border-gray-600 hover:bg-[#00df9a] transition'
          >
            <Link
              to={item.to}
              onClick={() => {
                handleNav();
                if (item.text === 'Logout') handleLogout();
              }}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
