// ShotokanUnited_frontend/frontend/src/pages/landingPage/Footer.jsx
import { logo } from '../../assets';
import { Link } from 'react-router-dom';
import { SeoOptimizer } from '../../common';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

function FooterComponent() {
  return (
    <footer className="relative bg-neutral text-neutral-content">
      <div className="mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={logo} 
                alt="Shotokan United" 
                className="w-16 h-16 object-contain"
                loading="lazy"
              />
              <span className="text-2xl font-bold text-primary-content">
                Shotokan United
              </span>
            </Link>
            
            <p className="text-gray-200">
              Empowering individuals through traditional Shotokan karate, 
              building strength, discipline, and community.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="btn btn-circle btn-ghost btn-sm hover:text-primary">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="btn btn-circle btn-ghost btn-sm hover:text-primary">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="btn btn-circle btn-ghost btn-sm hover:text-primary">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-primary-content">Programs</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/programs/kids" className="hover:text-primary transition-colors">
                  Kids Karate
                </Link>
              </li>
              <li>
                <Link to="/programs/women" className="hover:text-primary transition-colors">
                  Women in Karate
                </Link>
              </li>
              <li>
                <Link to="/programs/adults" className="hover:text-primary transition-colors">
                  Adults Karate
                </Link>
              </li>
              <li>
                <Link to="/programs/schools" className="hover:text-primary transition-colors">
                  Karate for Schools
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-primary-content">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-primary transition-colors">
                  News & Updates
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-primary transition-colors">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-primary-content">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>123 Dojo Street, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+254 123 456 789</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@shotokanunited.co.ke</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-base-content/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-base-content/60">
              © {new Date().getFullYear()} Shotokan United Kenya. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Use
              </Link>
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Optimizer */}
      <div className="hidden">
        <SeoOptimizer />
      </div>
    </footer>
  );
}

export default FooterComponent;