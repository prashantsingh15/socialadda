import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0F] border-t border-white/10 pt-20 pb-10" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <img src="/logo.png" alt="Social Adda" className="h-14 w-auto mb-6" />
            <p className="text-[#A0A0A0] text-sm leading-relaxed">
              Building brands through authentic creators & measurable impact. Powering influence across India.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'For Creators', path: '/creators' },
                { label: 'For Brands', path: '/brands' },
                { label: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-[#A0A0A0] text-sm hover:text-[#00F0FF] transition-colors duration-300" data-testid={`footer-link-${item.label.toLowerCase().replace(' ', '-')}`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-[#A0A0A0] text-sm">
                <Mail className="w-4 h-4 mr-3 text-[#00F0FF]" />
                business@socialadda.org
              </li>
              <li className="flex items-center text-[#A0A0A0] text-sm">
                <Phone className="w-4 h-4 mr-3 text-[#00F0FF]" />
                +91 9211758155
              </li>
              <li className="flex items-start text-[#A0A0A0] text-sm">
                <MapPin className="w-4 h-4 mr-3 mt-0.5 text-[#00F0FF]" />
                India
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Follow Us</h4>
            <div className="flex space-x-4">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Youtube, label: 'YouTube' },
              ].map(({ icon: Icon, label }) => (
                <a key={label} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#A0A0A0] hover:border-[#00F0FF] hover:text-[#00F0FF] transition-all duration-300" aria-label={label} data-testid={`social-${label.toLowerCase()}`}>
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-[#A0A0A0] text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Social Adda. All rights reserved. Powering Influence Across India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
