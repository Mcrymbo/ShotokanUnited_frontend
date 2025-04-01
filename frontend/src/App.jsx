import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import LoadingSpinner from './components/LoadingSpinner';
import { ProtectedRoute } from './components/protectedRoute';

// Lazy loaded components
const LandingPage = lazy(() => import('./pages/landingPage'));
const AdminPage = lazy(() => import('./pages/AdminDashboard'));
const NotFound = lazy(() => import('./components/NotFound'));

// About Section
const About = lazy(() => import('./pages/About/About'));
const History = lazy(() => import('./pages/About/History'));
const MissionVision = lazy(() => import('./pages/About/MissionVision'));
const TechnicalCommittee = lazy(() => import('./pages/About/TechnicalCommitee'));

// Programs Section
const Programs = lazy(() => import('./pages/Programs'));
const KidsKarate = lazy(() => import('./pages/Programs/KidsKarate'));
const AdultTraining = lazy(() => import('./pages/Programs/AdultTraining'));
const WomenOnly = lazy(() => import('./pages/Programs/WomenOnly'));

// Events Section
const Events = lazy(() => import('./components/Events/ListEvents'));
const SingleEvent = lazy(() => import('./components/Events/SingleEventPage'));
const EventRegistration = lazy(() => import('./components/Events/KarateRegistrationForm'));

// News Section
const News = lazy(() => import('./pages/News'));
const SingleNews = lazy(() => import('./components/News/newsItem'));

// Club Affiliation Section
const ClubAffiliation = lazy(() => import('./pages/Affiliation/ClubAffiliation'));
const Benefits = lazy(() => import('./pages/Affiliation/Benefits'));
const Requirements = lazy(() => import('./pages/Affiliation/Requirements'));
const AffiliationForm = lazy(() => import('./pages/Affiliation/AffiliationForm'));

// Authentication
const SignIn = lazy(() => import('./pages/Authentication/SignIn'));
const SignUp = lazy(() => import('./pages/Authentication/SignUp'));
const ActivateAccount = lazy(() => import('./pages/Authentication/ActivateAccount'));
const Account = lazy(() => import('./pages/Authentication/Account'));

// Other Pages
const Contact = lazy(() => import('./pages/Contact'));
const TermsOfUse = lazy(() => import('./components/termsOfUse'));

function App() {
  return (
    <div className="min-h-screen bg-flashWhite relative overflow-hidden">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Main Route */}
          <Route path="/" element={<LandingPage />} />

          {/* About Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/about/mission" element={<MissionVision />} />
          <Route path="/about/committee" element={<TechnicalCommittee />} />

          {/* Programs Routes */}
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/kids" element={<KidsKarate />} />
          <Route path="/programs/adults" element={<AdultTraining />} />
          <Route path="/programs/women" element={<WomenOnly />} />

          {/* Events Routes */}
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<SingleEvent />} />
          <Route path="/events/:slug/register" element={<EventRegistration />} />

          {/* News Routes */}
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<SingleNews />} />

          {/* Club Affiliation Routes */}
          <Route path="/club-affiliation" element={<ClubAffiliation />} />
          <Route path="/club-affiliation/benefits" element={<Benefits />} />
          <Route path="/club-affiliation/requirements" element={<Requirements />} />
          <Route path="/club-affiliation/apply" element={<AffiliationForm />} />

          {/* Authentication Routes */}
          <Route path="/auth/login" element={<SignIn />} />
          <Route path="/auth/register" element={<SignUp />} />
          <Route path="/auth/activate" element={<ActivateAccount />} />
          <Route path="/account" element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          } />

          {/* Admin Routes */}
          <Route path="/admin/*" element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          } />

          {/* Other Routes */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<TermsOfUse />} />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;