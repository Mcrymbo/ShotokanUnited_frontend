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
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import { AuthProvider } from './hooks/useAuth';
import { ProtectedRoute } from './components/protectedRoute';
import EventPage from './components/event/Event';

function App() {

  return (
    <div>
      <Router>
        <AuthProvider >
        <Navbar />
        {/* <LandingPage /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='users' element={<ProtectedRoute> <Users /> </ProtectedRoute>}/>
          <Route path='events' element={<Events />} />
          <Route path='login' element={<LoginPage />}/>
          <Route path='signup' element={<SignupPage />} />
          <Route path='postEvent' element={<EventPage />} />
        </Routes>
        <FooterComponent />
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
