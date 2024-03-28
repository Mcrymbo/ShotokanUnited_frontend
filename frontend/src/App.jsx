import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/about';
import Contact from './pages/Contact/contact';
import LandingPage from './pages/landingPage';
import FooterComponent from './components/Footer/footer';
import Users from './pages/users';
import Events from './components/Events/Events';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import { AuthProvider } from './hooks/useAuth';
import { ProtectedRoute } from './components/protectedRoute';
import EventPage from './components/event/Event';
import Navbar from './components/Navbar/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Classes from './pages/Classes/Classes';


function App() {

  return (
    <div>
      <Router>
        <AuthProvider >
          <Navbar />
          {/* <LandingPage /> */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/classes' element={<Classes/>} />
            <Route path='users' element={<ProtectedRoute> <Users /> </ProtectedRoute>} />
            <Route path='events' element={<Events />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='signup' element={<SignupPage />} />
            <Route path='postEvent' element={<EventPage />} />
          </Routes>
          {/* <FooterComponent /> */}
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
