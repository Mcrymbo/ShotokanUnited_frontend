import { Routes, Route } from 'react-router-dom';
import Admin from './Admin/Admin';
import AdminPage from './pages/AdminDashboard'
import LandingPage from './pages/landingPage';
// import UserPage from './pages/AdminDashboard/userPage';
import { About, Contact } from './pages'
import {SignIn, SignUp, ActivateAccount} from './pages/Authentication';
import { ProtectedRoute } from './components/protectedRoute';

function App() {
  return (
      <Routes>
       
          <Route path='/' element={<LandingPage /> } />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/admin1/*' element={<Admin />} />
          <Route path='/admin/*' element={<ProtectedRoute>
            <AdminPage />
          </ProtectedRoute>} />
          <Route path='/auth/login' element={<SignIn />} />
          <Route path='/auth/register' element={<SignUp />} />
          <Route path="/auth/activate" element={<ActivateAccount />} />
      </Routes>
  )
}

export default App;
