import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, User, Search, Bell } from 'lucide-react';
import { logo } from '../assets';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState('');
  const location = useLocation();

  // Navigation Items
  const navItems = [
    { 
      title: 'About', 
      path: '/about',
      dropdown: [
        { title: 'About', path: '/about' },
        { title: 'Our History', path: '/about/history' },
        { title: 'Mission & Vision', path: '/about/mission' },
        { title: 'Technical Committee', path: '/about/committee' }
      ]
    },
    { 
      title: 'Programs', 
      path: '/programs',
      dropdown: [
        { title: 'Kids Karate', path: '/programs/karate-for-kids' },
        { title: 'Adult Training', path: '/programs/adults-karate-training' },
        { title: 'Women Only', path: '/programs/women-in-karate' }
      ]
    },
    { title: 'Events', path: '/events' },
    { title: 'News', path: '/news' },
    { 
      title: 'Club Affiliation', 
      path: '/club-affiliation',
      dropdown: [
        { title: 'Benefits', path: '/club-affiliation/benefits' },
        { title: 'Requirements', path: '/club-affiliation/requirements' },
        { title: 'Apply Now', path: '/club-affiliation/apply' }
      ]
    },
    { title: 'Contact', path: '/contact' }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen('');
  }, [location.pathname]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent/60'
      }`}
    >
      {/* Top Bar */}
      <div className={`bg-wine-700 text-white transition-all duration-300 ${
        isScrolled ? 'h-0 overflow-hidden' : 'h-10'
      }`}>
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full text-sm">
            <div className="flex items-center gap-6">
              <span>📞 +254 123 456 789</span>
              <span>📧 info@shotokanunited.org</span>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/news" className="hover:text-gold transition-colors">Latest News</Link>
              <Link to="/events" className="hover:text-gold transition-colors">Upcoming Events</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Shotokan United" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.title} className="relative group">
                <button
                  onClick={() => setDropdownOpen(dropdownOpen === item.title ? '' : item.title)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300
                    flex items-center gap-1 group ${
                    location.pathname === item.path 
                      ? 'text-wine-700 bg-wine-50' 
                      : 'text-wine-800 hover:text-wine-700 hover:bg-wine-50'
                  }`}
                >
                  <Link to={item.path}>
                    {item.title}
                  </Link>
                  {item.dropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      dropdownOpen === item.title ? 'rotate-180' : ''
                    }`} />
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {dropdownOpen === item.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 w-64 py-2 mt-1 bg-white rounded-xl shadow-xl border border-wine-100"
                      >
                        {item.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.title}
                            to={dropItem.path}
                            className="block px-4 py-2 text-sm text-neutral-700 hover:bg-wine-50 
                              hover:text-wine-700 transition-all duration-300 first:rounded-t-lg last:rounded-b-lg"
                          >
                            {dropItem.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            {/* Action Buttons */}
            <div className="ml-6 flex items-center space-x-3">
              {/* <button className="p-2 rounded-full text-neutral-600 hover:text-wine-700 hover:bg-wine-50 transition-all duration-300">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full text-neutral-600 hover:text-wine-700 hover:bg-wine-50 transition-all duration-300">
                <Bell className="w-5 h-5" />
              </button> */}
              <div className="h-6 w-px bg-neutral-200"></div>
              <Link 
                to="/auth/login" 
                className="px-4 py-2 rounded-lg text-wine-700 hover:bg-wine-50 transition-all duration-300 font-medium"
              >
                Sign In
              </Link>
              <Link 
                to="/auth/register" 
                className="px-4 py-2 rounded-lg bg-wine-700 text-white hover:bg-wine-800 
                  transition-all duration-300 font-medium shadow-lg shadow-wine-700/20"
              >
                Join Now
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-neutral-800 hover:bg-wine-50 transition-all duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-neutral-100"
          >
            <div className="container mx-auto px-4 py-4">
              {/* Mobile Search */}
              <div className="mb-4 relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 rounded-lg bg-neutral-50 border border-neutral-200 
                    focus:outline-none focus:border-wine-300 focus:ring-2 focus:ring-wine-100"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              </div>

              {/* Mobile Menu Items */}
              <div className="space-y-2">
                {navItems.map((item) => (
                  <div key={item.title}>
                    <button
                      onClick={() => setDropdownOpen(dropdownOpen === item.title ? '' : item.title)}
                      className={`w-full px-4 py-3 flex items-center justify-between rounded-lg 
                        transition-all duration-300 ${
                        location.pathname === item.path 
                          ? 'text-wine-700 bg-wine-50' 
                          : 'text-neutral-800 hover:bg-wine-50'
                      }`}
                    >
                      {item.title}
                      {item.dropdown && (
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          dropdownOpen === item.title ? 'rotate-180' : ''
                        }`} />
                      )}
                    </button>

                    {/* Mobile Dropdown */}
                    <AnimatePresence>
                      {item.dropdown && dropdownOpen === item.title && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-4 mt-1 space-y-1"
                        >
                          {item.dropdown.map((dropItem) => (
                            <Link
                              key={dropItem.title}
                              to={dropItem.path}
                              className="block px-4 py-2 text-sm text-neutral-700 hover:bg-wine-50 
                                hover:text-wine-700 rounded-lg transition-all duration-300"
                            >
                              {dropItem.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Mobile Auth Buttons */}
              <div className="mt-6 grid grid-cols-2 gap-3 px-4">
                <Link 
                  to="/login" 
                  className="btn btn-outline border-wine-200 text-wine-700 hover:bg-wine-50 
                    hover:border-wine-300 transition-all duration-300"
                >
                  Sign In
                </Link>
                <Link 
                  to="/register" 
                  className="btn bg-wine-700 text-white hover:bg-wine-800 transition-all duration-300"
                >
                  Join Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
