import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className='navbar navbar-expand-md mx-auto px-5'>
      <div className="container-fluid">
        <Link to='/' className='navbar-brand '>
          <h1 className='logo'>Shotokan-United</h1>
        </Link>

        {/* Navigation links */}
        <ul className={`navbar-nav ml-auto ${navOpen ? 'show-sidebar' : 'hide-sidebar'}`}>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-link'>About</Link>
          </li>
          <li className='nav-item'>
            <Link to='/classes' className='nav-link'>Classes</Link>
          </li>
          <li className='nav-item'>
            <Link to='/events' className='nav-link'>Events</Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-link'>Contact</Link>
          </li>
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNavToggle} className='block md:hidden'>
          {navOpen ? <IoClose className='text-light' size={25} /> : <FaBars className='text-light' size={25} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
