import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

import logo from '../assets/images/logo.png'

const Navbar = () => {
  const { user, logout } = useAuth();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home', to: '/' },
    { id: 2, text: 'About', to: '/about' },
    { id: 3, text: 'Contact', to: '/contact' },
    { id: 4, text: 'Events', to: '/events' },
    { id: 5, text: user ? 'Logout' : 'Login', to: user ? '/' : '/login' }, // Conditionally render Logout or Login
  ];

  return (
    <div className='flex justify-between items-center h-40 max-w-[100vw] mx-auto px-4'>
      {/* Logo */}
      <Link to='/'>
        <img src={logo} alt="" className='mx-10 w-[120px] h-[120px]' />
        <h1 className='w-full text-3xl font-bold text-red-400'>Shotokan-United</h1>
      </Link>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:text-red-500 rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
            <Link to={item.to} onClick={item.text === 'Logout' ? logout : undefined}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={40} /> : <AiOutlineMenu size={40} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <Link to='/'>
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>SU</h1>
        </Link>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            <Link to={item.to} onClick={handleNav}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
