import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Contact from './pages/contact';
import Navbar from './components/Navbar';
import LandingPage from './pages/landingPage';
import FooterComponent from './components/footer';
import Users from './pages/users';
import Events from './components/Events';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        {/* <LandingPage /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='users' element={<Users />}/>
          <Route path='events' element={<Events />} />
        </Routes>
        <FooterComponent />
      </Router>
    </>
  )
}

export default App
