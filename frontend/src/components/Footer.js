import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0F] border-t border-white/10 py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Social Adda</h3>
            <p className="text-[#A0A0A0] text-sm leading-relaxed">
              Powering India's top gaming creators and brand campaigns through strategic influencer marketing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-tight">Quick Links</h4>
            <ul className="space-y-3">
              <Link to="/about" className="block text-[#A0A0A0] hover:text-[#00F0FF] transition-colors duration-300" data-testid="footer-link-about">
                About Us
              </Link>
              <Link to="/services" className="block text-[#A0A0A0] hover:text-[#00F0FF] transition-colors duration-300" data-testid="footer-link-services">
                Services
              </Link>
              <Link to="/creators" className="block text-[#A0A0A0] hover:text-[#00F0FF] transition-colors duration-300" data-testid="footer-link-creators">
                Join as Creator
              </Link>
              <Link to="/brands" className="block text-[#A0A0A0] hover:text-[#00F0FF] transition-colors duration-300" data-testid="footer-link-brands">
                For Brands
              </Link>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-tight">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-[#A0A0A0] text-sm">
                <Mail className="w-4 h-4 mr-2 text-[#00F0FF]" />
                business@socialadda.org
              </li>
              <li className="flex items-center text-[#A0A0A0] text-sm">
                <Phone className="w-4 h-4 mr-2 text-[#00F0FF]" />
                +91 9523865073
              </li>
              <li className="flex items-start text-[#A0A0A0] text-sm">
                <MapPin className="w-4 h-4 mr-2 mt-1 text-[#00F0FF]" />
                India
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-tight">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-[#A0A0A0] hover:text-[#00F0FF] transition-colors duration-300" aria-label="Instagram" data-testid="social-instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#A0A0A0] hover:text-[#00F0FF] transition-colors duration-300" aria-label="Twitter" data-testid="social-twitter">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#A0A0A0] hover:text-[#00F0FF] transition-colors duration-300" aria-label="LinkedIn" data-testid="social-linkedin">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#A0A0A0] hover:text-[#00F0FF] transition-colors duration-300" aria-label="YouTube" data-testid="social-youtube">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-[#A0A0A0] text-sm">
            © {new Date().getFullYear()} Social Adda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
