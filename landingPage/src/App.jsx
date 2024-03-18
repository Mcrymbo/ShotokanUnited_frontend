import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import FeatureSection from './components/Features';
import AboutSection from './components/About';
import ContactPage from './components/Contact';
import FooterComponent from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <div className='px-4'>
        <div id="home"><HeroSection /></div>
        <div id="features"><FeatureSection /></div>
        <div id="about"><AboutSection /></div>
        <div id="contact"><ContactPage /></div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
