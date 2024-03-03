import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
 
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/${sectionId}`;
    }
  };

  return (
    <div className='bg-slate-700 p-8 text-white text-xl shadow-md w-full'>
        <div className='flex justify-between items-center mr-40 ml-20'>
            <div>SU</div>
            <nav className='flex space-x-8 list-none'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='about'>About</Link></li>
              <li><Link to='events'>Events</Link></li>
              <li><Link to='contact'>Contact</Link></li>
              <li><Link to='signup'>Sign Up</Link></li>
              <li><Link to='login'>Login</Link></li>
                {/* <li><button onClick={() => scrollToSection('home-section')}>Home</button></li>
                <li><button onClick={() => scrollToSection('about-section')}>About</button></li>
                <li><button onClick={() => scrollToSection('contact-section')}>Contact</button></li> */}
            </nav>
      
        </div>
    </div>
  )
}

export default Navbar
