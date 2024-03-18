import React, { useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (section) => {
    setActiveSection(section);
    // Scroll to the corresponding section on the page
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Karate United Kenya</div>
        <div>
          <button className={`mr-4 ${activeSection === 'about' ? 'font-bold' : ''}`} onClick={() => handleNavClick('about')}>About</button>
          <button className={`mr-4 ${activeSection === 'Featurs' ? 'font-bold' : ''}`} onClick={() => handleNavClick('features')}>Features</button>
          <button className={`${activeSection === 'contact' ? 'font-bold' : ''}`} onClick={() => handleNavClick('contact')}>Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;