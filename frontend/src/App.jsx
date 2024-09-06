import { Routes, Route } from 'react-router-dom';
import AdminPage from './pages/AdminDashboard'
import LandingPage from './pages/landingPage';
import { About, Contact, SukAffiliation, ClubAffiliation } from './pages'
import { TechnicalTeam, ExecutiveTeam, SukSquard } from './pages/Organization';
import {SignIn, SignUp, ActivateAccount} from './pages/Authentication';
import { ProtectedRoute } from './components/protectedRoute';
import NotFound from './components/NotFound';
import { Account } from './pages/Authentication';
import DefaultNewsPage from './components/News/DefaultNewsPage';



function App() {
  return (
      <Routes>
          <Route path='/' element={<LandingPage /> } />
          <Route path='/about' element={<About />} />
          <Route path='/technical-team' element={<TechnicalTeam />} />
          <Route path='/executive-commitee' element={<ExecutiveTeam />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/suk-affiliation' element={<SukAffiliation /> }/>
          <Route path='/club-affiliation' element={<ClubAffiliation />} />
          <Route path='/suk-squard' element={<SukSquard />} />
          <Route path='/news' element={<DefaultNewsPage />} />
          <Route path='/admin/*' element={<ProtectedRoute>
            <AdminPage />
          </ProtectedRoute>} />
          <Route path='/auth/login' element={<SignIn />} />
          <Route path='/auth/register' element={<SignUp />} />
          <Route path="/auth/activate" element={<ActivateAccount />} />
          <Route path='/activate' element={<Account />} />
          <Route path="*" element={ <NotFound /> }/>
      </Routes>
  )
}

export default App;
