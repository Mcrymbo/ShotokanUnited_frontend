import { Routes, Route } from 'react-router-dom';
import Admin from './Admin/Admin';
import LandingPage from './pages/landingPage';

function App() {
  return (
      <Routes>
        <Route path='/' element={<LandingPage /> } />
        <Route path='/admin/*' element={<Admin />} />
      </Routes>
  )
}

export default App;
