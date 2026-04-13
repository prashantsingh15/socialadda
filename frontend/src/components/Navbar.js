import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Creators', path: '/creators' },
    { name: 'Brands', path: '/brands' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="backdrop-blur-2xl bg-[#0B0B0F]/70 border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center" data-testid="navbar-logo">
            <img src="/logo.png" alt="Social Adda" className="h-12 w-auto" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-link-${link.name.toLowerCase()}`}
                className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-[#00F0FF]'
                    : 'text-[#A0A0A0] hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              to="/contact"
              data-testid="nav-cta-button"
              className="bg-[#00F0FF] text-[#0B0B0F] font-bold py-2.5 px-6 rounded-full text-sm hover:bg-white transition-colors duration-300 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
            data-testid="mobile-menu-button"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#12121A] border-t border-white/10" data-testid="mobile-menu">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                data-testid={`mobile-nav-link-${link.name.toLowerCase()}`}
                className={`block text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-[#00F0FF]'
                    : 'text-[#A0A0A0] hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              data-testid="mobile-cta-button"
              className="block w-full text-center bg-[#00F0FF] text-[#0B0B0F] font-bold py-3 px-6 rounded-full hover:bg-white transition-colors duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
