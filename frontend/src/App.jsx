import { Routes, Route } from 'react-router-dom';
import AdminPage from './pages/AdminDashboard';
import LandingPage from './pages/landingPage';
import { About, Contact, SukAffiliation, ClubAffiliation, DefaultNewsPage } from './pages';
import { TechnicalTeam, ExecutiveTeam, SukSquard } from './pages/Organization';
import { BlogPage } from './pages/BlogPost';
import { SignIn, SignUp, ActivateAccount } from './pages/Authentication';
import { ProtectedRoute } from './components/protectedRoute';
import NotFound from './components/NotFound';
import { Account } from './pages/Authentication';
// import DefaultNewsPage from './components/News/DefaultNewsPage';
import { ListEvents } from './components/Events';
import SingleNewsPage from './components/News/newsItem';
import { SingleEventPage, KarateRegistrationForm } from './components/Events';
import TermsOfUse from './components/termsOfUse';
import {RegistrationForm} from './pages';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-gray-100 via-gray-400 to-gray-200 relative overflow-hidden text-gray-700">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/technical-team' element={<TechnicalTeam />} />
        <Route path='/executive-commitee' element={<ExecutiveTeam />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/suk-affiliation' element={<SukAffiliation />} />
        <Route path='/club-affiliation' element={<ClubAffiliation />} />
        <Route path='/blogs' element={<BlogPage />} />
        <Route path='/suk-squard' element={<SukSquard />} />
        <Route path='/news' element={<DefaultNewsPage />} />
        <Route path='/news/:id' element={<SingleNewsPage />} />
        <Route path='/events' element={<ListEvents />} />
        <Route path='/events/:id' element={<SingleEventPage />} />
        <Route path='/events/:slug' element={<KarateRegistrationForm />} />
        <Route path='/admin/*' element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />
        <Route path='/terms-of-use' element={<TermsOfUse />} />
        <Route path='/auth/login' element={<SignIn />} />
        <Route path='/auth/register' element={<SignUp />} />
        <Route path="/register/:token" element={<RegistrationForm />} />
        <Route path="/auth/activate" element={<ActivateAccount />} />
        <Route path='/activate' element={<Account />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;